import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Box, ImageLoader, COLORS, Title, IconButton } from '@bubbles-ui/components';
import { LIBRARY_DETAILS_VARIANTS } from '..';
import { LibraryDetailPlayerStyles } from './LibraryDetailPlayer.styles';
import { isNil } from 'lodash';
import { ExpandDiagonalIcon } from '@bubbles-ui/icons/outline/';
import { ControlsPlayIcon } from '@bubbles-ui/icons/solid';
// import ReactPlayer from 'react-player';

export const LIBRARY_DETAIL_PLAYER_DEFAULT_PROPS = {
  height: 202,
};
export const LIBRARY_DETAIL_PLAYER_PROP_TYPES = {
  height: PropTypes.number,
  cover: PropTypes.string,
  url: PropTypes.string,
  color: PropTypes.string,
  variant: PropTypes.oneOf(LIBRARY_DETAILS_VARIANTS),
  fileIcon: PropTypes.element,
};

const LibraryDetailPlayer = ({ height, cover, url, color, variant, fileIcon, ...props }) => {
  const icon = useMemo(
    () =>
      !isNil(fileIcon)
        ? React.cloneElement(fileIcon, { iconStyle: { backgroundColor: COLORS.interactive03h } })
        : null,
    [fileIcon]
  );

  const { classes, cx } = LibraryDetailPlayerStyles(
    { height, color },
    { name: 'LibraryDetailPlayer' }
  );
  return (
    <Box className={classes.root}>
      <Box className={classes.cover}>
        {cover ? (
          <ImageLoader src={cover} height={height} forceImage />
        ) : (
          <Box className={classes.fileIcon}>{icon}</Box>
        )}
        <Box className={classes.color} />
      </Box>
      <Box className={classes.titleRow}>
        <Title order={4} className={classes.title}>
          The Roman Empire
        </Title>
        <IconButton size={'xs'} icon={<ExpandDiagonalIcon height={16} width={16} />} />
        <IconButton
          icon={<ControlsPlayIcon height={16} width={16} style={{ color: 'white' }} />}
          rounded
          style={{ backgroundColor: COLORS.interactive01 }}
        />
      </Box>
    </Box>
  );
};

LibraryDetailPlayer.defaultProps = LIBRARY_DETAIL_PLAYER_DEFAULT_PROPS;
LibraryDetailPlayer.propTypes = LIBRARY_DETAIL_PLAYER_PROP_TYPES;

export { LibraryDetailPlayer };
