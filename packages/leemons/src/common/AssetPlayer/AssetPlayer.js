import React, { useEffect, useMemo, useRef, useState } from 'react';
import ReactPlayer from 'react-player/lazy';
import { isFunction } from 'lodash';
import {
  Box,
  ImageLoader,
  Text,
  FileIcon,
  COLORS,
  ModalZoom,
  TextClamp,
} from '@bubbles-ui/components';
import { AssetPlayerStyles } from './AssetPlayer.styles';
import { ASSET_PLAYER_DEFAULT_PROPS, ASSET_PLAYER_PROP_TYPES } from './AssetPlayer.constants';
import { ProgressBar } from './components/ProgressBar';
import { ControlsPlayIcon } from '@bubbles-ui/icons/solid';
import { AudioCardPlayer } from './components/AudioCardPlayer';
import { PDFPlayer } from './components/PDFPlayer';

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
  canPlay,
  hideURLInfo,
  useAudioCard,
  pdfLabels,
  useSchema,
  ...props
}) => {
  const { name, description, cover, url, fileType, fileExtension, metadata } = asset;
  const playerRef = useRef(null);
  const rootRef = useRef(null);
  const [showPlayer, setShowPlayer] = useState(false);
  const [playedPercentage, setPlayedPercentage] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [seeking, setSeeking] = useState(false);
  const [seekValue, setSeekValue] = useState(0);
  const [isPlaying, setIsPlaying] = useState(playing);
  const [fullScreenMode, setFullScreenMode] = useState(fullScreen);
  const [mediaVolume, setMediaVolume] = useState(volume || 1);

  const media = useMemo(
    () => ({
      isPlayable: fileType === 'video' || fileType === 'audio',
      isVideo: fileType === 'video',
      isAudio: fileType === 'audio',
      isImage: fileType === 'image',
      isPDF: fileExtension === 'pdf',
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
    onEventHandler(onProgress, {
      duration: getDuration(),
      totalDuration: getTotalDuration(),
    });
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

  const handleInitPlay = () => {
    if (!canPlay) return;
    setShowPlayer(true);
    setIsPlaying(true);
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

  useEffect(() => {
    if (!rootRef.current) return;
    rootRef.current.addEventListener('fullscreenchange', () => {
      const isFullScreen = window.innerHeight === screen.height;
      setFullScreenMode(isFullScreen);
    });
    return () => {
      if (rootRef.current) rootRef.current.removeEventListener('fullscreenchange');
    };
  }, [rootRef]);

  useEffect(() => setFullScreenMode(fullScreen), [fullScreen]);
  useEffect(() => setIsPlaying(playing), [playing]);
  useEffect(() => setMediaVolume(volume), [volume]);

  // ··································································
  // COMPONENT

  const { classes, cx } = AssetPlayerStyles(
    {
      width,
      media,
      height,
      styles,
      canPlay,
      mediaRatio,
      showPlayer,
      useAudioCard,
      fullScreenMode,
      framed: framed,
    },
    { name: 'AssetPlayer' }
  );
  return (
    <Box className={classes.rootWrapper}>
      <Box className={classes.root} ref={rootRef}>
        {media.isPlayable ? (
          media.isAudio && useAudioCard ? (
            <AudioCardPlayer
              {...{
                url,
                loop,
                cover,
                muted,
                onPlay,
                onReady,
                onStart,
                onPause,
                onEnded,
                onError,
                seconds,
                seekValue,
                isPlaying,
                playerRef,
                title: name,
                mediaVolume,
                getDuration,
                setIsPlaying,
                onEventHandler,
                nativeControls,
                handleOnProgress,
                progressInterval,
                getTotalDuration,
                playedPercentage,
                handleSeekChange,
                handleSeekMouseUp,
                handleSeekMouseDown,
                subtitle: description,
              }}
            />
          ) : (
            <Box className={classes.playerWrapper}>
              {!nativeControls && showPlayer && (
                <ProgressBar
                  {...{
                    seekValue,
                    isPlaying,
                    mediaVolume,
                    getDuration,
                    setIsPlaying,
                    fullScreenMode,
                    setMediaVolume,
                    getTotalDuration,
                    playedPercentage,
                    handleSeekChange,
                    handleSeekMouseUp,
                    setFullScreenMode,
                    handleSeekMouseDown,
                  }}
                />
              )}
              {showPlayer && (
                <ReactPlayer
                  url={url}
                  width="100%"
                  height="100%"
                  progressInterval={progressInterval}
                  muted={muted}
                  volume={mediaVolume}
                  loop={loop}
                  controls={nativeControls}
                  playing={isPlaying}
                  className={cx(classes.reactPlayer, className)}
                  ref={playerRef}
                  onProgress={({ played, playedSeconds }) => {
                    handleOnProgress(played, playedSeconds);
                  }}
                  onReady={(eventInfo) => onEventHandler(onReady, eventInfo)}
                  onStart={(eventInfo) => onEventHandler(onStart, eventInfo)}
                  onPlay={(eventInfo) => onEventHandler(onPlay, eventInfo)}
                  onPause={(eventInfo) => onEventHandler(onPause, eventInfo)}
                  onEnded={(eventInfo) => onEventHandler(onEnded, eventInfo)}
                  onError={(eventInfo) => onEventHandler(onError, eventInfo)}
                />
              )}
              {(!showPlayer || media.isAudio) && (
                <Box className={classes.coverWrapper} onClick={handleInitPlay}>
                  <Box className={classes.coverShadow}>
                    <ControlsPlayIcon height={32} width={32} className={classes.playIcon} />
                  </Box>
                  {cover && <ImageLoader height="100%" src={cover} alt={name} />}
                </Box>
              )}
            </Box>
          )
        ) : (
          <>
            {media.isImage && (
              <ModalZoom canPlay={canPlay}>
                <ImageLoader height="100%" src={cover} alt={name} />
              </ModalZoom>
            )}
            {media.isURL && (
              <a
                href={asset.url}
                target="_blank"
                rel="noreferrer nofollow"
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  pointerEvents: !canPlay && 'none',
                }}
              >
                <ImageLoader height="auto" src={cover} alt={name} />
                {!hideURLInfo && (
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
                )}
              </a>
            )}
            {media.isPDF && <PDFPlayer pdf={url} labels={pdfLabels} useSchema={useSchema} />}
            {!media.isImage && !media.isURL && !media.isPDF && (
              <Box className={classes.fileIcon}>
                <FileIcon fileType={fileType} size={64} color={COLORS.text06} />
              </Box>
            )}
          </>
        )}
      </Box>
    </Box>
  );
};

AssetPlayer.defaultProps = ASSET_PLAYER_DEFAULT_PROPS;
AssetPlayer.propTypes = ASSET_PLAYER_PROP_TYPES;

export { AssetPlayer };
