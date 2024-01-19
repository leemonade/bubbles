import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { PluginAssignmentsIcon } from '@bubbles-ui/icons/solid';
import { VerticalContainer } from './VerticalContainer';
import { VERTICAL_CONTAINER_DEFAULT_PROPS } from './VerticalContainer.constants';
import mdx from './VerticalContainer.mdx';
import { SIMPLE_DATA as STEPPER_DATA } from '../../navigation/VerticalStepper/mock/data';
import { Box } from '../Box';
import { Stack } from '../Stack';
import { ContextContainer } from '../ContextContainer';
import { Button } from '../../form/Button';
import { Paragraph } from '../../typography/Paragraph';
import {
  TotalLayoutFooterContainer,
  TotalLayoutHeader,
  TotalLayoutStepContainer,
} from '../TotalLayout';
import { TotalLayoutContainer } from '../TotalLayout/TotalLayoutContainer/TotalLayoutContainer';

export default {
  title: 'Atoms/Layout/VerticalStepperContainer',
  parameters: {
    component: VerticalContainer,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB/%F0%9F%8D%8B%F0%9F%92%A7-Bubbles-SD-v2?node-id=8215%3A104591',
    },
  },
  argTypes: {},
};

const Template = ({ data = [], currentStep, ...props }) => {
  const [activeStep, setActiveStep] = useState(currentStep || 0);

  const randomContent = useMemo(
    () => [...Array(data.length)].map(() => Math.floor(Math.random() * 10)),
    [data],
  );

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    window.scrollTo(0, 0, { behavior: 'smooth' });
  };

  const handlePrev = () => {
    setActiveStep(activeStep - 1);
    window.scrollTo(0, 0, { behavior: 'smooth' });
  };

  return (
    <Box style={{ margin: -16 }}>
      <VerticalContainer
        {...props}
        data={data}
        leftZone={<div>Toma prueba</div>}
        currentStep={activeStep}
      >
        {
          [...Array(data.length)].map((_, i) => (
            <Box key={`step-${i}`}>
              <ContextContainer title={`Step ${i + 1}`}>
                <Box>
                  {[...Array(randomContent[i])].map((__, j) => (
                    <Paragraph key={`p-${j}`}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                      eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                      in culpa qui officia deserunt mollit anim id est laborum
                    </Paragraph>
                  ))}
                </Box>
                <Box>
                  <Stack justifyContent="space-between" fullWidth>
                    {activeStep > 0 && (
                      <Button variant="outline" onClick={handlePrev}>
                        Previous
                      </Button>
                    )}
                    <Button onClick={handleNext}>Next</Button>
                  </Stack>
                </Box>
              </ContextContainer>
            </Box>
          ))[activeStep]
        }
      </VerticalContainer>
    </Box>
  );
};

Template.propTypes = {
  data: PropTypes.array,
  currentStep: PropTypes.number,
};

export const Playground = Template.bind({});

Playground.args = {
  ...VERTICAL_CONTAINER_DEFAULT_PROPS,
  data: STEPPER_DATA,
};

const TotalLayoutTemplate = ({ data = [], currentStep, ...props }) => {
  const [activeStep, setActiveStep] = useState(currentStep || 0);
  const scrollRef = React.useRef(null);

  const randomContent = useMemo(
    () => [...Array(data.length)].map(() => Math.floor(Math.random() * 10)),
    [data],
  );

  // Prepare Header. It is necesary to pass the setOpenCancelModal function to the header
  const handleOnCancel = () => {
    console.log('Redirecting after cancel');
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    window.scrollTo(0, 0, { behavior: 'smooth' });
  };

  const handlePrev = () => {
    setActiveStep(activeStep - 1);
    window.scrollTo(0, 0, { behavior: 'smooth' });
  };

  const buildHeader = () => (
    <TotalLayoutHeader
      title={'Nueva Tarea'}
      icon={<PluginAssignmentsIcon />}
      formTitlePlaceholder={'Título de la tarea'}
      onCancel={handleOnCancel}
    />
  );

  return (
    <Box style={{ margin: -16 }}>
      <TotalLayoutContainer scrollRef={scrollRef} Header={() => buildHeader()}>
        <VerticalContainer {...props} data={data} currentStep={activeStep} scrollRef={scrollRef}>
          {
            [...Array(data.length)].map((_, i) => (
              <TotalLayoutStepContainer
                key={`step-${i}`}
                stepName={`Step ${i + 1}`}
                Footer={
                  <TotalLayoutFooterContainer
                    noFlex
                    fixed
                    scrollRef={scrollRef}
                    leftZone={
                      <>
                        {activeStep > 0 && (
                          <Button variant="outline" onClick={handlePrev}>
                            Previous
                          </Button>
                        )}
                      </>
                    }
                    rightZone={<Button onClick={handleNext}>Next</Button>}
                  />
                }
              >
                <Box>
                  {[...Array(randomContent[i])].map((__, j) => (
                    <>
                      <Paragraph key={`p1-${j}`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                      </Paragraph>
                      <Paragraph key={`p2-${j}`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                      </Paragraph>
                    </>
                  ))}
                </Box>
              </TotalLayoutStepContainer>
            ))[activeStep]
          }
        </VerticalContainer>
      </TotalLayoutContainer>
    </Box>
  );
};

TotalLayoutTemplate.propTypes = {
  data: PropTypes.array,
  currentStep: PropTypes.number,
};

export const WithTotalLayout = TotalLayoutTemplate.bind({});

WithTotalLayout.args = {
  ...VERTICAL_CONTAINER_DEFAULT_PROPS,
  data: STEPPER_DATA,
};
