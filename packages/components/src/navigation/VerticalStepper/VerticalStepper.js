import React, { useEffect, useRef, useState } from 'react';
import { isNil } from 'lodash';
import { Box } from '../../layout/Box';
import { Calification } from '../../informative/Calification';
import { Step } from './Step/Step';
import { VerticalStepperStyles } from './VerticalStepper.styles';
import {
  VERTICAL_STEPPER_DEFAULT_PROPS,
  VERTICAL_STEPPER_PROP_TYPES,
} from './VerticalStepper.constants';

const VerticalStepper = ({
  data,
  currentStep,
  completedSteps: completedStepsProp,
  visitedSteps: visitedStepsProp,
  autocompleteOnNext,
  calificationProps,
  onChangeActiveIndex,
}) => {
  const [completedSteps, setCompletedSteps] = useState(completedStepsProp || []);
  const [visitedSteps, setVisitedSteps] = useState(visitedStepsProp || []);
  const [activeIndex, setActiveIndex] = useState(currentStep);
  const textSteps = [];
  const isMounted = useRef(false);

  const getAllStepsPrevious = (index) => {
    const previousSteps = [];
    for (let i = 0; i < index; i++) {
      previousSteps.push(i);
    }
    return previousSteps;
  };

  const getSteps = (stepData) => {
    const steps = [];
    const stepsFiltered = stepData.filter((step, index) => {
      if (step.text) {
        textSteps.push({ text: step.text, index });
        return false;
      }
      return true;
    });
    stepsFiltered.forEach((step, index) => {
      steps.push(step);
      if (step.childSteps) {
        step.childRange = [index + 1, index + step.childSteps.length];
        steps.push(
          ...step.childSteps.map((childStep) => {
            childStep.isChild = true;
            childStep.parentIndex = index;
            childStep.siblingsRange = step.childRange;
            return childStep;
          }),
        );
      }
    });
    return steps;
  };

  const allSteps = getSteps(data);
  if (activeIndex > allSteps.length) {
    if (isNil(currentStep)) {
      setActiveIndex(allSteps.length);
    }
    onChangeActiveIndex(allSteps.length);
  }
  if (activeIndex < 0) {
    if (isNil(currentStep)) {
      setActiveIndex(0);
    }
    onChangeActiveIndex(0);
  }

  const getStepPosition = (index) => {
    if (index === 0) return 'start';
    if (index === allSteps.length - 1) return 'end';
    return 'between';
  };

  const activeIndexInRange = (stepRange) =>
    activeIndex >= stepRange[0] && activeIndex <= stepRange[1];

  const checkIfAllCompleted = (step, index) => {
    const allChildrenCompleted = step.childRange.every((childIndex) =>
      completedSteps.includes(childIndex),
    );
    return completedSteps.includes(index) && allChildrenCompleted;
  };

  const getIsChildActive = (step) => {
    if (!step.childRange) return null;
    return activeIndexInRange(step.childRange);
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

  const shouldShowChild = (step) =>
    step.isChild &&
    (step.parentIndex === activeIndex ||
      activeIndexInRange(step.siblingsRange) ||
      completedSteps.includes(step.parentIndex) ||
      step.siblingsRange.some((childIndex) => completedSteps.includes(childIndex)));

  const getTextStepVisited = (textStep) => visitedSteps.includes(textStep.index - 1);

  const renderTextStep = (index) => {
    const textStep = textSteps.find((step) => step.index === index);
    if (textStep) {
      return (
        <Step
          key={`textStep${index}`}
          text={textStep.text}
          isVisited={getTextStepVisited(textStep)}
        />
      );
    }

    return null;
  };

  const onActiveIndexHandler = (index) => {
    if (!visitedSteps.includes(index) && !completedSteps.includes(index)) return;

    if (isNil(currentStep)) {
      setActiveIndex(index);
    }
    onChangeActiveIndex(index);
  };

  const { classes, cx } = VerticalStepperStyles({}, { name: 'VerticalStepper' });

  const renderSteps = () =>
    allSteps.map((step, index) => {
      const isChildActive = getIsChildActive(step);
      const stepProps = {
        position: getStepPosition(index),
        state: getStepState(step, index),
        isActive: index === activeIndex,
        showChild: shouldShowChild(step),
        isVisited: isChildActive || visitedSteps.includes(index),
        isChildActive,
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

  useEffect(() => {
    if (!isMounted.current) return;
    setVisitedSteps([...new Set([...visitedSteps, activeIndex])]);
    if (activeIndex !== currentStep) {
      setActiveIndex(currentStep);
    }
  }, [currentStep]);

  useEffect(() => {
    setCompletedSteps([...new Set(completedStepsProp)]);
  }, [completedStepsProp]);

  useEffect(() => {
    const previousSteps = getAllStepsPrevious(currentStep);
    if (autocompleteOnNext) {
      setCompletedSteps([...new Set([...completedSteps, ...previousSteps])]);
      setVisitedSteps([...new Set([...visitedSteps, ...previousSteps])]);
    }
  }, [activeIndex]);

  useEffect(() => {
    if (!isMounted.current) return;
    if (autocompleteOnNext) return;
    const lastStepIndex = allSteps.findIndex((step) => !step.status && !step.isChild);
    const previousSteps = getAllStepsPrevious(lastStepIndex);
    setVisitedSteps([...new Set([...visitedSteps, ...previousSteps])]);
  }, [data]);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

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
