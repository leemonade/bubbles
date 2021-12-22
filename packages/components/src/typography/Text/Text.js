import React from 'react';
import PropTypes from 'prop-types';
import { Text as MantineText } from '@mantine/core';
import { TextStyles } from './Text.styles';

export const TEXT_SIZES = ['xs', 'sm', 'md'];
export const TEXT_COLORS = ['interactive', 'primary', 'secondary', 'tertiary'];
export const TEXT_TRANSFORMS = ['capitalize', 'uppercase', 'lowercase', 'none'];
export const TEXT_ROLES = ['productive', 'expressive', 'inherit'];
export const DEFAULT_PROPS = {
  size: 'sm',
  as: 'span',
  role: 'expressive',
  color: 'secondary',
  transform: 'none',
  strong: false,
};

export const Text = ({
  children,
  as,
  size: sizeProp,
  transform: transformProp,
  color: colorProp,
  className,
  role,
  strong,
  ...props
}) => {
  const transform = TEXT_TRANSFORMS.includes(transformProp)
    ? transformProp
    : DEFAULT_PROPS.transform;
  const size = TEXT_SIZES.includes(sizeProp) ? sizeProp : DEFAULT_PROPS.size;
  const color = TEXT_COLORS.includes(colorProp) ? colorProp : DEFAULT_PROPS.color;
  const { classes, cx } = TextStyles({ role, transform, color, strong });

  return (
    <MantineText {...props} component={as} size={size} className={cx(classes.root, className)}>
      {children}
    </MantineText>
  );
};

Text.defaultProps = DEFAULT_PROPS;

Text.propTypes = {
  size: PropTypes.oneOf(TEXT_SIZES),
  transform: PropTypes.oneOf(TEXT_TRANSFORMS),
  role: PropTypes.oneOf(TEXT_ROLES),
  color: PropTypes.oneOf(TEXT_COLORS),
  strong: PropTypes.bool,
};
