import React, { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mantine/core';
import { Stepper as MantineStepper } from '@mantine/core';
import { StepperStyles } from './Stepper.styles';
import { Title } from '../../typography';
import { Button } from '../../form';
import { isFunction } from 'lodash';

export const STEPPER_DEFAULT_PROPS = {};
export const STEPPER_PROP_TYPES = {
  title: PropTypes.string,
  buttonLabel: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      description: PropTypes.string,
      content: PropTypes.node,
    })
  ),
  completed: PropTypes.node,
  onNext: PropTypes.func,
  onPrev: PropTypes.func,
};

const Stepper = forwardRef(
  ({ title, buttonLabel, data, onNext, onPrev, onSave, ...props }, ref) => {
    const { classes, cx } = StepperStyles({}, { name: 'Stepper' });

    const [active, setActive] = useState(0);
    const [sharedData, setSharedData] = useState(null);

    const handleNextStep = (page) => {
      setActive(page);
      isFunction(onNext) && onNext(page);
    };
    const handlePrevStep = (page) => {
      setActive(page);
      isFunction(onPrev) && onPrev(page);
    };

    const handleSave = () => {
      isFunction(onSave) && onSave(sharedData);
    };

    return (
      <Box>
        <Box className={classes.header}>
          <Title>{title}</Title>
          <Button onClick={handleSave}>{buttonLabel}</Button>
        </Box>
        <MantineStepper active={active} {...props} ref={ref} classNames={classes}>
          {data.map((item, index) => (
            <MantineStepper.Step key={index} label={item.label} description={item.description}>
              {React.cloneElement(item.content, {
                ...item.content.props,
                onNext: () => handleNextStep(index + 1),
                onPrevious: () => handlePrevStep(index - 1),
                setSharedData,
                sharedData,
              })}
            </MantineStepper.Step>
          ))}
        </MantineStepper>
      </Box>
    );
  }
);

Stepper.defaultProps = STEPPER_DEFAULT_PROPS;
Stepper.propTypes = STEPPER_PROP_TYPES;

export { Stepper };
