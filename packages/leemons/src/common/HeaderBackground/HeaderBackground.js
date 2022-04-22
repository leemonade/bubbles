import React from 'react';
import { Box } from '@bubbles-ui/components';
import { HeaderBackgroundStyles } from './HeaderBackground.styles';
import {
  HEADER_BACKGROUND_DEFAULT_PROPS,
  HEADER_BACKGROUND_PROP_TYPES,
} from './HeaderBackground.constants';
import backgroundImage from './backgroundImage.svg';

const HeaderBackground = ({
  image,
  color,
  height,
  width,
  withGradient,
  withBlur,
  blur,
  styles,
  ...props
}) => {
  const { classes, cx } = HeaderBackgroundStyles(
    { image, color, height, width, withBlur, blur, styles },
    { name: 'HeaderBackground' }
  );

  return (
    <Box className={classes.root}>
      {!image && <Box className={classes.color} />}
      <Box
        className={classes.image}
        style={{ backgroundImage: !image && `url(${backgroundImage})` }}
      />
      {withGradient && <Box className={classes.gradient} />}
    </Box>
  );
};

HeaderBackground.defaultProps = HEADER_BACKGROUND_DEFAULT_PROPS;
HeaderBackground.propTypes = HEADER_BACKGROUND_PROP_TYPES;

export { HeaderBackground };
