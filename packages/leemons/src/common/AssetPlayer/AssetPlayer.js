import React, { useEffect, useMemo, useRef, useState } from 'react';
import ReactPlayer from 'react-player/lazy';
import { isFunction } from 'lodash';
import {
  Box,
  ImageLoader,
  Text,
  FileIcon,
  COLORS,
  IconButton,
  ModalZoom,
  Stack,
  TextClamp,
} from '@bubbles-ui/components';
import { ControlsPauseIcon, ControlsPlayIcon } from '@bubbles-ui/icons/solid';
import { ExpandDiagonalIcon } from '@bubbles-ui/icons/outline';
import { AssetPlayerStyles } from './AssetPlayer.styles';
import { ASSET_PLAYER_DEFAULT_PROPS, ASSET_PLAYER_PROP_TYPES } from './AssetPlayer.constants';

const format = (seconds) => {
  const date = new Date(seconds * 1000);
  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = String(date.getUTCSeconds()).padStart(2, '0');
  if (hh) {
    return `${hh}:${String(mm).padStart(2, '0')}:${ss}`;
  }
  return `${mm}:${ss}`;
};

const AssetPlayer = ({
  asset,
  width,
  height,
  styles,
  className,
  framed,
  playing,
  muted,
  volume,
  loop,
  fullScreen,
  nativeControls,
  controlBar,
  progressInterval,
  onReady,
  onStart,
  onPlay,
  onProgress,
  onPause,
  onSeek,
  onEnded,
  onError,
  readOnly,
  ...props
}) => {
  const { name, cover, url, fileType, metadata } = asset;
  const playerRef = useRef(null);
  const rootRef = useRef(null);
  const [playedPercentage, setPlayedPercentage] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [seeking, setSeeking] = useState(false);
  const [seekValue, setSeekValue] = useState(0);
  const [isPlaying, setIsPlaying] = useState(playing);
  const [fullScreenMode, setFullScreenMode] = useState(fullScreen);

  const media = useMemo(
    () => ({
      isPlayable: fileType === 'video' || fileType === 'audio',
      isVideo: fileType === 'video',
      isAudio: fileType === 'audio',
      isImage: fileType === 'image',
      isURL: ['bookmark', 'url', 'link'].includes(fileType),
      isFile: !['video', 'audio', 'image', 'url'].includes(fileType),
    }),
    [fileType]
  );

  const mediaRatio = useMemo(() => {
    if (fileType !== 'video') return 9 / 16;

    let mediaDimensions = {};
    (metadata || []).reduce((prev, curr) => {
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

    if (!width || !height) return 9 / 16;

    return height / width;
  }, [metadata, fileType]);

  const showCover = useMemo(() => {
    if (media.isVideo && !!controlBar && !isPlaying && seconds === 0) {
      return true;
    }

    if (media.isAudio) {
      return true;
    }

    return false;
  }, [isPlaying, media, controlBar, seconds]);

  // ··································································
  // METHODS

  const getDuration = () => {
    return <time dateTime={`P${Math.round(seconds)}S`}>{format(seconds)}</time>;
  };

  const getTotalDuration = () => {
    const totalDuration = playerRef.current ? playerRef.current.getDuration() : 0;
    return <time dateTime={`P${Math.round(totalDuration)}S`}>{format(totalDuration)}</time>;
  };

  // ··································································
  // HANDLERS

  const handleOnProgress = (played, playedSeconds) => {
    const elapsedSeconds = Math.floor(playedSeconds);
    if (elapsedSeconds !== seconds) {
      setSeconds(elapsedSeconds);
    }
    setPlayedPercentage(played * 100);
    if (!seeking) setSeekValue(played);
  };

  const handleSeekChange = (e) => {
    setSeekValue(e.target.value);
  };

  const handleSeekMouseDown = (e) => {
    setSeeking(true);
  };

  const handleSeekMouseUp = (e) => {
    setSeeking(false);
    playerRef.current.seekTo(parseFloat(seekValue));
  };

  const onEventHandler = (event, eventInfo) => {
    isFunction(event) && event(eventInfo);
  };

  // ··································································
  // EFFECTS

  useEffect(() => {
    if (!rootRef.current) return;
    if (fullScreenMode) {
      try {
        rootRef.current.requestFullscreen();
      } catch (e) {
        console.error(e);
      }
    } else {
      try {
        if (document.fullscreenElement) document.exitFullscreen();
      } catch (e) {
        console.error(e);
      }
    }
  }, [fullScreenMode]);

  useEffect(() => setFullScreenMode(fullScreen), [fullScreen]);
  useEffect(() => setIsPlaying(playing), [playing]);

  // ··································································
  // COMPONENT

  const { classes, cx } = AssetPlayerStyles(
    {
      width,
      height,
      styles,
      framed: framed || media.isPlayable,
      fullScreenMode,
      mediaRatio,
    },
    { name: 'AssetPlayer' }
  );
  return (
    <Box className={classes.playerRoot}>
      <Box ref={rootRef} className={classes.root}>
        {!media.isPlayable ? (
          <>
            {media.isImage ? (
              <ModalZoom readOnly={readOnly}>
                <ImageLoader height="auto" src={cover} alt={name} />
              </ModalZoom>
            ) : media.isURL ? (
              <a
                href={asset.url}
                target="_blank"
                rel="noreferrer nofollow"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <ImageLoader height="auto" src={cover} alt={name} />
                <Box style={{ padding: 8 }}>
                  {!!(asset.name || asset.title) && (
                    <Box mb={5}>
                      <Text role="productive" color="primary" strong>
                        {asset.name || asset.title}
                      </Text>
                    </Box>
                  )}
                  {!!(asset.tagline || asset.description) && (
                    <Box mb={5}>
                      <TextClamp lines={2} maxLines={2}>
                        <Text size="xs" role="productive">
                          {asset.tagline || asset.description}
                        </Text>
                      </TextClamp>
                    </Box>
                  )}

                  <Text truncated size="xs" role="productive" color="soft">
                    {asset.url}
                  </Text>
                </Box>
              </a>
            ) : (
              <Box className={classes.fileIcon}>
                <FileIcon fileType={fileType} size={64} color={COLORS.text06} />
              </Box>
            )}
          </>
        ) : (
          <Box className={classes.playerWrapper}>
            {!nativeControls && (isPlaying || seconds > 0) && (
              <Box className={classes.progressBarWrapper}>
                <Box className={classes.progressBar}>
                  <Box
                    className={classes.progressBarValue}
                    style={{
                      width: `${playedPercentage}%`,
                    }}
                  />
                  <input
                    className={classes.progressBarSeekSlider}
                    type={'range'}
                    min={0}
                    max={0.999999}
                    step={'any'}
                    value={seekValue}
                    onChange={handleSeekChange}
                    onMouseDown={handleSeekMouseDown}
                    onMouseUp={handleSeekMouseUp}
                  />
                </Box>
                {!controlBar && (
                  <Text size={'xs'} role={'productive'} className={classes.duration}>
                    {getDuration()}
                  </Text>
                )}
              </Box>
            )}
            {showCover && (
              <Box className={classes.cover}>
                {cover ? (
                  <ImageLoader height="100%" src={cover} alt={name} />
                ) : (
                  !media.isAudio && (
                    <Box className={classes.fileIcon}>
                      <FileIcon fileType={fileType} size={64} color={COLORS.text06} />
                    </Box>
                  )
                )}
                {media.isAudio && (
                  <Box className={classes.audioIcon}>
                    <FileIcon fileType={'audio'} size={64} color={'#FFF'} />
                  </Box>
                )}
              </Box>
            )}
            <ReactPlayer
              url={url}
              width="100%"
              height="100%"
              progressInterval={progressInterval}
              muted={muted}
              volume={volume}
              loop={loop}
              controls={nativeControls}
              playing={isPlaying}
              className={cx(classes.reactPlayer, className)}
              ref={playerRef}
              onProgress={({ played, playedSeconds }) => {
                handleOnProgress(played, playedSeconds);
                onEventHandler(onProgress, {
                  duration: getDuration(),
                  totalDuration: getTotalDuration(),
                });
              }}
              onReady={(eventInfo) => onEventHandler(onReady, eventInfo)}
              onStart={(eventInfo) => onEventHandler(onStart, eventInfo)}
              onPlay={(eventInfo) => onEventHandler(onPlay, eventInfo)}
              onPause={(eventInfo) => onEventHandler(onPause, eventInfo)}
              onEnded={(eventInfo) => onEventHandler(onEnded, eventInfo)}
              onError={(eventInfo) => onEventHandler(onError, eventInfo)}
            />
          </Box>
        )}
      </Box>
      {media.isPlayable && controlBar ? (
        <Box className={classes.controlBar}>
          <Box className={classes.controlBarDuration}>
            {(isPlaying || seconds > 0) && <Text role={'productive'}>{getDuration()}</Text>}
          </Box>

          <Box className={classes.controlBarControls}>
            {media.isVideo && (
              <IconButton
                className={classes.expandIcon}
                icon={<ExpandDiagonalIcon height={13} width={13} />}
                rounded
                onClick={() => setFullScreenMode(true)}
              />
            )}
            {isPlaying ? (
              <IconButton
                style={{ backgroundColor: COLORS.interactive01 }}
                icon={<ControlsPauseIcon height={13} width={13} style={{ color: 'white' }} />}
                rounded
                onClick={() => {
                  setIsPlaying(false);
                }}
              />
            ) : (
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
      ) : null}
    </Box>
  );
};

AssetPlayer.defaultProps = ASSET_PLAYER_DEFAULT_PROPS;
AssetPlayer.propTypes = ASSET_PLAYER_PROP_TYPES;

export { AssetPlayer };
