import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text, Badge } from '@bubbles-ui/components';
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
};

const LibraryCardContent = ({ description, tags, metadata, ...props }) => {
  const { classes, cx } = LibraryCardContentStyles({});

  return (
    <Box className={classes.root}>
      <Box className={classes.descriptionContainer}>
        {description ? (
          <Text size={'xs'} className={classes.description}>
            {description}
          </Text>
        ) : (
          <Box>
            {metadata.map(({ label, value }) => (
              <Box>
                <Text className={classes.label}>{label}</Text>
                <Text className={classes.value}>{value}</Text>
              </Box>
            ))}
          </Box>
        )}
      </Box>
      <Box className={classes.tagsContainer}>
        {tags.map((tag) => (
          <Box>
            <Badge label={tag} closable={false} radius={'default'} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

LibraryCardContent.defaultProps = LIBRARY_CARD_CONTENT_DEFAULT_PROPS;
LibraryCardContent.propTypes = LIBRARY_CARD_CONTENT_PROP_TYPES;

export { LibraryCardContent };
