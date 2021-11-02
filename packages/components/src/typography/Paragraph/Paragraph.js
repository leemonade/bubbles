import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '@mantine/core';
import { ParagraphStyles } from './Paragraph.styles';

export const PARAGRAPH_ALIGNS = ['right', 'left', 'center'];
export const PARAGRAPH_TRANSFORMS = ['capitalize', 'uppercase', 'lowercase'];

export const Paragraph = ({ children, size = 'sm', style, className, classNames, ...props }) => {
  return (
    <Text component="p" size={size} sx={(theme) => ParagraphStyles(theme)} {...props}>
      {children}
    </Text>
  );
};

Paragraph.propTypes = {
  size: PropTypes.string,
  align: PropTypes.oneOf(PARAGRAPH_ALIGNS),
  transform: PropTypes.oneOf(PARAGRAPH_TRANSFORMS),
};
