import React, { useMemo, useRef, useState } from 'react';
import ReactPlayer from 'react-player/lazy';
import { Box, ImageLoader, Text, FileIcon, COLORS } from '@bubbles-ui/components';
import { AssetPlayerStyles } from './AssetPlayer.styles';
import { ASSET_PLAYER_DEFAULT_PROPS, ASSET_PLAYER_PROP_TYPES } from './AssetPlayer.constants';
import { isFunction } from 'lodash';

const format = (seconds) => {
  const date = new Date(seconds * 1000);
  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = pad(date.getUTCSeconds());
  if (hh) {
    return `${hh}:${pad(mm)}:${ss}`;
  }
  return `${mm}:${ss}`;
};

const pad = (string) => {
  return ('0' + string).slice(-2);
};

const AssetPlayer = ({
  asset,
  width,
  height,
  styles,
  className,
  playing,
  showPlayer,
  muted,
  volume,
  loop,
  nativeControls,
  progressInterval,
  onReady,
  onStart,
  onPlay,
  onProgress,
  onPause,
  onSeek,
  onEnded,
  onError,
  ...props
}) => {
  const { name, cover, url, fileType } = asset;
  const playerRef = useRef(null);
  const isPlayable = useMemo(() => fileType === 'video' || fileType === 'audio', [fileType]);
  const [playedPercentage, setPlayedPercentage] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [seeking, setSeeking] = useState(false);
  const [seekValue, setSeekValue] = useState(0);

  const getDuration = () => {
    return <time dateTime={`P${Math.round(seconds)}S`}>{format(seconds)}</time>;
  };

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

  const onEventHandler = (event) => {
    isFunction(event) && event();
  };

  const { classes, cx } = AssetPlayerStyles(
    { width, height, styles, showPlayer, seconds },
    { name: 'AssetPlayer' }
  );
  return (
    <Box className={classes.root}>
      <Box className={classes.playerWrapper}>
        <Box className={classes.cover}>
          {cover ? (
            <ImageLoader height={height} src={cover} alt={name} />
          ) : (
            <Box className={classes.fileIcon}>
              <FileIcon fileType={fileType} size={64} color={COLORS.text06} />
            </Box>
          )}
        </Box>
        {/* <Box className={classes.color} /> */}
        {isPlayable && (
          <>
            <ReactPlayer
              url={url}
              width="100%"
              height="100%"
              progressInterval={progressInterval}
              muted={muted}
              volume={volume}
              loop={loop}
              controls={nativeControls}
              playing={playing}
              className={cx(classes.reactPlayer, className)}
              ref={playerRef}
              onProgress={({ played, playedSeconds }) => {
                handleOnProgress(played, playedSeconds);
                onEventHandler(onProgress);
              }}
              onReady={() => onEventHandler(onReady)}
              onStart={() => onEventHandler(onStart)}
              onPlay={() => onEventHandler(onPlay)}
              onPause={() => onEventHandler(onPause)}
              onEnded={() => onEventHandler(onEnded)}
              onError={() => onEventHandler(onError)}
            />
            {fileType === 'audio' && (
              <Box className={classes.audioIcon}>
                <FileIcon fileType={'audio'} size={64} color={'#FFF'} />
              </Box>
            )}
            {!nativeControls && (
              <Box className={classes.progressBarWrapper}>
                <Box className={classes.progressBar}>
                  <Box
                    className={classes.progressBarValue}
                    style={{
                      width: `${playedPercentage}%`,
                    }}
                  />
                  <input
                    className={classes.seekSlider}
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
                <Text size={'xs'} role={'productive'} className={classes.duration}>
                  {getDuration()}
                </Text>
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
