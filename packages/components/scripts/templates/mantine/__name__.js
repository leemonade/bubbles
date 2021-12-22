import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { __mantine__ as Mantine__mantine__ } from '@mantine/core';
import { __name__Styles } from './__name__.styles';

export const DEFAULT_PROPS = {};

const __name__ = forwardRef(({ ...props }, ref) => {
  const { classes, cx } = __name__Styles({});

  return <Mantine__mantine__ {...props} ref={ref} classNames={classes} />;
});

__name__.defaultProps = DEFAULT_PROPS;

__name__.propTypes = {
  //
};

export { __name__ };
