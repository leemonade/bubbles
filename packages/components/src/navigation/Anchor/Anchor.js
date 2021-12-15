import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '../../typography';
import { AnchorStyles } from './Anchor.styles';

const Anchor = ({ as, role, ...props }) => {
  const { classes, cx } = AnchorStyles({});

  return <Text {...props} as={as} role={role} className={classes.root} />;
};

Anchor.defaultProps = {
  as: 'a',
  role: 'productive',
};

Anchor.propTypes = {
  as: PropTypes.any,
};

export { Anchor };
