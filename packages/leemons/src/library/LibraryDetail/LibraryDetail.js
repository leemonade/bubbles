import React from 'react';
import { Box, FileIcon } from '@bubbles-ui/components';
import { LibraryDetailContent } from '../LibraryDetailContent';
import { LibraryDetailToolbar } from '../LibraryDetailToolbar';
import { LibraryDetailPlayer } from '../LibraryDetailPlayer';
import { LibraryDetailStyles } from './LibraryDetail.styles';
import { LIBRARY_DETAIL_DEFAULT_PROPS, LIBRARY_DETAIL_PROP_TYPES } from './LibraryDetail.constants';

const LibraryDetail = ({ asset, variant, ...events }) => {
  const { classes, cx } = LibraryDetailStyles({}, { name: 'LibraryDetail' });

  const { id, name, fileType, fileExtension, cover, color, url, description, metadata, tags } =
    asset;

  return (
    <Box className={classes.root}>
      <LibraryDetailToolbar id={id} {...events} />
      <LibraryDetailPlayer
        fileIcon={
          <FileIcon fileType={fileType} fileExtension={fileExtension} size={64} color={'#B9BEC4'} />
        }
        cover={cover}
        color={color}
        url={url}
        variant={variant}
        name={name}
        fileType={fileType}
      />
      <LibraryDetailContent
        description={description}
        metadata={metadata}
        tags={tags}
        fileType={fileType}
        variant={variant}
      />
    </Box>
  );
};

LibraryDetail.defaultProps = LIBRARY_DETAIL_DEFAULT_PROPS;
LibraryDetail.propTypes = LIBRARY_DETAIL_PROP_TYPES;

export { LibraryDetail };
