import React from 'react';
import { Box, Badge } from '@bubbles-ui/components';
import { LibraryCardContent } from '../LibraryCardContent';
import { LibraryCardFooter } from '../LibraryCardFooter';
import { LibraryDetailContentStyles } from './LibraryDetailContent.styles';
import {
  LIBRARY_DETAIL_CONTENT_DEFAULT_PROPS,
  LIBRARY_DETAIL_CONTENT_PROP_TYPES,
} from './LibraryDetailContent.constants';

const LibraryDetailContent = ({
  description,
  metadata,
  tags,
  fileType,
  fileExtension,
  variant,
  ...props
}) => {
  const { classes, cx } = LibraryDetailContentStyles({}, { name: 'LibraryDetailContent' });

  return (
    <Box className={classes.root}>
      <LibraryCardContent description={description} />
      <LibraryCardFooter fileType={fileType} fileExtension={fileExtension} />
      <Box className={classes.lowerContent}>
        <LibraryCardContent metadata={metadata} />
        <Box className={classes.tags}>
          {tags.length > 0 && (
            <Box className={classes.tagsContainer}>
              {tags.map((tag, index) => (
                <Box key={`${tag} ${index}`}>
                  <Badge
                    label={tag}
                    size="md"
                    closable={false}
                    radius={'default'}
                    color={'stroke'}
                  />
                </Box>
              ))}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

LibraryDetailContent.defaultProps = LIBRARY_DETAIL_CONTENT_DEFAULT_PROPS;
LibraryDetailContent.propTypes = LIBRARY_DETAIL_CONTENT_PROP_TYPES;

export { LibraryDetailContent };
