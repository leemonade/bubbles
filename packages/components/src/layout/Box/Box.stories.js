import React from 'react';
import { Box, BOX_DEFAULT_PROPS } from './Box';
import { Text } from '../../typography';
import mdx from './Box.mdx';

export default {
  title: 'BB1/Box',
  parameters: {
    component: Box,
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

const Template = ({ children, ...props }) => {
  return (
    <Box
      {...props}
      sx={(theme) => ({
        backgroundColor: theme.colors.interactive01h,
        cursor: 'pointer',
      })}
    >
      <Text color="primary">Box</Text>
    </Box>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
  ...BOX_DEFAULT_PROPS,
  padding: 3,
};
