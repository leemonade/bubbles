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
  const { classes } = TotalLayoutStyles({}, { name: 'TotalLayout' });
  const totalSteps = Steps.length;
  const footerLeftOffset = showStepper ? 192 + 16 : 16; // Stepper plus margin (16) : margin

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

  const finishActions = [
    { label: 'Publicar', onClick: () => validateAndAct(onPublish, false) },
    { label: 'Publicar y Assignar', onClick: () => validateAndAct(onPublish, false) },
    { label: 'Vista previa', onClick: () => validateAndAct(onPreview) },
  ];

  return (
    <Box id="TotalLayout" style={{ height: '100vh' }}>
      <Stack fullWidth fullHeight direction="column">
        {/* Header */}
        <Box noFlex>
          <Header style={{ position: 'fixed', top: 0, height: '72px' }} />
        </Box>
        {/* Body */}
        <Box style={{ overflow: 'hidden' }}>
          <Body showStepper={showStepper} stepsInfo={stepsInfo} activeStep={activeStep}>
            {Steps[activeStep]}
          </Body>
        </Box>
        {/* Footer */}
        <Box style={{ backgroundColor: '#f8f9fb' }} noFlex>
          <Footer
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
TODO:
- Zod y Zod resolver libraries para validación.
- cambiar titles por text para el tamaño -> BODY, no -> Steps container
- Sombras del Header y Footer
- Vertical Stepper! Crear un TotalLayoutStepper a partir del vertical
- Tidy: una carpeta para cada componente con sus constants etc.
- La forma no debería poder modificarse al ir hacia atrás... ?
- Al final: P r o p s   d e    t o d o

? TO ASK:
- Al estar usar el context container para los títulos, no tenemos control sobre su tamaño. Hay cosillas
  que no encajan con el figma en cuanto a la jerarquía de los títulos.
*/
