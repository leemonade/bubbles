import React from 'react';
import PropTypes from 'prop-types';
import { ParagraphStyles } from './Paragraph.styles';
import { Text } from '../Text';

export const PARAGRAPH_ALIGNS = ['right', 'left', 'center'];
export const PARAGRAPH_TRANSFORMS = ['capitalize', 'uppercase', 'lowercase'];

const Paragraph = ({ children, style, align, className, classNames, ...props }) => {
  const { classes } = ParagraphStyles({ align });

  return (
    <Text {...props} as={'p'} role={'productive'} className={classes.root}>
      {children}
    </Text>
  );
};

Paragraph.propTypes = {
  size: PropTypes.string,
  align: PropTypes.oneOf(PARAGRAPH_ALIGNS),
  transform: PropTypes.oneOf(PARAGRAPH_TRANSFORMS),
};

export { Paragraph };
