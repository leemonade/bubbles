import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../../layout/Box';
import { PageContainerStyles } from './PageContainer.styles';

export const PAGE_CONTAINER_DEFAULT_PROPS = {
  fullWidth: false,
};
export const PAGE_CONTAINER_PROP_TYPES = {
  fullWidth: PropTypes.bool,
};

const PageContainer = ({ children, className, fullWidth, ...props }) => {
  const { classes, cx } = PageContainerStyles({ fullWidth });

  return (
    <Box {...props} className={cx(classes.root, className)}>
      {children}
    </Box>
  );
};

PageContainer.defaultProps = PAGE_CONTAINER_DEFAULT_PROPS;
PageContainer.propTypes = PAGE_CONTAINER_PROP_TYPES;

export { PageContainer };
