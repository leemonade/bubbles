import React from 'react';
import { Box } from '@mantine/core';
import { Stack } from '../Stack';
import { ContextContainer } from '../ContextContainer';
import { TotalLayoutStyles } from './TotalLayout.styles';
import { TOTAL_LAYOUT_DEFAULT_PROPS, TOTAL_LAYOUT_PROP_TYPES } from './TotalLayout.constants';

const TotalLayout = ({ headerComponent, footerComponent, children, ...props }) => {
  const { classes } = TotalLayoutStyles({}, { name: 'TotalLayout' });

  return (
    <Stack style={{ backgroundColor: 'red' }} fullWidth fullHeight direction="column">
      <Box style={{ backgroundColor: 'blue' }} noFlex>
        {headerComponent}
      </Box>
      <Box style={{ backgroundColor: 'white', overflow: 'auto' }}>{children}</Box>
      <Box style={{ backgroundColor: 'white' }} noFlex>
        {footerComponent}
      </Box>
    </Stack>
  );
};

TotalLayout.defaultProps = TOTAL_LAYOUT_DEFAULT_PROPS;
TotalLayout.propTypes = TOTAL_LAYOUT_PROP_TYPES;

export { TotalLayout };
