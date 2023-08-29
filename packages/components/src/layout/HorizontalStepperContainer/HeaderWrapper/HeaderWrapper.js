import React, { isValidElement } from 'react';
import { Box } from '../../Box';
import { HeaderWrapperStyles } from './HeaderWrapper.styles';
import { HorizontalStepper } from '../../../navigation';

export const HeaderWrapper = ({ data, currentStep, Header, stickyAt, ...props }) => {
  const { classes } = HeaderWrapperStyles({ stickyAt });
  const useHeader = isValidElement(Header);

  return (
    <Box className={classes.root}>
      {
        !!useHeader && Header
      }
      <HorizontalStepper data={data} currentStep={currentStep} {...props} />
    </Box>
  );
};
