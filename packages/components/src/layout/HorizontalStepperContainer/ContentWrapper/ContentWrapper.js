import React from 'react';
import { Box } from '../../Box';
import { ContentWrapperStyles } from './ContentWrapper.styles';

const ContentWrapper = ({ currentStep, children }) => {
  const { classes } = ContentWrapperStyles({});
  return (
    <Box className={classes.root}>
      <Box className={classes.header}>{currentStep?.label}</Box>
      <Box className={classes.content}> {children}</Box>
    </Box>
  );
};

export { ContentWrapper };
