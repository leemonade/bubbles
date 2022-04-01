import React from 'react';
import { Box } from '@mantine/core';
import { Step } from './Step';
import { STEP_DEFAULT_PROPS } from './Step.constants';
import mdx from './Step.mdx';

export default {
  title: 'Atoms/Navigation/Step',
  parameters: {
    component: Step,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {},
};

const Template = ({ ...props }) => {
  return (
    <Box>
      {/* <Box>
        <Step {...props} position={'start'} />
        <Step {...props} />
        <Step {...props} position={'end'} />
      </Box> */}
      <Box>
        <Step {...props} state={'current'} position={'start'} />
        <Step {...props} state={'current'} />
        <Step {...props} state={'current'} position={'end'} />
      </Box>
      {/* <Box>
        <Step
          {...props}
          state={'completed'}
          position={'start'}
          subSteps={[
            { label: 'Child 1', badge: 'Badge of child 1' },
            { label: 'Child 2' },
            { label: 'Child 3' },
          ]}
        />
        <Step {...props} state={'completed'} />
        <Step {...props} state={'completed'} position={'end'} />
      </Box>
      <Box>
        <Step {...props} state={'pending'} position={'start'} />
        <Step {...props} state={'pending'} />
        <Step {...props} state={'pending'} position={'end'} />
      </Box>
      <Box>
        <Step {...props} state={'OK'} position={'start'} />
        <Step {...props} state={'OK'} />
        <Step {...props} state={'OK'} position={'end'} />
      </Box>
      <Box>
        <Step {...props} state={'KO'} position={'start'} />
        <Step {...props} state={'KO'} />
        <Step {...props} state={'KO'} position={'end'} />
      </Box>
      <Box>
        <Step {...props} state={'OK'} position={'start'} />
        <Step {...props} state={'completed'} />
        <Step {...props} state={'current'} />
        <Step {...props} position={'end'} />
      </Box> */}
    </Box>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  ...STEP_DEFAULT_PROPS,
  label: 'Step label',
  badge: 'Step badge',
};
