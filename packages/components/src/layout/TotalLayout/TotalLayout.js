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
  return { activeStep, setActiveStep };
};

const TotalLayout = ({
  Header,
  showStepper,
  Steps,
  stepsInfo,
  activeStep = 0,
  setActiveStep = () => {},
  stepNumberForDraftSave,
  onSave,
  footerActionsLabels,
  footerFinalActions,
}) => {
  const form = useFormContext();
  const [topScroll, setTopScroll] = React.useState(false);
  const [showFooterShadow, setShowFooterShadow] = React.useState(false);

  const totalSteps = Steps.length;
  const footerLeftOffset = showStepper && 192 + 16; // Stepper plus margin (16) : margin
  const bodyRef = React.useRef();
  const { classes } = TotalLayoutStyles({ topScroll }, { name: 'TotalLayout' });

  // Define scroll and window resizing behavior
  const handleScroll = () => {
    const div = bodyRef.current;
    if (div) {
      const { scrollTop, scrollHeight, clientHeight } = div;
      if (scrollTop > 5 && !topScroll) setTopScroll(true);
      else if (scrollTop === 0 && topScroll) setTopScroll(false);

      const atTheBottom = scrollHeight - scrollTop === clientHeight;
      const isScrollable = scrollHeight > clientHeight;
      if (isScrollable && !atTheBottom && !showFooterShadow) setShowFooterShadow(true);
      else if ((!isScrollable && showFooterShadow) || (atTheBottom && showFooterShadow))
        setShowFooterShadow(false);
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
  const handleNext = async () => {
    setActiveStep(activeStep + 1);
    window.scrollTo(0, 0, { behavior: 'smooth' });
  };
  const handlePrev = () => {
    setActiveStep(activeStep - 1);
    window.scrollTo(0, 0, { behavior: 'smooth' });
  };
  const validateAndAct = async (action, ...actionArgs) => {
    const isValidStep = await form.trigger();
    if (isValidStep) {
      await action(...actionArgs);
    }
  };

  // Set final actions to pass validation before execution
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
          >
            {Steps[activeStep]}
          </Body>
        </Box>
        <Box className={classes.footerContainer} noFlex>
          <Footer
            leftOffset={footerLeftOffset}
            totalSteps={totalSteps}
            activeStep={activeStep}
            showFooterShadow={showFooterShadow}
            onBack={handlePrev}
            onNext={() => validateAndAct(handleNext)}
            finalActions={finalActions}
            footerActionsLabels={footerActionsLabels}
            stepNumberForDraftSave={stepNumberForDraftSave}
            onSave={() => validateAndAct(onSave)}
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
DONE:
- arreglar footer en pequeñito
- save draft es dinámico. Pasar el stepNumberForDraftSave
- Pasar labels dinámicamente -> para los botones de footer
TODO:
- Vertical Stepper! Crear un TotalLayoutStepper a partir del VerticalStepper
- aplicar efecto a las sombras del header
- Tidy: una carpeta para cada componente con sus constantes y estilos, etc.
- Al final: P r o p s   d e    t o d o
*/
