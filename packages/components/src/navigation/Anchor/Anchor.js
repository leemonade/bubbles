import React from 'react';
import PropTypes from 'prop-types';
import { OpenIcon } from '@bubbles-ui/icons/outline';
import { Stack } from '../../layout';
import { Text, TEXT_ROLES } from '../../typography';
import { AnchorStyles } from './Anchor.styles';

export const ANCHOR_ROLES = TEXT_ROLES;
export const ANCHOR_PROP_TYPES = {
  as: PropTypes.any,
  role: PropTypes.oneOf(ANCHOR_ROLES),
  external: PropTypes.bool,
  children: PropTypes.node,
};
export const ANCHOR_DEFAULT_PROPS = {
  as: 'a',
  role: 'productive',
  external: false,
};

const Anchor = ({ as, role, className, external, children, ...props }) => {
  const { classes, cx } = AnchorStyles({});
  const Wrapper = external ? Stack : React.Fragment;
  const wrapperProps = external ? { spacing: 2 } : {};

  return (
    <Text {...props} as={as} role={role} className={cx(classes.root, className)}>
      <Wrapper {...wrapperProps}>
        {children}
        {external && <OpenIcon />}
      </Wrapper>
    </Text>
  );
};

Anchor.defaultProps = ANCHOR_DEFAULT_PROPS;
Anchor.propTypes = ANCHOR_PROP_TYPES;

export { Anchor };
