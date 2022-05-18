import React, { useState, useEffect } from 'react';
import { Box } from '../../layout';
import { TextClamp, Text } from '../../typography';
import { HorizontalStepperStyles } from './HorizontalStepper.styles';
import {
  HORIZONTAL_STEPPER_DEFAULT_PROPS,
  HORIZONTAL_STEPPER_PROP_TYPES,
} from './HorizontalStepper.constants';
import { useElementSize } from '@mantine/hooks';
import { isFunction } from 'lodash';
import { CheckIcon } from '@bubbles-ui/icons/solid';

const HorizontalStepper = ({
  currentStep: _currentStep,
  onStepClick,
  allowStepClick,
  data,
  ...props
}) => {
  const { ref: rootRef } = useElementSize();
  const [currentStep, setCurrentStep] = useState(_currentStep);
  const { width: stepWidth } = rootRef?.current?.firstChild.getBoundingClientRect() || 0;

  const onStepClickHandler = (stepIndex) => {
    if (!allowStepClick) return;
    setCurrentStep(stepIndex);
    isFunction(onStepClick) && onStepClick(stepIndex);
  };

  const renderSteps = () => {
    const steps = data.map(({ label, status }, index) => {
      const isStart = index === 0;
      const isEnd = index === data.length - 1;
      const isCurrentOrPrev = index <= currentStep;
      const isCurrent = index === currentStep;
      const isPrev = index < currentStep;

      const getLineClasses = (isLeft) => {
        const classesArray = [isLeft ? classes.leftSide : classes.rightSide];
        if (isCurrentOrPrev) classesArray.push(classes.isCurrentOrPrev);
        if (isLeft && isCurrent) classesArray.push(classes.isPrev);
        if (isPrev) classesArray.push(classes.isPrev);
        return classesArray;
      };

      return (
        <Box
          key={`step-${index}`}
          className={classes.step}
          onClick={() => onStepClickHandler(index)}
        >
          <Box className={cx(classes.stepDot, isCurrent || isPrev ? classes.currentDot : '')}></Box>
          <CheckIcon
            className={classes.checkIcon}
            style={{ opacity: isPrev && 1, transform: isPrev && 'translateY(3px)' }}
          />
          {!isStart && <Box className={cx(...getLineClasses(true))} />}
          {!isEnd && <Box className={cx(...getLineClasses(false))} />}
          <TextClamp lines={2}>
            <Text className={cx(classes.label, isCurrent ? classes.currentLabel : '')}>
              {label}
            </Text>
          </TextClamp>
        </Box>
      );
    });
    return steps;
  };

  useEffect(() => {
    if (currentStep === _currentStep) return;
    setCurrentStep(_currentStep);
  }, [_currentStep]);

  const { classes, cx } = HorizontalStepperStyles(
    { allowStepClick, currentStep, stepWidth, dataLength: data.length },
    { name: 'HorizontalStepper' }
  );
  return (
    <Box className={classes.root} ref={rootRef}>
      {renderSteps()}
      <Box className={classes.selectedStep} />
    </Box>
  );
};

HorizontalStepper.defaultProps = HORIZONTAL_STEPPER_DEFAULT_PROPS;
HorizontalStepper.propTypes = HORIZONTAL_STEPPER_PROP_TYPES;

export { HorizontalStepper };
