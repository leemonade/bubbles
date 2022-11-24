import React, { forwardRef } from 'react';
import { DropdownStyles } from './Dropdown.styles';
import { DROPDOWN_DEFAULT_PROPS, DROPDOWN_PROP_TYPES } from './Dropdown.constants';
import { Box } from '../../layout';

const Dropdown = forwardRef(({ children, className, ...props }, ref) => {
  const { classes, cx } = DropdownStyles({}, { name: 'Dropdown' });
  return (
    <Box className={classes.root} {...props}>
      {children}
    </Box>
  );
});

Dropdown.defaultProps = DROPDOWN_DEFAULT_PROPS;
Dropdown.propTypes = DROPDOWN_PROP_TYPES;

export { Dropdown };
