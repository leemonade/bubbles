import React from 'react';
import PropTypes from 'prop-types';
import { TotalLayoutFooterContainer } from '../../TotalLayout';
import { TLAYOUT_FOOTER_NAME } from '../TLayout.constants';

const LEFT_ACTION_NAME = `${TLAYOUT_FOOTER_NAME}LeftActions`;
const RIGHT_ACTION_NAME = `${TLAYOUT_FOOTER_NAME}RightActions`;
const CENTER_ACTION_NAME = `${TLAYOUT_FOOTER_NAME}CenterActions`;

const LeftActions = ({ children }) => <>{children}</>;
const RightActions = ({ children }) => <>{children}</>;
const CenterActions = ({ children }) => <>{children}</>;

const TLayoutFooter = ({ children, leftZone, rightZone, ...props }) => {
  const childrenArray = React.Children.toArray(children);
  const leftActions = childrenArray.find(
    (child) => child.type === LeftActions || child.displayName === LEFT_ACTION_NAME,
  );
  const rightActions = childrenArray.find(
    (child) => child.type === RightActions || child.displayName === RIGHT_ACTION_NAME,
  );
  const centerActions = childrenArray.find(
    (child) => child.type === CenterActions || child.displayName === CENTER_ACTION_NAME,
  );
  const otherChildren = childrenArray.filter(
    (child) =>
      ![LeftActions, RightActions, CenterActions].includes(child.type) &&
      ![LEFT_ACTION_NAME, RIGHT_ACTION_NAME, CENTER_ACTION_NAME].includes(child.displayName),
  );

  return (
    <TotalLayoutFooterContainer
      {...props}
      leftZone={leftActions ?? leftZone}
      rightZone={rightActions ?? rightZone}
    >
      {centerActions ?? otherChildren}
    </TotalLayoutFooterContainer>
  );
};

LeftActions.displayName = LEFT_ACTION_NAME;
LeftActions.propTypes = {
  children: PropTypes.node,
};

RightActions.displayName = RIGHT_ACTION_NAME;
RightActions.propTypes = {
  children: PropTypes.node,
};

CenterActions.displayName = CENTER_ACTION_NAME;
CenterActions.propTypes = {
  children: PropTypes.node,
};

TLayoutFooter.LeftActions = LeftActions;
TLayoutFooter.RightActions = RightActions;
TLayoutFooter.CenterActions = CenterActions;
TLayoutFooter.displayName = TLAYOUT_FOOTER_NAME;
TLayoutFooter.propTypes = {
  children: PropTypes.node,
  leftZone: PropTypes.node,
  rightZone: PropTypes.node,
};
export { TLayoutFooter };
