import React, { useState, useEffect } from 'react';
import { isEmpty, isFunction } from 'lodash';
import { Box, Button, Text, Stack, FileIcon, AvatarsGroup } from '@bubbles-ui/components';
import { LibraryDetailContent } from '../LibraryDetailContent';
import { LibraryDetailToolbar } from '../LibraryDetailToolbar';
import { LibraryDetailPlayer } from '../LibraryDetailPlayer';
import { LibraryDetailStyles } from './LibraryDetail.styles';
import { LIBRARY_DETAIL_DEFAULT_PROPS, LIBRARY_DETAIL_PROP_TYPES } from './LibraryDetail.constants';
import { Avatar } from '@bubbles-ui/components/src/informative';

const LibraryDetail = ({
  asset,
  variant,
  toolbar,
  toolbarItems,
  drawer,
  open,
  labels,
  ...events
}) => {
  const [showDrawer, setShowDrawer] = useState(open);

  useEffect(() => {
    if (open) {
      setTimeout(() => setShowDrawer(true), 100);
    } else {
      setShowDrawer(false);
    }
  }, [open]);

  const { classes, cx } = LibraryDetailStyles({ drawer, open }, { name: 'LibraryDetail' });

  const { fileType, fileExtension } = asset;

  return (
    <Stack direction="column" fullHeight className={classes.root}>
      {toolbar && (
        <LibraryDetailToolbar
          {...events}
          item={asset}
          toolbarItems={toolbarItems}
          open={open}
          labels={labels}
        />
      )}

      {open && (
        <Stack
          direction="column"
          fullHeight
          className={cx(classes.wrapper, { [classes.show]: showDrawer })}
        >
          <LibraryDetailPlayer
            {...asset}
            labels={labels}
            variant={variant}
            fileIcon={
              <FileIcon
                fileType={fileType}
                fileExtension={fileExtension}
                size={64}
                color={'#B9BEC4'}
              />
            }
          />
          <LibraryDetailContent {...asset} variant={variant} labels={labels} />
          {!isEmpty(asset?.canAccess) && (
            <Stack direction="column" spacing={2} padding={4}>
              <Text role="productive" size="xs">
                {labels.sharedWith}
              </Text>
              <AvatarsGroup size="xs" data={asset.canAccess} limit={3} />
            </Stack>
          )}
        </Stack>
      )}
    </Stack>
  );
};

LibraryDetail.defaultProps = LIBRARY_DETAIL_DEFAULT_PROPS;
LibraryDetail.propTypes = LIBRARY_DETAIL_PROP_TYPES;

export { LibraryDetail };
