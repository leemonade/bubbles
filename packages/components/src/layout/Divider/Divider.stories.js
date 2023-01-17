import React from 'react';
import { Box } from '../Box';
import { Stack } from '../Stack';
import { Text } from '../../typography';
import { Divider, DIVIDER_DEFAULT_PROPS, DIVIDER_ORIENTATIONS } from './Divider';
import mdx from './Divider.mdx';

export default {
  title: 'BB2/Divider',
  parameters: {
    component: Divider,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    orientation: { options: DIVIDER_ORIENTATIONS, control: { type: 'select' } },
  },
};

const Template = ({ ...props }) => {
  return (
    <Stack spacing={5} fullWidth>
      <Box>
        <Text>Hola</Text>
      </Box>
      <Divider {...props} />
      <Box>
        <Text>Mundo</Text>
      </Box>
    </Stack>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  ...DIVIDER_DEFAULT_PROPS,
};
