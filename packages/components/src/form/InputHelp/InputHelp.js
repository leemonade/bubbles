import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '@mantine/core';
import { InputHelpStyles } from './InputHelp.styles';

const InputHelp = ({ message, ...props }) => {
  const { classes, cx } = InputHelpStyles({});

  return <Text className={classes.root}>{message}</Text>;
};

InputHelp.propTypes = {
  message: PropTypes.string,
};

export { InputHelp };
