import React, { Children, isValidElement } from 'react';
import { Box } from '@bubbles-ui/components';
import { ButtonGroupStyles } from './ButtonGroup.styles';

const ButtonGroup = ({ children }) => {
  children = Children.toArray(children).map((child, index, group) => {
    if (!isValidElement(child)) return;
    if (group.length === 1) return child;
    if (index === 0) {
      return React.cloneElement(child, {
        position: 'start',
      });
    }
    if (index === group.length - 1) {
      return React.cloneElement(child, {
        position: 'end',
      });
    }
    return React.cloneElement(child, {
      position: 'center',
    });
  });

  const { classes } = ButtonGroupStyles({});
  return <Box className={classes.root}>{children}</Box>;
};

export { ButtonGroup };
