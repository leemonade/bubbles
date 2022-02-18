import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text, Badge, Stack, TextClamp } from '@bubbles-ui/components';
import { LIBRARYCARD_VARIANTS, LIBRARYCARD_UNIT } from '../LibraryCard';
import { LibraryCardContentStyles } from './LibraryCardContent.styles';

export const LIBRARY_CARD_CONTENT_DEFAULT_PROPS = {
  metadata: [],
  tags: [],
  variant: 'media',
  badgeColor: 'solid',
};
export const LIBRARY_CARD_CONTENT_PROP_TYPES = {
  description: PropTypes.string,
  metadata: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, value: PropTypes.string })
  ),
  tags: PropTypes.arrayOf(PropTypes.string),
  locale: PropTypes.string,
  variant: PropTypes.oneOf(LIBRARYCARD_VARIANTS),
  unit: PropTypes.shape(LIBRARYCARD_UNIT),
};

const LibraryCardContent = ({ description, tags, metadata, locale, variant, unit, ...props }) => {
  const { classes, cx } = LibraryCardContentStyles({}, { name: 'LibraryCardContent' });

  const getAverageTime = (seconds) => {
    if (seconds <= 59) {
      return `${seconds}s`;
    } else {
      const minutes = Math.floor(seconds / 60);
      const secondsLeft = seconds % 60;
      return secondsLeft === 0 ? `${minutes}m` : `${minutes}m ${secondsLeft}s`;
    }
  };

  const getBadge = () => {
    if (unit.completed <= 0.2)
      return (
        <Badge
          label={`${unit.completed * 100}%`}
          severity={'error'}
          closable={false}
          radius={'default'}
        />
      );
    if (unit.completed <= 0.5)
      return (
        <Badge
          label={`${unit.completed * 100}%`}
          severity={'warning'}
          closable={false}
          radius={'default'}
        />
      );
    if (unit.completed >= 0.6)
      return (
        <Badge
          label={`${unit.completed * 100}%`}
          severity={'success'}
          closable={false}
          radius={'default'}
        />
      );
  };

  const getVariant = () => {
    switch (variant) {
      case 'unit':
        return (
          <Box className={classes.mainContainer}>
            <Stack direction="column" spacing={1} fullWidth>
              <Stack fullWidth>
                <Text size={'xs'} role="productive" className={classes.label}>
                  Subject
                </Text>
                <Text size={'xs'} role="productive" weight={600}>
                  {unit.subject.name}
                </Text>
              </Stack>
              <Stack fullWidth>
                <Text size={'xs'} role="productive" className={classes.label}>
                  Submission
                </Text>
                <Box>
                  {getBadge()}
                  <Text size={'xs'} role="productive" style={{ marginLeft: 4 }}>
                    {`(${unit.submission}/${unit.total})`}
                  </Text>
                </Box>
              </Stack>
              <Stack fullWidth>
                <Text size={'xs'} role="productive" className={classes.label}>
                  Average time
                </Text>
                <Text size={'xs'} role="productive">
                  {getAverageTime(unit.avgTime)}
                </Text>
              </Stack>
              <Stack fullWidth>
                <Text size={'xs'} role="productive" className={classes.label}>
                  Average attempts
                </Text>
                <Text size={'xs'} role="productive">
                  {unit.avgAttempts}
                </Text>
              </Stack>
            </Stack>
          </Box>
        );
      default:
        return (
          <>
            <Box className={classes.mainContainer}>
              {description ? (
                <TextClamp lines={3}>
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
            </Box>
            {tags.length > 0 && (
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

export { LibraryCardContent };
