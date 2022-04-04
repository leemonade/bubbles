import React from 'react';
import { Box } from '../../layout';
import { Step, StepperButton } from './';
import { VerticalStepperStyles } from './VerticalStepper.styles';
import {
  VERTICAL_STEPPER_DEFAULT_PROPS,
  VERTICAL_STEPPER_PROP_TYPES,
} from './VerticalStepper.constants';
import { Calification } from '../../informative/';

const VerticalStepper = ({
  data,
  currentStep,
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
  if (currentStep > data.length - 1) {
    currentStep = data.length - 1;
  }
  // const [currentStep, setCurrentStep] = useState(current || 0);
  // const [currentSubstep, setCurrentSubstep] = useState(0);

  // const handleNextStep = (step) => {
  //   if (step > data.length - 1) step--;
  //   setCurrentSubstep(0);
  //   setCurrentStep(step);
  //   isFunction(onNext) && onNext(step);
  // };

  // const handlePrevStep = (step) => {
  //   if (step < 0) step = 0;
  //   setCurrentStep(step);
  //   isFunction(onPrevious) && onPrevious(step);
  // };

  // const handleNextChild = (subSteps) => {
  //   if (currentSubstep + 1 > subSteps) {
  //     handleNextStep(currentStep + 1);
  //     return;
  //   }
  //   setCurrentSubstep(currentSubstep + 1);
  // };

  // const handlePrevChild = () => {
  //   if (currentSubstep === 0) {
  //     handlePrevStep(currentStep - 1);
  //     return;
  //   }
  //   setCurrentSubstep(currentSubstep - 1);
  // };

  // const getStepsContent = () => {
  //   const stepsContent = [];
  //   const subStepsContent = [];
  //   data.forEach((step, index) => {
  //     stepsContent.push(
  //       cloneElement(step.content || <></>, {
  //         onNext: () =>
  //           step.subSteps ? handleNextChild(step.subSteps.length) : handleNextStep(index + 1),
  //         onPrevious: () => (step.subSteps ? handlePrevChild() : handlePrevStep(index - 1)),
  //       })
  //     );
  //     if (step.subSteps) {
  //       subStepsContent.push({
  //         key: index,
  //         subSteps: [
  //           ...step.subSteps.map((subStep) => {
  //             const propsToInject = {
  //               // ...subStep.content.props,
  //               onNext: () => handleNextChild(step.subSteps.length),
  //               onPrevious: () => handlePrevChild(),
  //             };
  //             return cloneElement(subStep.content || <></>, {
  //               onNext: () => handleNextChild(step.subSteps.length),
  //               onPrevious: () => handlePrevChild(),
  //             });
  //           }),
  //         ],
  //       });
  //     }
  //   });
  //   return { stepsContent, subStepsContent };
  // };

  // const renderStep = () => {
  //   const { stepsContent, subStepsContent } = getStepsContent();

  //   const currentStepWithChild = subStepsContent.find((step) => step.key === currentStep);
  //   if (currentStepWithChild && currentSubstep !== 0) {
  //     return currentStepWithChild.subSteps[currentSubstep - 1];
  //   }
  //   return stepsContent[currentStep];
  // };

  const steps = data.map((step, index) => {
    if (step?.allCompleted) return;
    let position = 'between';
    let state = 'pending';
    let isActive = false;

    if (index === 0) position = 'start';
    if (index === data.length - 2) position = 'end';

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

  const { classes, cx } = VerticalStepperStyles(
    { rootStyles, stepColumnStyles },
    { name: 'VerticalStepper' }
  );
  return (
    <Box className={cx(classes.root, rootClassName)}>
      <Box className={cx(classes.stepColumn, stepColumnClassname)}>
        {steps}
        {data[currentStep].allCompleted && <Calification {...calificationProps} />}
      </Box>
      {/* <Box className={cx(classes.currentStep, currentStepClassname)}>{renderStep()}</Box> */}
    </Box>
  );
};

VerticalStepper.defaultProps = VERTICAL_STEPPER_DEFAULT_PROPS;
VerticalStepper.propTypes = VERTICAL_STEPPER_PROP_TYPES;

export { VerticalStepper };
