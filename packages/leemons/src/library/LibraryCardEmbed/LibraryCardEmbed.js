import React, { useEffect, useState } from 'react';
import {
  Box,
  Stack,
  ImageLoader,
  Title,
  Text,
  IconButton,
  TextClamp,
  FileIcon,
  COLORS,
  useElementSize,
} from '@bubbles-ui/components';
import { capitalize, isEmpty, isFunction } from 'lodash';
import { AssetPlayer } from '../../common';
import { ControlsPauseIcon, ControlsPlayIcon } from '@bubbles-ui/icons/solid';
import { LibraryCardEmbedStyles } from './LibraryCardEmbed.styles';
import {
  LIBRARY_CARD_EMBED_DEFAULT_PROPS,
  LIBRARY_CARD_EMBED_PROP_TYPES,
} from './LibraryCardEmbed.constants';
import { ExpandDiagonalIcon, ExpandFullIcon, DownloadIcon } from '@bubbles-ui/icons/outline';

const getDomain = (url) => {
  const domain = url.split('//')[1];
  return (domain.split('/')[0] || '').replace('www.', '');
};

const LibraryCardEmbed = ({ asset, variant, labels, onDownload, ...props }) => {
  const { ref: rootRef, width } = useElementSize();
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);
  const [duration, setDuration] = useState(['00:00', '00:00']);
  const [fullScreenMode, setFullScreenMode] = useState(false);

  const { title, description, image, color, fileType, metadata, url, icon } = asset;

  const renderVariantButton = () => {
    const isMedia = variant === 'media';
    const isBookmark = variant === 'bookmark';
    const isVideo = fileType === 'video';
    const isAudio = fileType === 'audio';

    if (isMedia) {
      if (!isVideo && !isAudio) {
        return (
          <IconButton
            style={{ marginBlock: 4 }}
            icon={<DownloadIcon height={13} width={13} />}
            rounded
            onClick={() => {
              isFunction(onDownload) ? onDownload(asset) : window.open(url);
            }}
          />
        );
      }
      return (
        <IconButton
          style={{ backgroundColor: COLORS.interactive01, marginBlock: 4 }}
          icon={
            isAudio || isVideo ? (
              <ControlsPlayIcon height={13} width={13} style={{ color: 'white' }} />
            ) : (
              <DownloadDrawerIcon height={13} width={13} />
            )
          }
          rounded
          onClick={() => {
            setShowPlayer(true);
            setIsPlaying(true);
          }}
        />
      );
    }
    if (isBookmark)
      return (
        <Box className={classes.bookmarkButton} onClick={() => window.open(url)}>
          <IconButton
            style={{ marginBlock: 4 }}
            icon={<ExpandFullIcon height={13} width={13} />}
            rounded
          />
          <Text>{labels.link}</Text>
        </Box>
      );
  };

  const getMediaRatio = () => {
    let mediaDimensions = {};
    metadata.reduce((prev, curr) => {
      if (curr.label.toLowerCase() === 'height') {
        prev = { ...prev, height: parseInt(curr.value) };
      }
      if (curr.label.toLowerCase() === 'width') {
        prev = { ...prev, width: parseInt(curr.value) };
      }
      mediaDimensions = prev;
      return prev;
    }, mediaDimensions);
    const { width, height } = mediaDimensions;
    if (!width || !height) return 16 / 9;
    return width / height;
  };

  const getMediaHeight = () => {
    if (!rootRef.current) return;
    const mediaRatio = getMediaRatio();
    const mediaHeight = width / mediaRatio;
    return mediaHeight;
  };

  useEffect(() => {
    document.addEventListener('fullscreenchange', () => {
      setFullScreenMode(!!document.fullscreenElement);
    });
  }, []);

  const { classes, cx } = LibraryCardEmbedStyles(
    { showPlayer, fullScreenMode, color, variant, fileType },
    { name: 'LibraryCardEmbed' }
  );
  return (
    <Stack ref={rootRef} className={classes.root} justifyContent="start" fullWidth>
      {!showPlayer && (
        <React.Fragment>
          <Box>
            {image ? (
              <ImageLoader src={image} width={172} height={156} radius={'2px 0px 0px 2px'} />
            ) : (
              <Box className={classes.imagePlaceholder}>
                <FileIcon size={64} fileType={fileType} color={COLORS.text06} hideExtension />
              </Box>
            )}
          </Box>
          <Box className={classes.content}>
            <Box className={classes.color} />
            <Box className={classes.header}>
              <Title order={5} className={classes.title}>
                {title}
              </Title>
              {renderVariantButton()}
            </Box>
            <Box className={classes.description}>
              <TextClamp>
                <Text role="productive">{description}</Text>
              </TextClamp>
            </Box>
            <Box className={classes.footer}>
              <FileIcon
                size={13}
                fileType={variant === 'bookmark' ? 'bookmark' : fileType}
                color={'#636D7D'}
                label={capitalize(fileType) || 'File'}
                hideExtension
              />
              {variant === 'bookmark' && !isEmpty(url) && (
                <Stack spacing={2} alignItems="center">
                  {!isEmpty(icon) && (
                    <ImageLoader src={icon} width={20} height={20} radius={'4px'} />
                  )}
                  <Box>
                    <Text size="xs">{getDomain(url)}</Text>
                  </Box>
                </Stack>
              )}
            </Box>
          </Box>
        </React.Fragment>
      )}
      {showPlayer && (
        <Box className={classes.playerWrapper}>
          <AssetPlayer
            asset={asset}
            height={getMediaHeight()}
            playing={isPlaying}
            showPlayer={showPlayer}
            fullScreen={fullScreenMode}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onProgress={({ duration, totalDuration }) => setDuration([duration, totalDuration])}
            className={classes.player}
          />
          <Box className={classes.controlRow}>
            <Box className={classes.duration}>
              {duration[0]}
              <Text color="soft"> / </Text>
              {duration[1]}
            </Box>
            <Box className={classes.playerControls}>
              <IconButton
                className={classes.expandIcon}
                icon={<ExpandDiagonalIcon height={13} width={13} />}
                rounded
                onClick={() => setFullScreenMode(true)}
              />
              {isPlaying && (
                <IconButton
                  style={{ backgroundColor: COLORS.interactive01 }}
                  icon={<ControlsPauseIcon height={13} width={13} style={{ color: 'white' }} />}
                  rounded
                  onClick={() => {
                    setIsPlaying(false);
                  }}
                />
              )}
              {!isPlaying && (
                <IconButton
                  style={{ backgroundColor: COLORS.interactive01 }}
                  icon={<ControlsPlayIcon height={13} width={13} style={{ color: 'white' }} />}
                  rounded
                  onClick={() => {
                    setIsPlaying(true);
                  }}
                />
              )}
            </Box>
          </Box>
        </Box>
      )}
    </Stack>
  );
};

LibraryCardEmbed.defaultProps = LIBRARY_CARD_EMBED_DEFAULT_PROPS;
LibraryCardEmbed.propTypes = LIBRARY_CARD_EMBED_PROP_TYPES;

export { LibraryCardEmbed };
