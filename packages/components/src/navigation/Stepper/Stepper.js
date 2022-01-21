import React, { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import { isFunction } from 'lodash';
import { Stepper as MantineStepper } from '@mantine/core';
import { CheckIcon } from '@bubbles-ui/icons/solid';
import { StepperStyles } from './Stepper.styles';

export const STEPPER_DEFAULT_PROPS = {};
export const STEPPER_PROP_TYPES = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      description: PropTypes.string,
      content: PropTypes.node,
    })
  ),
  onNext: PropTypes.func,
  onPrev: PropTypes.func,
};

const Stepper = forwardRef(
  ({ title, buttonLabel, data, onNext, onPrev, sharedData, setSharedData, ...props }, ref) => {
    const { classes, cx } = StepperStyles({}, { name: 'Stepper' });

    const [active, setActive] = useState(props.active || 0);

    const handleNextStep = (page) => {
      setActive(page);
      isFunction(onNext) && onNext(page);
    };
    const handlePrevStep = (page) => {
      setActive(page);
      isFunction(onPrev) && onPrev(page);
    };

    return (
      <MantineStepper active={active} {...props} ref={ref} classNames={classes}>
        {data.map((item, index) => (
          <MantineStepper.Step
            key={index}
            label={item.label}
            description={item.description}
            completedIcon={<CheckIcon />}
          >
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
    );
  }
);

Stepper.defaultProps = STEPPER_DEFAULT_PROPS;
Stepper.propTypes = STEPPER_PROP_TYPES;

export { Stepper };
