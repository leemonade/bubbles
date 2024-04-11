import React from 'react';
import PropTypes from 'prop-types';
import { TotalLayoutFooterContainer } from '../../../layout/TotalLayout';

const LeftActions = ({ children }) => <>{children}</>;
const RightActions = ({ children }) => <>{children}</>;

const DrawerFooter = ({ children, leftZone, rightZone, ...props }) => {
  const childrenArray = React.Children.toArray(children);
  const leftActions = childrenArray.find((child) => child.type === LeftActions);
  const rightActions = childrenArray.find((child) => child.type === RightActions);
  const otherChildren = childrenArray.filter(
    (child) => child.type !== LeftActions && child.type !== RightActions,
  );

  return (
    <TotalLayoutFooterContainer
      {...props}
      leftZone={leftActions ?? leftZone}
      rightZone={rightActions ?? rightZone}
    >
      {otherChildren}
    </TotalLayoutFooterContainer>
  );
};

LeftActions.propTypes = {
  children: PropTypes.node,
};

RightActions.propTypes = {
  children: PropTypes.node,
};

DrawerFooter.LeftActions = LeftActions;
DrawerFooter.RightActions = RightActions;
DrawerFooter.displayName = 'DrawerFooter';
DrawerFooter.propTypes = {
  children: PropTypes.node,
  leftZone: PropTypes.node,
  rightZone: PropTypes.node,
};
export { DrawerFooter };
