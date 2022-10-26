import React, { useMemo, useRef, useState } from 'react';
import { isNil } from 'lodash';
import ReactPlayer from 'react-player/lazy';
import { ControlsPauseIcon, ControlsPlayIcon } from '@bubbles-ui/icons/solid';
import { OpenIcon } from '@bubbles-ui/icons/outline';
import {
  ActionButton,
  Box,
  COLORS,
  FileIcon,
  IconButton,
  ImageLoader,
  Text,
  TextClamp,
  Title,
} from '@bubbles-ui/components';
import { LibraryDetailPlayerStyles } from './LibraryDetailPlayer.styles';
import {
  LIBRARY_DETAIL_PLAYER_DEFAULT_PROPS,
  LIBRARY_DETAIL_PLAYER_PROP_TYPES,
} from './LibraryDetailPlayer.constants';

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

const LibraryDetailPlayer = ({
  name,
  height,
  cover,
  url,
  color,
  variant,
  fileIcon,
  fileType,
  titleActionButton,
  ...props
}) => {
  const playerRef = useRef(null);
  const [showPlayer, setShowPlayer] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [played, setPlayed] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [seeking, setSeeking] = useState(false);
  const [seekValue, setSeekValue] = useState(0);

  const playedPercentage = useMemo(() => played * 100, [played]);

  const getDuration = () => {
    return <time dateTime={`P${Math.round(seconds)}S`}>{format(seconds)}</time>;
  };

  const handleOnProgress = (played, playedSeconds) => {
    const elapsedSeconds = Math.floor(playedSeconds);
    if (elapsedSeconds !== seconds) {
      setSeconds(elapsedSeconds);
    }
    setPlayed(played);
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

  const icon = useMemo(
    () =>
      !isNil(fileIcon)
        ? React.cloneElement(fileIcon, { iconStyle: { backgroundColor: COLORS.interactive03h } })
        : null,
    [fileIcon]
  );

  const playable = useMemo(() => ['audio', 'video'].includes(fileType), [fileType]);

  const { classes, cx } = LibraryDetailPlayerStyles(
    { height, color, seconds, showPlayer },
    { name: 'LibraryDetailPlayer' }
  );
  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.coverWrapper}>
          {playable && (
            <Box className={classes.reactPlayerWrapper}>
              <ReactPlayer
                ref={playerRef}
                url={url}
                width="100%"
                height="100%"
                playing={isPlaying}
                onProgress={({ played, playedSeconds }) => handleOnProgress(played, playedSeconds)}
                progressInterval={100}
                className={classes.reactPlayer}
              />
              {fileType === 'audio' && (
                <Box className={classes.audioIcon}>
                  <FileIcon fileType={fileType} size={64} color={'#FFF'} />
                </Box>
              )}
              <Box className={classes.progressBarWrapper}>
                <Box className={classes.progressBar}>
                  <Box
                    className={classes.progressBarValue}
                    style={{
                      width: playedPercentage + '%',
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
            </Box>
          )}
          {cover ? (
            <ImageLoader
              src={cover}
              height={height}
              width="100%"
              forceImage
              fit={fileType === 'image' ? 'contain' : 'cover'}
            />
          ) : (
            <Box className={classes.fileIcon}>{icon}</Box>
          )}
          <Box className={classes.color} />
        </Box>
        <Box className={classes.titleRow}>
          <TextClamp lines={6}>
            <Title order={4} className={classes.title}>
              {name}
            </Title>
          </TextClamp>
          {/* <IconButton size={'xs'} icon={<ExpandDiagonalIcon height={16} width={16} />} /> */}
          {variant === 'bookmark' && (
            <ActionButton
              icon={<OpenIcon height={16} width={16} />}
              onClick={() => window.open(url, '_blank')}
            />
          )}
          {titleActionButton ? <ActionButton {...titleActionButton} /> : null}
          {playable && (
            <IconButton
              icon={
                !showPlayer ? (
                  <ControlsPlayIcon height={16} width={16} style={{ color: 'white' }} />
                ) : isPlaying ? (
                  <ControlsPauseIcon
                    height={16}
                    width={16}
                    style={{ color: COLORS.interactive01 }}
                  />
                ) : (
                  <ControlsPlayIcon height={16} width={16} style={{ color: 'white' }} />
                )
              }
              rounded
              style={{
                backgroundColor: !isPlaying && COLORS.interactive01,
                border: showPlayer && isPlaying && `2px solid ${COLORS.interactive01}`,
              }}
              onClick={
                !showPlayer
                  ? () => {
                      setShowPlayer(true);
                      setIsPlaying(true);
                    }
                  : () => setIsPlaying(!isPlaying)
              }
            />
          )}
        </Box>
      </Box>
    </>
  );
};

LibraryDetailPlayer.defaultProps = LIBRARY_DETAIL_PLAYER_DEFAULT_PROPS;
LibraryDetailPlayer.propTypes = LIBRARY_DETAIL_PLAYER_PROP_TYPES;

export { LibraryDetailPlayer };
