import React, { useEffect, useState } from 'react';
import { Box } from '../../layout';
import { Step } from './';
import { VerticalStepperStyles } from './VerticalStepper.styles';
import {
  VERTICAL_STEPPER_DEFAULT_PROPS,
  VERTICAL_STEPPER_PROP_TYPES,
} from './VerticalStepper.constants';
import { Calification } from '../../informative/';

const VerticalStepper = ({
  data,
  currentStep,
  completedSteps: completedStepsProp,
  autocompleteOnNext,
  calificationProps,
  ...props
}) => {
  const [completedSteps, setCompletedSteps] = useState(completedStepsProp);
  const [activeIndex, setActiveIndex] = useState(currentStep);
  const textSteps = [];

  const getSteps = (data) => {
    const steps = [];
    const stepsFiltered = data.filter((step, index) => {
      if (step.text) {
        textSteps.push({ text: step.text, index });
        return false;
      }
      return true;
    });
    stepsFiltered.forEach((step, index) => {
      if (step.text) {
        textSteps.push({ text: step.text, index });
      } else {
        steps.push(step);
      }
      if (step.childSteps) {
        step.childRange = [index + 1, index + step.childSteps.length];
        steps.push(
          ...step.childSteps.map((childStep) => {
            childStep.isChild = true;
            childStep.parentIndex = index;
            childStep.siblingsRange = step.childRange;
            return childStep;
          })
        );
      }
    });
    return steps;
  };

  const allSteps = getSteps(data);
  if (activeIndex > allSteps.length) setActiveIndex(allSteps.length);
  if (activeIndex < 0) setActiveIndex(0);

  const getStepPosition = (index) => {
    if (index === 0) return 'start';
    if (index === allSteps.length - 1) return 'end';
    return 'between';
  };

  const activeIndexInRange = (stepRange) => {
    if (activeIndex >= stepRange[0] && activeIndex <= stepRange[1]) return true;
    return false;
  };

  const checkIfAllCompleted = (step, index) => {
    const allChildrenCompleted = step.childRange.every((childIndex) =>
      completedSteps.includes(childIndex)
    );
    if (completedSteps.includes(index) && allChildrenCompleted) return true;
    return false;
  };

  const getStepState = (step, index) => {
    if (step.isChild) {
      if (step.siblingsRange.every((childIndex) => completedSteps.includes(childIndex)))
        return 'completed';
      if (index <= activeIndex && activeIndexInRange(step.siblingsRange)) return 'current';
    }
    if (step.childRange) {
      if (checkIfAllCompleted(step, index)) return step.status || 'completed';
      if (index === activeIndex || activeIndexInRange(step.childRange)) return 'current';
      return 'pending';
    }
    if (completedSteps.includes(index)) {
      return step.status || 'completed';
    }
    if (index === activeIndex) return 'current';
    return 'pending';
  };

  const shouldShowChild = (step) => {
    if (!step.isChild) return;
    if (
      step.parentIndex === activeIndex ||
      activeIndexInRange(step.siblingsRange) ||
      completedSteps.includes(step.parentIndex) ||
      step.siblingsRange.some((childIndex) => completedSteps.includes(childIndex))
    )
      return true;
    return false;
  };

  const getTextStepState = (textStep) => {
    if (completedSteps.includes(textStep.index - 1)) return 'completed';
    return 'pending';
  };

  const renderTextStep = (index) => {
    const textStep = textSteps.find((step) => step.index === index);
    if (textStep) {
      return (
        <Step key={`textStep${index}`} text={textStep.text} state={getTextStepState(textStep)} />
      );
    }
  };

  const onActiveIndexHandler = (index) => {
    setActiveIndex(index);
  };

  const renderSteps = () => {
    const stepsToRender = allSteps.map((step, index) => {
      const stepProps = {
        position: getStepPosition(index),
        state: getStepState(step, index),
        isActive: index === activeIndex,
        showChild: shouldShowChild(step, index),
      };

      return (
        <React.Fragment key={`fragment${index}`}>
          {renderTextStep(index)}
          <Box
            key={`container${index}`}
            onClick={() => onActiveIndexHandler(index)}
            className={classes.clickableStep}
          >
            <Step key={index} {...step} {...stepProps} />
          </Box>
        </React.Fragment>
      );
    });
    return stepsToRender;
  };

  useEffect(() => {
    if (autocompleteOnNext && currentStep > activeIndex) {
      setCompletedSteps([...new Set([...completedSteps, activeIndex])]);
    }
    if (activeIndex !== currentStep) {
      setActiveIndex(currentStep);
    }
  }, [currentStep]);

  useEffect(() => {
    setCompletedSteps([...new Set(completedStepsProp)]);
  }, [completedStepsProp]);

  const { classes, cx } = VerticalStepperStyles({}, { name: 'VerticalStepper' });
  return (
    <Box className={cx(classes.root)}>
      <Box className={cx(classes.stepColumn)}>
        {renderSteps()}
        {activeIndex === allSteps.length && calificationProps ? (
          <Calification {...calificationProps} />
        ) : null}
      </Box>
    </Box>
  );
};

VerticalStepper.defaultProps = VERTICAL_STEPPER_DEFAULT_PROPS;
VerticalStepper.propTypes = VERTICAL_STEPPER_PROP_TYPES;

export { VerticalStepper };
