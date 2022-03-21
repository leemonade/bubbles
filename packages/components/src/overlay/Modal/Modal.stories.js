import React from 'react';
import { Box } from '@mantine/core';
import { Modal } from './Modal';
import { MODAL_DEFAULT_PROPS } from './Modal.constants';
import mdx from './Modal.mdx';

export default {
  title: 'Molecules/Overlay/Modal',
  parameters: {
    component: Modal,
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

const Template = ({ ...props }) => {
  return <Modal {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
  ...MODAL_DEFAULT_PROPS,
};