import React, { useEffect, useState } from 'react';
import { isEmpty, isFunction } from 'lodash';
import { AvatarsGroup, FileIcon, Stack, Text, Box, ActionButton } from '@bubbles-ui/components';
import { MoveRightIcon } from '@bubbles-ui/icons/outline';
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
  style,
  ...events
}) => {
  const [showDrawer, setShowDrawer] = useState(open);

  useEffect(() => {
    if (open) {
      setTimeout(() => setShowDrawer(true), 100);
    } else {
      setTimeout(() => setShowDrawer(false), 100);
    }
  }, [open]);

  const { classes, cx } = LibraryDetailStyles({ drawer, open }, { name: 'LibraryDetail' });

  const { fileType, fileExtension } = asset;

  const handleToggle = () => {
    isFunction(events?.onToggle) && events.onToggle();
  };

  return (
    <Box style={{ position: 'absolute', height: '100%', width: '100%' }}>
      <Stack
        direction="column"
        fullHeight
        className={cx(classes.root, classes.wrapper, { [classes.show]: showDrawer })}
        style={style}
      >
        <Stack
          direction="column"
          fullHeight
          // className={cx(classes.wrapper, { [classes.show]: showDrawer })}
        >
          {toolbar && (
            <Box>
              <LibraryDetailToolbar
                {...events}
                item={asset}
                toolbarItems={toolbarItems}
                open={open}
                labels={labels}
              />
            </Box>
          )}

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
      </Stack>
      {toolbarItems?.toggle && (
        <Box className={cx(classes.lastIcon, { [classes.stickRight]: !showDrawer && !open })}>
          <ActionButton
            icon={<MoveRightIcon height={20} width={20} />}
            onClick={handleToggle}
            tooltip={!open ? toolbarItems.open || toolbarItems.toggle : toolbarItems.toggle}
            className={cx(classes.button, {
              [classes.flip]: !showDrawer,
            })}
          />
        </Box>
      )}
    </Box>
  );
};

LibraryDetail.defaultProps = LIBRARY_DETAIL_DEFAULT_PROPS;
LibraryDetail.propTypes = LIBRARY_DETAIL_PROP_TYPES;

export { LibraryDetail };
