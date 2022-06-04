import React, { useEffect, useState } from 'react';
import { isEmpty } from 'lodash';
import { AvatarsGroup, FileIcon, Stack, Text } from '@bubbles-ui/components';
import { LibraryDetailContent } from '../LibraryDetailContent';
import { LibraryDetailToolbar } from '../LibraryDetailToolbar';
import { LibraryDetailPlayer } from '../LibraryDetailPlayer';
import { LibraryDetailStyles } from './LibraryDetail.styles';
import { LIBRARY_DETAIL_DEFAULT_PROPS, LIBRARY_DETAIL_PROP_TYPES } from './LibraryDetail.constants';

const LibraryDetail = ({
  asset,
  variant,
  variantTitle,
  toolbar,
  toolbarItems,
  drawer,
  open,
  labels,
  titleActionButton,
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
            variantTitle={variantTitle}
            titleActionButton={titleActionButton}
            fileIcon={
              <FileIcon
                fileType={fileType}
                fileExtension={fileExtension}
                size={64}
                color={'#B9BEC4'}
              />
            }
          />
          <LibraryDetailContent
            {...asset}
            variantTitle={variantTitle}
            variant={variant}
            labels={labels}
          />
          {!asset.public && !isEmpty(asset?.canAccess) && (
            <Stack direction="column" spacing={2} padding={4}>
              <Text role="productive" size="xs">
                {labels.sharedWith}
              </Text>
              <AvatarsGroup size="xs" data={asset.canAccess} limit={3} />
            </Stack>
          )}
          {asset.public && (
            <Stack direction="column" spacing={2} padding={4}>
              <Text role="productive" size="xs">
                {labels.sharedWithEverybody}
              </Text>
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
