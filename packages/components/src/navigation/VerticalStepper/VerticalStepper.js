import React from 'react';
import { Box } from '../../layout';
import { Step, StepperButton } from './';
import { VerticalStepperStyles } from './VerticalStepper.styles';
import {
  VERTICAL_STEPPER_DEFAULT_PROPS,
  VERTICAL_STEPPER_PROP_TYPES,
} from './VerticalStepper.constants';
import { Calification } from '../../informative/';
import { inRange } from 'lodash';

const VerticalStepper = ({
  data,
  currentStep,
  currentChild,
  onNext,
  onPrevious,
  calificationProps,
  rootClassName,
  stepColumnClassname,
  currentStepClassname,
  rootStyles,
  stepColumnStyles,
  // currentStepStyles,
  ...props
}) => {
  const allSteps = [];
  data.forEach((step, index) => {
    allSteps.push(step);
    if (step.childSteps) {
      allSteps.push(
        ...step.childSteps.map((childStep) => {
          step.childPositions = [index + 1, index + step.childSteps.length];
          step.totalChilds = step.childSteps.length;
          childStep.childPositions = step.childPositions;
          childStep.isChild = true;
          return childStep;
        })
      );
    }
  });

  if (currentStep > allSteps.length) currentStep = allSteps.length;
  if (currentStep < 0) currentStep = 0;

  const renderSteps = () => {
    const stepsToRender = [];
    allSteps.forEach((step, index) => {
      if (index === allSteps.length) return;
      let position = 'between';
      let state = 'pending';
      let isActive = false;
      let stepInRange = false;

      if (step.childPositions) {
        stepInRange = inRange(currentStep, step.childPositions[0], step.childPositions[1] + 1);
      }
      if (index === 0) position = 'start';
      if (index === allSteps.length - 1) position = 'end';
      if (index < currentStep) state = step.status || 'completed';
      if (index === currentStep) {
        if (step.onClick) isActive = true;
        state = 'current';
      }
      if (stepInRange) {
        state = 'current';
      }

      if (step.onClick) {
        stepsToRender.push(
          <StepperButton
            key={index}
            {...step}
            state={state}
            position={position}
            active={isActive}
          />
        );
      } else {
        stepsToRender.push(
          <Step
            key={index}
            {...step}
            state={state}
            position={position}
            isChild={step.isChild}
            currentStep={currentStep}
            childPosition={index}
          />
        );
      }
    });
    return stepsToRender;
  };

  const { classes, cx } = VerticalStepperStyles(
    { rootStyles, stepColumnStyles },
    { name: 'VerticalStepper' }
  );
  return (
    <Box className={cx(classes.root, rootClassName)}>
      <Box className={cx(classes.stepColumn, stepColumnClassname)}>
        {renderSteps()}
        {currentStep === allSteps.length && <Calification {...calificationProps} />}
      </Box>
      {/* <Box className={cx(classes.currentStep, currentStepClassname)}>{renderStep()}</Box> */}
    </Box>
  );
};

VerticalStepper.defaultProps = VERTICAL_STEPPER_DEFAULT_PROPS;
VerticalStepper.propTypes = VERTICAL_STEPPER_PROP_TYPES;

export { VerticalStepper };
