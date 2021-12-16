import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '@mantine/core';
import { InputDescriptionStyles } from './InputDescription.styles';

const InputDescription = ({ message, ...props }) => {
  const { classes, cx } = InputDescriptionStyles({});

  return <Text className={classes.root}>{message}</Text>;
};

InputDescription.propTypes = {
  message: PropTypes.string,
};

export { InputDescription };
