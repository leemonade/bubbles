import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Highlight as MantineHighlight } from '@mantine/core';
import { HighlightStyles } from './Highlight.styles';

const Highlight = forwardRef(({ highlight, className, classNames, children, ...props }, ref) => {
  const { classes, cx } = HighlightStyles({});

  return (
    <MantineHighlight
      {...props}
      highlight={highlight}
      ref={ref}
      className={cx(classes.root, className)}
    >
      {children}
    </MantineHighlight>
  );
});

Highlight.displayName = 'Highlight';
Highlight.propTypes = {
  highlight: PropTypes.string,
  className: PropTypes.string,
  classNames: PropTypes.any,
  children: PropTypes.node,
};

export { Highlight };
