import React, { useCallback } from 'react';
import { isEmpty } from 'lodash';
import { Badge, Box, ImageLoader, Stack, Text, TextClamp } from '@bubbles-ui/components';
import { LibraryCardContentStyles } from './LibraryCardContent.styles';
import {
  LIBRARY_CARD_CONTENT_DEFAULT_PROPS,
  LIBRARY_CARD_CONTENT_PROP_TYPES,
} from './LibraryCardContent.constants';

const getAverageTime = (seconds) => {
  if (seconds <= 59) {
    return `${seconds}s`;
  } else {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    return secondsLeft === 0 ? `${minutes}m` : `${minutes}m ${secondsLeft}s`;
  }
};

const getDomain = (url) => {
  const domain = url.split('//')[1];
  return (domain.split('/')[0] || '').replace('www.', '');
};

const LibraryCardContent = ({
  tagline,
  description,
  tags,
  metadata,
  locale,
  variant,
  assigment,
  icon,
  url,
  truncated,
  fullHeight,
  ...props
}) => {
  const { classes, cx } = LibraryCardContentStyles({ fullHeight }, { name: 'LibraryCardContent' });

  const getBadge = useCallback(() => {
    if (assigment.completed <= 0.2)
      return (
        <Badge
          label={`${assigment.completed * 100}%`}
          severity={'error'}
          closable={false}
          radius={'default'}
        />
      );
    if (assigment.completed <= 0.5)
      return (
        <Badge
          label={`${assigment.completed * 100}%`}
          severity={'warning'}
          closable={false}
          radius={'default'}
        />
      );
    if (assigment.completed >= 0.6)
      return (
        <Badge
          label={`${assigment.completed * 100}%`}
          severity={'success'}
          closable={false}
          radius={'default'}
        />
      );
  }, [assigment]);

  const getVariant = () => {
    switch (variant) {
      case 'assigment':
        return (
          <Box className={classes.mainContainer}>
            {!isEmpty(assigment) ? (
              <Stack direction="column" spacing={1} fullWidth>
                {(isEmpty(assigment?.labels) || !isEmpty(assigment.labels?.subject)) && (
                  <Stack fullWidth>
                    <Text size={'xs'} role="productive" className={classes.label}>
                      {assigment.labels?.subject || 'Subject'}
                    </Text>
                    <Text size={'xs'} role="productive" weight={600}>
                      {assigment.subject.name}
                    </Text>
                  </Stack>
                )}
                {(isEmpty(assigment.labels) || !isEmpty(assigment.labels?.submission)) && (
                  <Stack fullWidth>
                    <Text size={'xs'} role="productive" className={classes.label}>
                      {assigment.labels?.submission || 'Submission'}
                    </Text>
                    <Box>
                      {getBadge()}
                      <Text size={'xs'} role="productive" style={{ marginLeft: 4 }}>
                        {`(${assigment.submission}/${assigment.total})`}
                      </Text>
                    </Box>
                  </Stack>
                )}

                {(isEmpty(assigment.labels) || !isEmpty(assigment.labels?.avgTime)) && (
                  <Stack fullWidth>
                    <Text size={'xs'} role="productive" className={classes.label}>
                      {assigment.labels?.avgTime || 'Average Time'}
                    </Text>
                    <Text size={'xs'} role="productive">
                      {getAverageTime(assigment.avgTime)}
                    </Text>
                  </Stack>
                )}
                {(isEmpty(assigment.labels) || !isEmpty(assigment.labels?.avgAttempts)) && (
                  <Stack fullWidth>
                    <Text size={'xs'} role="productive" className={classes.label}>
                      {assigment.labels?.avgAttempts || 'Average Attempts'}
                    </Text>
                    <Text size={'xs'} role="productive">
                      {assigment.avgAttempts}
                    </Text>
                  </Stack>
                )}
              </Stack>
            ) : (
              <Stack direction="column" spacing={2} fullWidth>
                {!isEmpty(tagline) && (
                  <TextClamp lines={truncated ? 2 : 10}>
                    <Text role="productive" color="primary">
                      {tagline}
                    </Text>
                  </TextClamp>
                )}
                {!isEmpty(description) ? (
                  <TextClamp lines={truncated ? 3 : 20}>
                    <Text size={'xs'} role="productive" className={classes.description}>
                      {description}
                    </Text>
                  </TextClamp>
                ) : (
                  <Stack direction="column" spacing={1} fullWidth>
                    {metadata.map(({ label, value }, index) => (
                      <Stack fullWidth key={`${label} ${value} ${index}`}>
                        <Text size={'xs'} role="productive" className={classes.label}>
                          {label}
                        </Text>
                        <Text size={'xs'} role="productive" className={classes.value}>
                          {value}
                        </Text>
                      </Stack>
                    ))}
                  </Stack>
                )}
              </Stack>
            )}
          </Box>
        );
      case 'curriculum':
        return (
          <>
            <Box className={classes.mainContainer}>
              <Stack direction="column" spacing={2} fullWidth>
                {!isEmpty(tagline) && (
                  <TextClamp lines={truncated ? 2 : 10}>
                    <Text role="productive" color="primary">
                      {tagline}
                    </Text>
                  </TextClamp>
                )}
                {!isEmpty(metadata) && (
                  <Box>
                    <Text size={'xs'} role="productive" className={classes.label}>
                      {metadata[0].value} - {metadata[1].value}
                    </Text>
                  </Box>
                )}
                {!isEmpty(description) && (
                  <TextClamp lines={truncated ? 3 : 20}>
                    <Text size={'xs'} role="productive" className={classes.description}>
                      {description}
                    </Text>
                  </TextClamp>
                )}
              </Stack>
            </Box>
            {tags?.length > 0 && (
              <Box className={classes.tagsContainer}>
                {tags.map((tag, index) => (
                  <Box key={`${tag} ${index}`}>
                    <Badge label={tag} size="xs" closable={false} radius={'default'} />
                  </Box>
                ))}
              </Box>
            )}
          </>
        );
      default:
        return (
          <>
            <Box className={classes.mainContainer}>
              <Stack direction="column" spacing={2} fullWidth>
                {variant === 'bookmark' && !isEmpty(url) && (
                  <Stack spacing={2} alignItems="center">
                    {!isEmpty(icon) && (
                      <ImageLoader src={icon} width={20} height={20} radius={'4px'} />
                    )}
                    <Box>
                      <Text size="xs">{getDomain(url)}</Text>
                    </Box>
                  </Stack>
                )}
                {!isEmpty(tagline) && (
                  <TextClamp lines={truncated ? 2 : 10}>
                    <Text role="productive" color="primary">
                      {tagline}
                    </Text>
                  </TextClamp>
                )}
                {!isEmpty(description) ? (
                  <TextClamp lines={truncated ? 3 : 20}>
                    <Text size={'xs'} role="productive" className={classes.description}>
                      {description}
                    </Text>
                  </TextClamp>
                ) : (
                  <Stack direction="column" spacing={1} fullWidth>
                    {metadata.map(({ label, value }, index) => (
                      <Stack fullWidth key={`${label} ${value} ${index}`}>
                        <Text size={'xs'} role="productive" className={classes.label}>
                          {label}
                        </Text>
                        <Text size={'xs'} role="productive" className={classes.value}>
                          {value}
                        </Text>
                      </Stack>
                    ))}
                  </Stack>
                )}
              </Stack>
            </Box>
            {tags?.length > 0 && (
              <Box className={classes.tagsContainer}>
                {tags.map((tag, index) => (
                  <Box key={`${tag} ${index}`}>
                    <Badge label={tag} size="xs" closable={false} radius={'default'} />
                  </Box>
                ))}
              </Box>
            )}
          </>
        );
    }
  };

  return <Box className={classes.root}>{getVariant()}</Box>;
};

LibraryCardContent.defaultProps = LIBRARY_CARD_CONTENT_DEFAULT_PROPS;
LibraryCardContent.propTypes = LIBRARY_CARD_CONTENT_PROP_TYPES;

export { LibraryCardContent, getDomain };
