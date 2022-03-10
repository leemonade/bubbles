import React from 'react';
import { Box } from '../../layout/Box';
import { ContentLegibleStyles } from './ContentLegible.styles';

export const CONTENT_LEGIBLE_DEFAULT_PROPS = {};
export const CONTENT_LEGIBLE_PROP_TYPES = {};

const ContentLegible = ({ children, className, ...props }) => {
  const { classes, cx } = ContentLegibleStyles({});

  return <Box className={cx(classes.root, className)}>{children}</Box>;
};

ContentLegible.defaultProps = CONTENT_LEGIBLE_DEFAULT_PROPS;
ContentLegible.propTypes = CONTENT_LEGIBLE_PROP_TYPES;

export { ContentLegible };
