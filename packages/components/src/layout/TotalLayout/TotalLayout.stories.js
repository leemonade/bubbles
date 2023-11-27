import React from 'react';
import { Box } from '../Box';
import { ContextContainer } from '../ContextContainer';
import { Button } from '../../form/Button';
import { DropdownButton } from '../../form/DropdownButton';
import { TotalLayout } from './TotalLayout';
import { TOTAL_LAYOUT_DEFAULT_PROPS } from './TotalLayout.constants';
import mdx from './TotalLayout.mdx';
import { Stack } from '../Stack';

export default {
  title: 'Molecules/Layout/TotalLayout',
  parameters: {
    component: TotalLayout,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    // myBooleanProp: { control: { type: 'boolean' } },
    // mySelectProp: { options: ['Hello', 'World'], control: { type: 'select' } },
  },
};

const Step = ({ name }) => (
  <ContextContainer padded title={name}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </ContextContainer>
);

const Header = () => <Box>Header</Box>;
const Footer = ({
  showStepper,
  totalSteps,
  activeStep,
  onBack,
  onNext,
  onSave,
  onFinishActions,
}) => (
  <Stack justifyContent="center" fullWidth style={{ backgroundColor: '#D9D9D9' }}>
    <Box style={{ width: 928, backgroundColor: 'white' }}>
      <Stack fullWidth style={{ height: 72, padding: '16px 24px' }}>
        {activeStep > 0 && (
          <Box noFlex>
            <Button variant="outline" onClick={onBack}>
              Anterior
            </Button>
          </Box>
        )}
        <div></div>
        <Stack direction="row" spacing={2} noFlex>
          <Button variant="link" onClick={onSave}>
            Guardar borrador
          </Button>
          {activeStep < totalSteps - 1 ? (
            <Button onClick={onNext}>Siguiente</Button>
          ) : (
            <DropdownButton data={onFinishActions}>Finalizar</DropdownButton>
          )}
        </Stack>
      </Stack>
    </Box>
  </Stack>
);

const Body = ({ showStepper, children, ...props }) => (
  <Stack justifyContent="center" fullWidth fullHeight style={{ backgroundColor: '#D9D9D9' }}>
    {showStepper && <Box style={{ width: 192, backgroundColor: 'blue' }}>Soy un Stepper</Box>}
    <Box style={{ width: 928, backgroundColor: 'red' }}>{children}</Box>
  </Stack>
);

const Template = ({ ...props }) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const Steps = React.useMemo(() =>
    [...Array(4)].map((_, i) => <Step key={i} name={`Step ${i}`} />, []),
  );
  const totalSteps = Steps.length;

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    window.scrollTo(0, 0, { behavior: 'smooth' });
  };

  const handlePrev = () => {
    setActiveStep(activeStep - 1);
    window.scrollTo(0, 0, { behavior: 'smooth' });
  };

  return (
    <Box style={{ height: '100vh', margin: -16 }}>
      <Stack style={{ backgroundColor: 'red' }} fullWidth fullHeight direction="column">
        {/* Header */}
        <Box style={{ backgroundColor: 'blue' }} noFlex>
          <Header />
        </Box>
        {/* Body */}
        <Box style={{ backgroundColor: 'white', overflow: 'auto' }}>
          <Stack
            justifyContent="center"
            fullWidth
            fullHeight
            style={{ backgroundColor: '#D9D9D9' }}
          >
            {/* Stepper */}
            <Box style={{ width: 192, backgroundColor: 'blue' }}>Soy un Stepper</Box>
            {/* Content */}
            <Box style={{ width: 928, backgroundColor: 'red' }}>
              <Stack direction="column" fullHeight>
                {/* Steps */}
                <Stack fullHeight>{Steps[activeStep]}</Stack>
                <Box style={{ backgroundColor: 'white' }} noFlex>
                  {/* Footer */}
                  <Footer
                    totalSteps={totalSteps}
                    activeStep={activeStep}
                    onBack={handlePrev}
                    onNext={handleNext}
                    onSave={() => console.log('OnSave clicked')}
                    onFinishActions={[
                      { label: 'Item 1', onClick: () => console.log('Item 1 clicked') },
                      { label: 'Item 2', onClick: () => console.log('Item 2 clicked') },
                      { label: 'Item 3', onClick: () => console.log('Item 3 clicked') },
                    ]}
                  />
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
  ...TOTAL_LAYOUT_DEFAULT_PROPS,
};
