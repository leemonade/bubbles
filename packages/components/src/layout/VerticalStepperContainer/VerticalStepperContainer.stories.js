import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { VerticalStepperContainer } from './VerticalStepperContainer';
import { VERTICAL_STEPPER_CONTAINER_DEFAULT_PROPS } from './VerticalStepperContainer.constants';
import mdx from './VerticalStepperContainer.mdx';
import { SIMPLE_DATA as STEPPER_DATA } from '../../navigation/VerticalStepper/mock/data';
import { Box } from '../Box';
import { Stack } from '../Stack';
import { ContextContainer } from '../ContextContainer';
import { Button } from '../../form';
import { Paragraph } from '../../typography';

export default {
  title: 'Atoms/Layout/VerticalStepperContainer',
  parameters: {
    component: VerticalStepperContainer,
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
      <VerticalStepperContainer {...props} data={data} currentStep={activeStep}>
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
      </VerticalStepperContainer>
    </Box>
  );
};

Template.propTypes = {
  data: PropTypes.array,
  currentStep: PropTypes.number,
};

export const Playground = Template.bind({});

Playground.args = {
  ...VERTICAL_STEPPER_CONTAINER_DEFAULT_PROPS,
  data: STEPPER_DATA,
};
