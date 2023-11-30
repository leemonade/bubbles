import { CheckIcon } from '@bubbles-ui/icons/solid';
import { isFunction } from 'lodash';
import React, { useEffect, useState } from 'react';
import { Box } from '../../layout/Box';
import { Text, TextClamp } from '../../typography';
import {
  HORIZONTAL_STEPPER_DEFAULT_PROPS,
  HORIZONTAL_STEPPER_PROP_TYPES,
} from './HorizontalStepper.constants';
import { HorizontalStepperStyles } from './HorizontalStepper.styles';

const HorizontalStepper = ({
  currentStep: _currentStep,
  onStepClick,
  allowStepClick,
  allowVisitedStepClick,
  visitedSteps: visitedStepsProp,
  data,
}) => {
  const [currentStep, setCurrentStep] = useState(_currentStep);
  const [visitedSteps, setVisitedSteps] = useState(
    Object.fromEntries([currentStep, ...(visitedStepsProp ?? [])]?.map((key) => [key, true])),
  );

  const onStepClickHandler = (stepIndex) => {
    const stepIsAlreadyVisited = !!visitedSteps[stepIndex];

    if (!(allowStepClick || (allowVisitedStepClick && stepIsAlreadyVisited))) return;

    setCurrentStep(stepIndex);
    setVisitedSteps((steps) => ({ ...steps, [stepIndex]: true }));
    if (isFunction(onStepClick)) onStepClick(stepIndex);
  };

  const { classes, cx } = HorizontalStepperStyles({}, { name: 'HorizontalStepper' });

  const renderSteps = () =>
    data.map(({ label, status }, index) => {
      const isStart = index === 0;
      const isEnd = index === data.length - 1;
      const isCurrent = index === currentStep;
      const isPrev = index < currentStep;
      const isClickable = allowStepClick || (allowVisitedStepClick && !!visitedSteps[index]);

      return (
        <Box
          key={`step-${index}`}
          className={cx(classes.step, { [classes.clickableStep]: isClickable })}
          onClick={() => onStepClickHandler(index)}
        >
          <Box
            className={cx(
              classes.stepDot,
              { [classes.currentDot]: isCurrent },
              { [classes.prevDot]: isPrev },
            )}
          ></Box>
          <CheckIcon
            className={classes.checkIcon}
            style={{ opacity: isPrev && 1, transform: isPrev && 'translateY(5px)' }}
          />
          {!isStart && <Box className={classes.leftSide} />}
          {!isEnd && <Box className={classes.rightSide} />}
          <TextClamp lines={2}>
            <Text className={classes.label}>{label}</Text>
          </TextClamp>
        </Box>
      );
    });

  useEffect(() => {
    if (currentStep === _currentStep) return;
    setCurrentStep(_currentStep);
    setVisitedSteps((steps) => ({ ...steps, [_currentStep]: true }));
  }, [_currentStep]);

  return <Box className={classes.root}>{renderSteps()}</Box>;
};

HorizontalStepper.defaultProps = HORIZONTAL_STEPPER_DEFAULT_PROPS;
HorizontalStepper.propTypes = HORIZONTAL_STEPPER_PROP_TYPES;

export { HorizontalStepper };
