import React from 'react';
import PropTypes from 'prop-types';
import { Text as MantineText } from '@mantine/core';
import { TextStyles } from './Text.styles';

export const TEXT_TRANSFORMS = ['capitalize', 'uppercase', 'lowercase'];

export const Text = ({
  children,
  as,
  size = 'sm',
  className,
  transform: transformProp,
  ...props
}) => {
  const transform = TEXT_TRANSFORMS.includes(transformProp) ? transformProp : '';
  const { classes, cx } = TextStyles({});
  return (
    <MantineText
      component={as}
      size={size}
      className={cx(classes.root, className)}
      style={{ textTransform: transform }}
    >
      {children}
    </MantineText>
  );
};

Text.propTypes = {
  size: PropTypes.string,
  transform: PropTypes.oneOf(TEXT_TRANSFORMS),
};
