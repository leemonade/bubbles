import React from 'react';
import PropTypes from 'prop-types';
import { Box, ImageLoader, Title } from '@bubbles-ui/components';
import { LibraryCardCoverStyles } from './LibraryCardCover.styles';

export const LIBRARY_CARD_COVER_DEFAULT_PROPS = {
  height: 190,
};
export const LIBRARY_CARD_COVER_PROP_TYPES = {};

const LibraryCardCover = ({ name, height, cover, color, variant, fileIcon, hovered, ...props }) => {
  const { classes, cx } = LibraryCardCoverStyles(
    { color, hovered, height },
    { name: 'LibraryCardCover' }
  );
  return (
    <Box className={classes.root}>
      <Box className={classes.blurryBox}>
        <Box className={classes.color}></Box>
        <Title order={5} className={classes.title}>
          {name}
        </Title>
      </Box>
      {cover ? (
        <ImageLoader src={cover} height={height} forceImage />
      ) : (
        <Box className={classes.fileIcon}>{fileIcon}</Box>
      )}
    </Box>
  );
};

LibraryCardCover.defaultProps = LIBRARY_CARD_COVER_DEFAULT_PROPS;
LibraryCardCover.propTypes = LIBRARY_CARD_COVER_PROP_TYPES;

export { LibraryCardCover };
