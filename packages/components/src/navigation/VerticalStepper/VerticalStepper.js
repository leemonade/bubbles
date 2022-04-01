import React, { cloneElement, useState } from 'react';
import { Box } from '../../layout';
import { Step, StepperButton } from './';
import { VerticalStepperStyles } from './VerticalStepper.styles';
import {
  VERTICAL_STEPPER_DEFAULT_PROPS,
  VERTICAL_STEPPER_PROP_TYPES,
} from './VerticalStepper.constants';
import isFunction from 'lodash/isFunction';
import { Calification } from '../../informative/';

const VerticalStepper = ({ data, current, onNext, onPrevious, ...props }) => {
  const [currentStep, setCurrentStep] = useState(current || 0);

  const handleNextStep = (step) => {
    if (step > data.length - 1) step--;
    setCurrentStep(step);
    isFunction(onNext) && onNext(step);
  };

  const handlePrevStep = (step) => {
    if (step < 0) step = 0;
    setCurrentStep(step);
    isFunction(onPrevious) && onPrevious(step);
  };

  const steps = data.map((step, index) => {
    if (step.allCompleted) return;
    let position = 'between';
    let state = 'pending';
    let isActive = false;

    if (index === 0) position = 'start';
    if (index === data.length - 1) position = 'end';

    if (index < currentStep) state = step.status || 'completed';
    if (index === currentStep) {
      if (step.onClick) isActive = true;
      state = 'current';
    }

    if (step.onClick) {
      return (
        <StepperButton key={index} {...step} state={state} position={position} active={isActive} />
      );
    } else {
      return <Step key={index} {...step} state={state} position={position} />;
    }
  });

  const stepsContent = data.map((step, index) => {
    const propsToInject = step.content
      ? {
          ...step.content.props,
          onNext: () => handleNextStep(index + 1),
          onPrevious: () => handlePrevStep(index - 1),
        }
      : {};

    return cloneElement(step.content || <></>, {
      ...propsToInject,
    });
  });

  const { classes, cx } = VerticalStepperStyles({}, { name: 'VerticalStepper' });
  return (
    <Box className={classes.root}>
      <Box>
        {steps}
        {data[currentStep].allCompleted && <Calification />}
      </Box>
      <Box>{stepsContent[currentStep]}</Box>
    </Box>
  );
};

VerticalStepper.defaultProps = VERTICAL_STEPPER_DEFAULT_PROPS;
VerticalStepper.propTypes = VERTICAL_STEPPER_PROP_TYPES;

export { VerticalStepper };
