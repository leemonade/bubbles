import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mantine/core';
import { PageContainerStyles } from './PageContainer.styles';

export const PAGE_CONTAINER_DEFAULT_PROPS = {};
export const PAGE_CONTAINER_PROP_TYPES = {};

const PageContainer = ({ children, className, ...props }) => {
  const { classes, cx } = PageContainerStyles({});

  return <Box className={cx(classes.root, className)}>{children}</Box>;
};

PageContainer.defaultProps = PAGE_CONTAINER_DEFAULT_PROPS;
PageContainer.propTypes = PAGE_CONTAINER_PROP_TYPES;

export { PageContainer };
