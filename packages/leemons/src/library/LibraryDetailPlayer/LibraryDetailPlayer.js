import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  ImageLoader,
  COLORS,
  Title,
  IconButton,
  Text,
  FileIcon,
} from '@bubbles-ui/components';
import { LIBRARY_DETAIL_VARIANTS } from '..';
import { LibraryDetailPlayerStyles } from './LibraryDetailPlayer.styles';
import { isNil } from 'lodash';
import { ControlsPlayIcon, ControlsPauseIcon } from '@bubbles-ui/icons/solid';
import ReactPlayer from 'react-player/lazy';

export const LIBRARY_DETAIL_PLAYER_DEFAULT_PROPS = {
  height: 202,
};
export const LIBRARY_DETAIL_PLAYER_PROP_TYPES = {
  name: PropTypes.string,
  height: PropTypes.number,
  cover: PropTypes.string,
  url: PropTypes.string,
  color: PropTypes.string,
  variant: PropTypes.oneOf(LIBRARY_DETAIL_VARIANTS),
  fileIcon: PropTypes.element,
  fileType: PropTypes.string,
};

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
  ...props
}) => {
  const [showPlayer, setShowPlayer] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [played, setPlayed] = useState(0);
  const [seconds, setSeconds] = useState(0);

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
  };

  const icon = useMemo(
    () =>
      !isNil(fileIcon)
        ? React.cloneElement(fileIcon, { iconStyle: { backgroundColor: COLORS.interactive03h } })
        : null,
    [fileIcon]
  );

  const { classes, cx } = LibraryDetailPlayerStyles(
    { height, color, seconds, fileType },
    { name: 'LibraryDetailPlayer' }
  );
  return (
    <Box className={classes.root}>
      <Box className={classes.coverWrapper}>
        {showPlayer && (
          <Box className={classes.reactPlayerWrapper}>
            <ReactPlayer
              url={url}
              width="100%"
              height={height}
              playing={isPlaying}
              onProgress={({ played, playedSeconds }) => handleOnProgress(played, playedSeconds)}
              onSeek={(seconds) => console.log('seek', seconds)}
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
                    borderRadius: `0px ${
                      playedPercentage <= 1 ? 10 * playedPercentage + 'px' : '12px'
                    } ${playedPercentage <= 1 ? 10 * playedPercentage + 'px' : '12px'} 0px`,
                  }}
                />
                {/* <input type={'range'} min={0} max={0.99} /> */}
              </Box>
              <Text size={'xs'} role={'productive'} className={classes.duration}>
                {getDuration()}
              </Text>
            </Box>
          </Box>
        )}
        {cover ? (
          <Box className={classes.imageWrapper}>
            <ImageLoader src={cover} height={height} forceImage />
          </Box>
        ) : (
          <Box className={classes.fileIcon}>{icon}</Box>
        )}
        <Box className={classes.color} />
      </Box>
      <Box className={classes.titleRow}>
        <Title order={4} className={classes.title}>
          {name}
        </Title>
        {/* <IconButton size={'xs'} icon={<ExpandDiagonalIcon height={16} width={16} />} /> */}
        <IconButton
          icon={
            !showPlayer ? (
              <ControlsPlayIcon height={16} width={16} style={{ color: 'white' }} />
            ) : isPlaying ? (
              <ControlsPauseIcon height={16} width={16} style={{ color: COLORS.interactive01 }} />
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
      </Box>
    </Box>
  );
};

LibraryDetailPlayer.defaultProps = LIBRARY_DETAIL_PLAYER_DEFAULT_PROPS;
LibraryDetailPlayer.propTypes = LIBRARY_DETAIL_PLAYER_PROP_TYPES;

export { LibraryDetailPlayer };
