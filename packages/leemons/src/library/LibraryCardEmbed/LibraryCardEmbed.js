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
import { capitalize } from 'lodash';
import { AssetPlayer } from '../../common';
import { ControlsPauseIcon, ControlsPlayIcon } from '@bubbles-ui/icons/solid';
import { LibraryCardEmbedStyles } from './LibraryCardEmbed.styles';
import {
  LIBRARY_CARD_EMBED_DEFAULT_PROPS,
  LIBRARY_CARD_EMBED_PROP_TYPES,
} from './LibraryCardEmbed.constants';
import { ExpandDiagonalIcon } from '@bubbles-ui/icons/outline';

const LibraryCardEmbed = ({ asset, ...props }) => {
  const { ref: rootRef, width } = useElementSize();
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayer, setShowPlayer] = useState(true);
  const [duration, setDuration] = useState(['00:00', '00:00']);
  const [fullScreenMode, setFullScreenMode] = useState(false);

  const { title, description, image, color, fileType, metadata } = asset;

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

  const mediaHeight = getMediaHeight();

  useEffect(() => {
    document.addEventListener('fullscreenchange', () => {
      setFullScreenMode(!!document.fullscreenElement);
    });
  }, []);

  const { classes, cx } = LibraryCardEmbedStyles(
    { showPlayer, fullScreenMode, color },
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
              <IconButton
                style={{ backgroundColor: COLORS.interactive01, marginBlock: 4 }}
                icon={<ControlsPlayIcon height={13} width={13} style={{ color: 'white' }} />}
                rounded
                onClick={() => {
                  setShowPlayer(true);
                  setIsPlaying(true);
                }}
              />
            </Box>
            <Box className={classes.description}>
              <TextClamp>
                <Text role="productive">{description}</Text>
              </TextClamp>
            </Box>
            <Box className={classes.footer}>
              <FileIcon
                size={13}
                fileType={fileType}
                color={'#636D7D'}
                label={capitalize(fileType) || 'File'}
                hideExtension
              />
            </Box>
          </Box>
        </React.Fragment>
      )}
      {showPlayer && (
        <Box className={classes.playerWrapper}>
          <AssetPlayer
            asset={asset}
            height={mediaHeight}
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
                style={{ backgroundColor: 'transparent' }}
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
