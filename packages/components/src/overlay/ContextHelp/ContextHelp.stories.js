import React from 'react';
import { Box } from '@mantine/core';
import { ContextHelp } from './ContextHelp';
import { CONTEXT_HELP_DEFAULT_PROPS } from './ContextHelp.constants';
import mdx from './ContextHelp.mdx';
import { Button } from '../../form';

export default {
  title: 'Atoms/Overlay/ContextHelp',
  parameters: {
    component: ContextHelp,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    onLink: { action: 'onLink' },
    // myBooleanProp: { control: { type: 'boolean' } },
    // mySelectProp: { options: ['Hello', 'World'], control: { type: 'select' } },
  },
};

const Template = ({ ...props }) => {
  return (
    <Box style={{ display: 'flex', justifyContent: 'center' }}>
      <ContextHelp {...props} target={<Button>Hover me</Button>} />
    </Box>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
  ...CONTEXT_HELP_DEFAULT_PROPS,
  title: 'Title',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Incididunt ut labore et dolore magna aliqua. ',
  link: ' This is a link',
};
