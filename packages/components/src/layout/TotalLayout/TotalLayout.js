import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Box } from '@mantine/core';
import { Stack } from '../Stack';
import Footer from './TotalLayoutFooter';
import Body from './TotalLayoutBody/TotalLayoutBody';
import { TotalLayoutStyles } from './TotalLayout.styles';
import { TOTAL_LAYOUT_DEFAULT_PROPS, TOTAL_LAYOUT_PROP_TYPES } from './TotalLayout.constants';

const useTotalLayout = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completedSteps, setCompletedSteps] = React.useState([]);
  const [stepsInfo, setStepsInfo] = React.useState([]);
  const formIsDirty = React.useRef(false);
  return {
    activeStep,
    setActiveStep,
    completedSteps,
    setCompletedSteps,
    stepsInfo,
    setStepsInfo,
    formIsDirty,
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
}) => {
  const form = useFormContext();
  const [topScroll, setTopScroll] = React.useState(false);
  const [showFooterBorder, setShowFooterBorder] = React.useState(false);
  const [lastValidStep, setLastValidStep] = React.useState(false);

  const footerLeftOffset = showStepper && 192 + 16; // Stepper plus margin (16) : margin
  const bodyRef = React.useRef();
  const { classes } = TotalLayoutStyles({ topScroll }, { name: 'TotalLayout' });

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

  // Define scroll and window resizing behavior
  const handleScroll = () => {
    const div = bodyRef.current;
    if (div) {
      const { scrollTop, scrollHeight, clientHeight } = div;
      if (scrollTop > 5 && !topScroll) setTopScroll(true);
      else if (scrollTop === 0 && topScroll) setTopScroll(false);

      const atTheBottom = scrollHeight - scrollTop === clientHeight;
      const isScrollable = scrollHeight > clientHeight;
      if (isScrollable && !atTheBottom && !showFooterBorder) setShowFooterBorder(true);
      else if ((!isScrollable && showFooterBorder) || (atTheBottom && showFooterBorder))
        setShowFooterBorder(false);
    }
  };
  React.useEffect(() => {
    const body = bodyRef.current;
    if (body) {
      handleScroll();
      body.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleScroll);
      return () => {
        body.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleScroll);
      };
    }
    return () => {};
  }, [bodyRef.current, handleScroll]);

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
    setActiveStep((prevActiveStep) => getNextValidStep(prevActiveStep + 1));
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
    <Box id="TotalLayout" style={{ height: '100vh' }}>
      <Stack fullWidth fullHeight direction="column">
        <Box className={classes.header} noFlex>
          <Header style={{ position: 'fixed', top: 0, height: '72px' }} />
        </Box>
        <Box style={{ overflow: 'hidden' }}>
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
        </Box>
        <Box className={classes.footerContainer} noFlex>
          <Footer
            leftOffset={footerLeftOffset}
            activeStep={activeStep}
            showFooterBorder={showFooterBorder}
            onBack={handlePrev}
            onNext={() => validateAndAct(handleNext)}
            finalActions={finalActions}
            footerActionsLabels={footerActionsLabels}
            minStepNumberForDraftSave={minStepNumberForDraftSave}
            onSave={() => validateAndAct(onSave)}
            isLastStep={lastValidStep === activeStep}
            isLoading={isLoading}
          />
        </Box>
      </Stack>
    </Box>
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
