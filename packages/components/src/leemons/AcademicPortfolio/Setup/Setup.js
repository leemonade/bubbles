import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mantine/core';
import { SetupStyles } from './Setup.styles';
import { Stepper } from '../../../navigation/';
import { Title } from '../../../typography';
import { Button } from '../../../form';

export const SETUP_DEFAULT_PROPS = {};
export const SETUP_PROP_TYPES = {
  title: PropTypes.string,
  buttonLabel: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      description: PropTypes.string,
      content: PropTypes.node,
    })
  ),
  onNext: PropTypes.func,
  onPrev: PropTypes.func,
  onSave: PropTypes.func,
};

const Setup = ({ title, buttonLabel, data, onNext, onPrev, onSave, ...props }) => {
  const { classes, cx } = SetupStyles({});

  const [sharedData, setSharedData] = useState(null);

  const handleSave = () => {
    isFunction(onSave) && onSave(sharedData);
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.header}>
        <Title>{title}</Title>
        <Button onClick={handleSave}>{buttonLabel}</Button>
      </Box>
      <Stepper
        data={data}
        onNext={onNext}
        onPrev={onPrev}
        sharedData={sharedData}
        setSharedData={setSharedData}
        {...props}
        classNames={classes}
      />
    </Box>
  );
};

Setup.defaultProps = SETUP_DEFAULT_PROPS;
Setup.propTypes = SETUP_PROP_TYPES;

export { Setup };
