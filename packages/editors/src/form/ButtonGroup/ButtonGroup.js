import React, { Children, isValidElement } from 'react';
import { Box } from '@bubbles-ui/components';
import { ButtonGroupStyles } from './ButtonGroup.styles';

const ButtonGroup = ({ children }) => {
  const totalChildren = [];
  Children.toArray(children).forEach((child) => {
    if (child.type.name === 'ButtonGroup') {
      child.props.children.length
        ? totalChildren.push(...child.props.children)
        : totalChildren.push(child.props.children);
    } else {
      totalChildren.push(child);
    }
  });
  children = totalChildren.map((child, index, group) => {
    if (!isValidElement(child)) return;
    if (!child.key) child = React.cloneElement(child, { key: `.${index}` });
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
