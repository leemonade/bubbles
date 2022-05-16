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
  activeIndex: activeIndexProp,
  completedSteps: completedStepsProp,
  autocompleteOnNext,
  calificationProps,
  ...props
}) => {
  const [completedSteps, setCompletedSteps] = useState(completedStepsProp);
  const [activeIndex, setActiveIndex] = useState(activeIndexProp);
  const textSteps = [];

  const getSteps = (data) => {
    const steps = [];
    data.forEach((step, index) => {
      if (step.text) {
        textSteps.push({ text: step.text, index });
        return;
      }
      steps.push(step);
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

  const getCompletionState = (step, index) => {
    if (!step.childSteps && completedSteps.includes(index)) return true;
    if (
      step.childRange &&
      step.childRange.every((childIndex) => completedSteps.includes(childIndex))
    ) {
      return true;
    }
    if (step.isChild && completedSteps.includes(step.parentIndex)) return true;
    return false;
  };

  const getStepState = (index, step) => {
    if (getCompletionState(step, index)) return step.status || 'completed';
    if (step.childSteps && isIndexInParentRange(step.childRange, activeIndex)) return 'current';
    if (step.isChild && index <= activeIndex && activeIndex <= step.siblingsRange[1]) {
      return 'current';
    }
    if (index === activeIndex) return 'current';
    return 'pending';
  };

  const isIndexInParentRange = (siblingsRange, index) => {
    return index >= siblingsRange[0] && index <= siblingsRange[1];
  };

  const isChildRangeActive = (childSteps) => {
    return childSteps.some((siblingsIndex) => completedSteps.includes(siblingsIndex));
  };

  const shouldShowChild = (step, index) => {
    if (!step.isChild) return false;
    if (
      step.parentIndex === activeIndex ||
      isIndexInParentRange(step.siblingsRange, activeIndex) ||
      completedSteps.includes(step.parentIndex) ||
      isChildRangeActive(step.siblingsRange)
    )
      return true;
    return false;
  };

  const onActiveIndexHandler = (index) => {
    setActiveIndex(index);
  };

  const renderTextStep = (index, state) => {
    const textStep = textSteps.find((step) => step.index === index);
    if (textStep) {
      return <Step key={`textStep${index}`} text={textStep.text} state={state} />;
    }
  };

  const renderSteps = () => {
    const stepsToRender = allSteps.map((step, index) => {
      const stepProps = {
        position: getStepPosition(index),
        state: getStepState(index, step),
        isActive: index === activeIndex,
        showChild: shouldShowChild(step, index),
      };

      const textStepState = activeIndex < index ? 'pending' : 'completed';

      return (
        <>
          {renderTextStep(index, textStepState)}
          <Box
            key={`container${index}`}
            onClick={() => onActiveIndexHandler(index)}
            className={classes.clickableStep}
          >
            <Step key={index} {...step} {...stepProps} />
          </Box>
        </>
      );
    });
    return stepsToRender;
  };

  useEffect(() => {
    if (autocompleteOnNext) {
      setCompletedSteps([...new Set([...completedSteps, activeIndex - 1])]);
    }
    if (activeIndex !== activeIndexProp) {
      setActiveIndex(activeIndexProp);
    }
  }, [activeIndexProp]);

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
