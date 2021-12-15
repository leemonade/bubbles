import React from 'react';
import PropTypes from 'prop-types';
import { Text as MantineText } from '@mantine/core';
import { TextStyles } from './Text.styles';

export const TEXT_TRANSFORMS = ['capitalize', 'uppercase', 'lowercase'];
export const TEXT_ROLES = ['productive', 'expressive', 'inherit'];

export const Text = ({
  children,
  as,
  size,
  className,
  role,
  transform: transformProp,
  ...props
}) => {
  const transform = TEXT_TRANSFORMS.includes(transformProp) ? transformProp : '';
  const { classes, cx } = TextStyles({ role, transform });

  return (
    <MantineText {...props} component={as} size={size} className={cx(classes.root, className)}>
      {children}
    </MantineText>
  );
};

Text.defaultProps = {
  size: 'sm',
  as: 'span',
  role: 'expressive',
};

Text.propTypes = {
  size: PropTypes.string,
  transform: PropTypes.oneOf(TEXT_TRANSFORMS),
  role: PropTypes.oneOf(TEXT_ROLES),
};
