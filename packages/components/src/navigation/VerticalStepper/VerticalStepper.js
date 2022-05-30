import React, { useEffect, useRef, useState } from 'react';
import { isNil } from 'lodash';
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
  visitedSteps: visitedStepsProp,
  autocompleteOnNext,
  calificationProps,
  onChangeActiveIndex,
  ...props
}) => {
  const [completedSteps, setCompletedSteps] = useState(completedStepsProp || []);
  const [visitedSteps, setVisitedSteps] = useState(visitedStepsProp || []);
  const [activeIndex, setActiveIndex] = useState(currentStep);
  const textSteps = [];
  const isMounted = useRef(false);

  const getAllStepsPrevious = (index) => {
    let previousSteps = [];
    for (let i = 0; i < index; i++) {
      previousSteps.push(i);
    }
    return previousSteps;
  };

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

  const getIsChildActive = (step) => {
    if (!step.childRange) return;
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

  const getTextStepVisited = (textStep) => {
    if (visitedSteps.includes(textStep.index - 1)) return true;
    return false;
  };

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
  };

  const onActiveIndexHandler = (index) => {
    if (!visitedSteps.includes(index) && !completedSteps.includes(index)) return;

    if (isNil(currentStep)) {
      setActiveIndex(index);
    }
    onChangeActiveIndex(index);
  };

  const renderSteps = () => {
    const stepsToRender = allSteps.map((step, index) => {
      const isChildActive = getIsChildActive(step);
      const stepProps = {
        position: getStepPosition(index),
        state: getStepState(step, index),
        isActive: index === activeIndex,
        showChild: shouldShowChild(step),
        isVisited: isChildActive || visitedSteps.includes(index),
        isChildActive: isChildActive,
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
