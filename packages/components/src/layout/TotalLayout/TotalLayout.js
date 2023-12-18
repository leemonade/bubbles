import React from 'react';
import { isFunction } from 'lodash';
import { useFormContext } from 'react-hook-form';
import { TotalLayoutContainer } from './TotalLayoutContainer/TotalLayoutContainer';
import Footer from './TotalLayoutFooter';
import Body from './TotalLayoutBody/TotalLayoutBody';
import { TotalLayoutStyles } from './TotalLayout.styles';
import { TOTAL_LAYOUT_DEFAULT_PROPS, TOTAL_LAYOUT_PROP_TYPES } from './TotalLayout.constants';

const useTotalLayout = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completedSteps, setCompletedSteps] = React.useState([]);
  const [stepsInfo, setStepsInfo] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const formIsDirty = React.useRef(false);
  return {
    activeStep,
    setActiveStep,
    completedSteps,
    setCompletedSteps,
    stepsInfo,
    setStepsInfo,
    formIsDirty,
    isLoading,
    setIsLoading,
  };
};

const TotalLayout = ({
  Header,
  showStepper,
  initialStepsInfo,
  activeStep = 0,
  setActiveStep = () => {},
  completedSteps = [],
  setCompletedSteps = () => {},
  minStepNumberForDraftSave,
  onSave,
  footerActionsLabels,
  footerFinalActions,
  stepsInfo,
  setStepsInfo,
  formIsDirty,
  isLoading,
  setIsLoading,
}) => {
  const form = useFormContext();
  const bodyRef = React.useRef();
  const [lastValidStep, setLastValidStep] = React.useState(false);
  const footerLeftOffset = showStepper && 192 + 16; // Stepper plus margin (16) : margin
  const { classes } = TotalLayoutStyles({}, { name: 'TotalLayout' });

  const Steps = React.useMemo(() => initialStepsInfo.map((step) => step.stepComponent), []);
  const totalSteps = Steps.length;

  // Get relevant info from initialStepsInfo when first rendering for further manipulation
  React.useEffect(() => {
    setStepsInfo(
      initialStepsInfo.map(({ validationSchema, stepComponent, ...props }) => ({ ...props })),
    );
  }, []);

  // Find the last valid step
  React.useEffect(() => {
    const lastValidStepIndex = stepsInfo.reduce(
      (lastIndex, step, index) => (step.showStep ? index : lastIndex),
      -1,
    );
    setLastValidStep(lastValidStepIndex);
  }, [stepsInfo, activeStep]);

  // Set and validate active step
  const getNextValidStep = (index) => {
    while (index < totalSteps) {
      if (stepsInfo[index].showStep) {
        return index;
      }
      index += 1;
    }
    return index - 1;
  };

  const getPreviousValidStep = (index) => {
    while (index >= 0) {
      if (stepsInfo[index].showStep) {
        return index;
      }
      index -= 1;
    }
    return index;
  };

  const handleNext = async () => {
    formIsDirty.current =
      formIsDirty.current || Object.keys(form.formState.touchedFields).length > 0;
    setCompletedSteps((prevCompletedSteps) => [...prevCompletedSteps, activeStep]);

    // If the next step has an onNext method, call it
    const nextStep = getNextValidStep(activeStep + 1);
    if (isFunction(stepsInfo[nextStep].onNext)) {
      setIsLoading(true);
      await stepsInfo[nextStep].onNext(form);
      setIsLoading(false);
    }

    setActiveStep(nextStep);
    window.scrollTo(0, 0, { behavior: 'smooth' });
  };
  const handlePrev = async () => {
    formIsDirty.current =
      formIsDirty.current || Object.keys(form.formState.touchedFields).length > 0;
    const isValidStep = await form.trigger();
    if (!isValidStep && completedSteps.includes(activeStep)) {
      setCompletedSteps((prevCompletedSteps) =>
        prevCompletedSteps.filter((step) => step !== activeStep),
      );
    }

    setActiveStep((prevActiveStep) => getPreviousValidStep(prevActiveStep - 1));
    window.scrollTo(0, 0, { behavior: 'smooth' });
  };
  const validateAndAct = async (action, ...actionArgs) => {
    const isValidStep = await form.trigger();
    if (isValidStep) {
      await action(...actionArgs);
    }
  };

  // Set final actions to be validated before execution
  const finalActions = [];
  if (footerFinalActions?.length) {
    footerFinalActions.forEach(({ label, action }) => {
      finalActions.push({ label, onClick: () => validateAndAct(action) });
    });
  }

  return (
    <TotalLayoutContainer
      scrollRef={bodyRef}
      Header={Header}
      Footer={
        <Footer
          leftOffset={footerLeftOffset}
          activeStep={activeStep}
          onBack={handlePrev}
          scrollRef={bodyRef}
          onNext={() => validateAndAct(handleNext)}
          finalActions={finalActions}
          footerActionsLabels={footerActionsLabels}
          minStepNumberForDraftSave={minStepNumberForDraftSave}
          onSave={() => validateAndAct(onSave)}
          isLastStep={lastValidStep === activeStep}
          isLoading={isLoading}
        />
      }
    >
      <Body
        showStepper={showStepper}
        stepsInfo={stepsInfo}
        activeStep={activeStep}
        scrollRef={bodyRef}
        completedSteps={completedSteps}
        lastValidStep={lastValidStep}
      >
        {Steps[activeStep]}
      </Body>
    </TotalLayoutContainer>
  );
};

TotalLayout.defaultProps = TOTAL_LAYOUT_DEFAULT_PROPS;
TotalLayout.propTypes = TOTAL_LAYOUT_PROP_TYPES;

export { TotalLayout, useTotalLayout };

/*
TODO:
- Tidy: una carpeta para cada componente con sus constantes y estilos, etc.
- Al final: P r o p s   d e    t o d o
*/
