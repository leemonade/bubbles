import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text, Badge, Stack } from '@bubbles-ui/components';
import { LibraryCardContentStyles } from './LibraryCardContent.styles';

export const LIBRARY_CARD_CONTENT_DEFAULT_PROPS = {
  metadata: [],
  tags: [],
};
export const LIBRARY_CARD_CONTENT_PROP_TYPES = {
  description: PropTypes.string,
  metadata: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, value: PropTypes.string })
  ),
  tags: PropTypes.arrayOf(PropTypes.string),
  locale: PropTypes.string,
};

const LibraryCardContent = ({ description, tags, metadata, locale, ...props }) => {
  const { classes, cx } = LibraryCardContentStyles({});

  return (
    <Box className={classes.root}>
      <Box className={classes.descriptionContainer}>
        {description ? (
          <Text size={'xs'} role="productive" className={classes.description}>
            {description}
          </Text>
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
      <Box className={classes.tagsContainer}>
        {tags.map((tag, index) => (
          <Box key={`${tag} ${index}`}>
            <Badge label={tag} size="xs" closable={false} radius={'default'} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

LibraryCardContent.defaultProps = LIBRARY_CARD_CONTENT_DEFAULT_PROPS;
LibraryCardContent.propTypes = LIBRARY_CARD_CONTENT_PROP_TYPES;

export { LibraryCardContent };
