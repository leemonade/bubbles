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
  const [currentSubstep, setCurrentSubstep] = useState(0);

  const handleNextStep = (step) => {
    if (step > data.length - 1) step--;
    setCurrentSubstep(0);
    setCurrentStep(step);
    isFunction(onNext) && onNext(step);
  };

  const handlePrevStep = (step) => {
    if (step < 0) step = 0;
    setCurrentStep(step);
    isFunction(onPrevious) && onPrevious(step);
  };

  const handleNextChild = (subSteps) => {
    if (currentSubstep + 1 > subSteps) {
      handleNextStep(currentStep + 1);
      return;
    }
    setCurrentSubstep(currentSubstep + 1);
  };

  const handlePrevChild = () => {
    if (currentSubstep === 0) {
      handlePrevStep(currentStep - 1);
      return;
    }
    setCurrentSubstep(currentSubstep - 1);
  };

  const getStepsContent = () => {
    const stepsContent = [];
    const subStepsContent = [];
    data.forEach((step, index) => {
      const propsToInject = {
        ...step.content.props,
        onNext: () =>
          step.subSteps ? handleNextChild(step.subSteps.length) : handleNextStep(index + 1),
        onPrevious: () => (step.subSteps ? handlePrevChild() : handlePrevStep(index - 1)),
      };

      stepsContent.push(cloneElement(step.content || <></>, { ...propsToInject }));
      if (step.subSteps) {
        subStepsContent.push({
          key: index,
          subSteps: [
            ...step.subSteps.map((subStep) => {
              const propsToInject = {
                ...subStep.content.props,
                onNext: () => handleNextChild(step.subSteps.length),
                onPrevious: () => handlePrevChild(),
              };
              return cloneElement(subStep.content || <></>, { ...propsToInject });
            }),
          ],
        });
      }
    });
    return { stepsContent, subStepsContent };
  };

  const renderStep = () => {
    const { stepsContent, subStepsContent } = getStepsContent();

    const currentStepWithChild = subStepsContent.filter((step) => step.key === currentStep).pop();
    if (currentStepWithChild && currentSubstep !== 0) {
      return currentStepWithChild.subSteps[currentSubstep - 1];
    }
    return stepsContent[currentStep];
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
      return (
        <Step
          key={index}
          {...step}
          state={state}
          position={position}
          currentSubstep={currentSubstep}
        />
      );
    }
  });

  const { classes, cx } = VerticalStepperStyles({}, { name: 'VerticalStepper' });
  return (
    <Box className={classes.root}>
      <Box>
        {steps}
        {data[currentStep].allCompleted && <Calification />}
      </Box>
      <Box>{renderStep()}</Box>
    </Box>
  );
};

VerticalStepper.defaultProps = VERTICAL_STEPPER_DEFAULT_PROPS;
VerticalStepper.propTypes = VERTICAL_STEPPER_PROP_TYPES;

export { VerticalStepper };
