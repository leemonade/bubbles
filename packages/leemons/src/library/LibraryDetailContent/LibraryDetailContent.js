import React from 'react';
import { isEmpty } from 'lodash';
import { Box, Badge, Paper, Stack, ImageLoader, Text } from '@bubbles-ui/components';
import { LibraryCardContent, getDomain } from '../LibraryCardContent';
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
  url,
  icon,
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
      {variant === 'bookmark' && (
        <Box sx={(theme) => ({ padding: theme.spacing[2] })}>
          <Paper bordered padding={2} radius="sm" shadow="none" fullWidth>
            <Stack spacing={2}>
              <Box>
                <ImageLoader src={icon} height={20} width={20} radius={4} />
              </Box>
              <Box>
                <Stack direction="column">
                  <Text size="xs" strong>
                    {getDomain(url)}
                  </Text>
                  <Text size="xs" role="productive" truncated>
                    {url}
                  </Text>
                </Stack>
              </Box>
            </Stack>
          </Paper>
        </Box>
      )}
      <Box className={classes.lowerContent}>
        {!isEmpty(metadata) && <LibraryCardContent metadata={metadata} />}
        {tags?.length > 0 && (
          <Box className={classes.tags}>
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
          </Box>
        )}
      </Box>
    </Box>
  );
};

LibraryDetailContent.defaultProps = LIBRARY_DETAIL_CONTENT_DEFAULT_PROPS;
LibraryDetailContent.propTypes = LIBRARY_DETAIL_CONTENT_PROP_TYPES;

export { LibraryDetailContent };
