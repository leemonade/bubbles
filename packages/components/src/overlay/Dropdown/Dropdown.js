import React, { forwardRef } from 'react';
import { Box } from '../../layout/Box';
import { DropdownStyles } from './Dropdown.styles';
import { DROPDOWN_DEFAULT_PROPS, DROPDOWN_PROP_TYPES } from './Dropdown.constants';

const Dropdown = forwardRef(({ children, className, ...props }, ref) => {
  const { classes } = DropdownStyles({}, { name: 'Dropdown' });
  return (
    <Box className={classes.root} {...props} ref={ref}>
      {children}
    </Box>
  );
});

Dropdown.displayName = 'Dropdown';
Dropdown.defaultProps = DROPDOWN_DEFAULT_PROPS;
Dropdown.propTypes = DROPDOWN_PROP_TYPES;

export { Dropdown };
