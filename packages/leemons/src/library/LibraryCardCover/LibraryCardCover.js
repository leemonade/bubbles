import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { isNil } from 'lodash';
import { Box, ImageLoader, Title, COLORS } from '@bubbles-ui/components';
import { LIBRARYCARD_VARIANTS } from '../LibraryCard';
import { LibraryCardDeadline, LIBRARY_CARD_DEADLINE_PROP_TYPES } from '../LibraryCardDeadline';
import { LibraryCardCoverStyles } from './LibraryCardCover.styles';

export const LIBRARYCARD_COVER_DIRECTIONS = ['vertical', 'horizontal'];

export const LIBRARY_CARD_COVER_DEFAULT_PROPS = {
  blur: 10,
  height: 190,
  direction: 'horizontal',
};
export const LIBRARY_CARD_COVER_PROP_TYPES = {
  name: PropTypes.string,
  height: PropTypes.number,
  cover: PropTypes.string,
  color: PropTypes.string,
  blur: PropTypes.number,
  direction: PropTypes.oneOf(LIBRARYCARD_COVER_DIRECTIONS),
  fileIcon: PropTypes.node,
  deadlineProps: PropTypes.shape(LIBRARY_CARD_DEADLINE_PROP_TYPES),
};

const LibraryCardCover = ({
  name,
  height,
  cover,
  color,
  blur,
  direction,
  fileIcon,
  deadlineProps,
  ...props
}) => {
  const { classes, cx } = LibraryCardCoverStyles(
    { color, height, blur, direction },
    { name: 'LibraryCardCover' }
  );

  const icon = useMemo(
    () =>
      !isNil(fileIcon)
        ? React.cloneElement(fileIcon, { iconStyle: { backgroundColor: COLORS.interactive03h } })
        : null,
    [fileIcon]
  );

  return (
    <Box className={classes.root}>
      <Box className={classes.blurryBox}>
        <Box className={classes.color}></Box>
        <Title order={5} className={classes.title}>
          {name}
        </Title>
      </Box>
      {deadlineProps && (
        <Box className={classes.deadline}>
          <LibraryCardDeadline {...deadlineProps} direction={direction} />
        </Box>
      )}
      {cover ? (
        <ImageLoader src={cover} height={height} forceImage />
      ) : (
        <Box className={classes.fileIcon}>{icon}</Box>
      )}
    </Box>
  );
};

LibraryCardCover.defaultProps = LIBRARY_CARD_COVER_DEFAULT_PROPS;
LibraryCardCover.propTypes = LIBRARY_CARD_COVER_PROP_TYPES;

export { LibraryCardCover };