import React from 'react';
import { Box, FileIcon } from '@bubbles-ui/components';
import { LibraryDetailContent } from '../LibraryDetailContent';
import { LibraryDetailToolbar } from '../LibraryDetailToolbar';
import { LibraryDetailPlayer } from '../LibraryDetailPlayer';
import { LibraryDetailStyles } from './LibraryDetail.styles';
import { LIBRARY_DETAIL_DEFAULT_PROPS, LIBRARY_DETAIL_PROP_TYPES } from './LibraryDetail.constants';

const LibraryDetail = ({ asset, variant, toolbarItems, ...events }) => {
  const { classes, cx } = LibraryDetailStyles({}, { name: 'LibraryDetail' });

  const { fileType, fileExtension } = asset;

  return (
    <Box className={classes.root}>
      <LibraryDetailToolbar item={asset} toolbarItems={toolbarItems} {...events} />

      <LibraryDetailPlayer
        {...asset}
        variant={variant}
        fileIcon={
          <FileIcon fileType={fileType} fileExtension={fileExtension} size={64} color={'#B9BEC4'} />
        }
      />

      <LibraryDetailContent {...asset} variant={variant} />
    </Box>
  );
};

LibraryDetail.defaultProps = LIBRARY_DETAIL_DEFAULT_PROPS;
LibraryDetail.propTypes = LIBRARY_DETAIL_PROP_TYPES;

export { LibraryDetail };
