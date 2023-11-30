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
  onSave,
  onPublish,
  onPreview,
  activeStep = 0,
  setActiveStep = () => {},
}) => {
  const { trigger } = useFormContext();
  const [topScroll, setTopScroll] = React.useState(false);
  const [showFooterShadow, setShowFooterShadow] = React.useState(false);

  const totalSteps = Steps.length;
  const footerLeftOffset = showStepper ? 192 + 16 : 16; // Stepper plus margin (16) : margin
  const bodyRef = React.useRef();
  const { classes } = TotalLayoutStyles({ topScroll }, { name: 'TotalLayout' });
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

  React.useEffect(() => {
    console.log('💣💥 RENDER!!!');
  });

  // Sets and validate active step
  const handleNext = async () => {
    setActiveStep(activeStep + 1);
    window.scrollTo(0, 0, { behavior: 'smooth' });
  };
  const handlePrev = () => {
    setActiveStep(activeStep - 1);
    window.scrollTo(0, 0, { behavior: 'smooth' });
  };
  const validateAndAct = async (action, ...actionArgs) => {
    // const isValidStep = await trigger(stepsInfo[activeStep].fields);
    const isValidStep = await trigger();
    if (isValidStep) {
      await action(...actionArgs);
    }
  };

  // Defines final actions
  const finishActions = [
    { label: 'Publicar', onClick: () => validateAndAct(onPublish, false) },
    { label: 'Publicar y Assignar', onClick: () => validateAndAct(onPublish, false) },
    { label: 'Vista previa', onClick: () => validateAndAct(onPreview) },
  ];

  return (
    <Box id="TotalLayout" style={{ height: '100vh' }}>
      <Stack fullWidth fullHeight direction="column">
        {/* Header */}
        <Box className={classes.header} noFlex>
          <Header style={{ position: 'fixed', top: 0, height: '72px' }} />
        </Box>
        {/* Body */}
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
        {/* Footer */}
        <Box className={classes.footerContainer} noFlex>
          <Footer
            showFooterShadow={showFooterShadow}
            leftOffset={footerLeftOffset}
            totalSteps={totalSteps}
            onNext={() => validateAndAct(handleNext)}
            onBack={handlePrev}
            activeStep={activeStep}
            onSave={() => validateAndAct(onSave)}
            onFinishActions={finishActions}
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
- Añadir un formulario (master form) en los steps, de tal forma que el
- Validación por fases. Con el fin de no poder dar click on next si no se completa el step.
- Mostrar mensajitos de error cuando la validación de un step falla
- StepContainer Exportar a leemons -> en lugar de export default como constante y añadir al index
- TotalLayoutHeader para exportar -> en lugar de export default como constante y añadir al index
- Hacer pull de develop!!
- cambiar titles por text para el tamaño -> Header
- Header multifuncional?
- Zod y Zod resolver libraries para validación.
- Sombras del Header y Footer
TODO:
- arreglar footer en pequeñito
- aplicar efectito a las sombras del header y footer
- cambiar titles por text para el tamaño -> BODY, no -> Steps container
- Vertical Stepper! Crear un TotalLayoutStepper a partir del vertical
- Tidy: una carpeta para cada componente con sus constants etc.
- La forma no debería poder modificarse al ir hacia atrás... ?
- Al final: P r o p s   d e    t o d o

? TO ASK:
- Al estar usar el context container para los títulos, no tenemos control sobre su tamaño. Hay cosillas
  que no encajan con el figma en cuanto a la jerarquía de los títulos.
*/
