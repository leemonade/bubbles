import React, { Children, isValidElement } from 'react';

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

  return <div>{children}</div>;
};

export { ButtonGroup };
