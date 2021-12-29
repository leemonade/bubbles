import React from 'react';
import PropTypes from 'prop-types';
import { ParagraphStyles } from './Paragraph.styles';
import { Text, TEXT_SIZES, TEXT_TRANSFORMS } from '../Text';

export const PARAGRAPH_SIZES = TEXT_SIZES;
export const PARAGRAPH_COLORS = ['primary', 'secondary', 'tertiary'];
export const PARAGRAPH_ALIGNS = ['right', 'left', 'center'];
export const PARAGRAPH_TRANSFORMS = TEXT_TRANSFORMS;
export const PARAGRAPH_DEFAULT_PROPS = {
  align: 'left',
  size: 'sm',
  color: 'tertiary',
};

const Paragraph = ({
  children,
  style,
  align,
  className,
  classNames,
  color: colorProp,
  ...props
}) => {
  const color = PARAGRAPH_COLORS.includes(colorProp) ? colorProp : PARAGRAPH_DEFAULT_PROPS.color;
  const { classes, cx } = ParagraphStyles({ align });

  return (
    <Text
      {...props}
      as={'p'}
      color={color}
      role={'productive'}
      className={cx(classes.root, className)}
    >
      {children}
    </Text>
  );
};

Paragraph.defaultProps = PARAGRAPH_DEFAULT_PROPS;

Paragraph.propTypes = {
  size: PropTypes.oneOf(PARAGRAPH_SIZES),
  align: PropTypes.oneOf(PARAGRAPH_ALIGNS),
  transform: PropTypes.oneOf(PARAGRAPH_TRANSFORMS),
  color: PropTypes.oneOf(PARAGRAPH_COLORS),
};

export { Paragraph };
