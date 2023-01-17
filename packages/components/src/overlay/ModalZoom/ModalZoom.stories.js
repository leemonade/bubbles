import React from 'react';
import { ModalZoom } from './ModalZoom';
import { MODAL_ZOOM_DEFAULT_PROPS } from './ModalZoom.constants';
import mdx from './ModalZoom.mdx';

export default {
  title: 'BB1/ModalZoom',
  parameters: {
    component: ModalZoom,
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
  return (
    <ModalZoom {...props}>
      <img
        src="https://images.unsplash.com/photo-1627552245715-77d79bbf6fe2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=80"
        width="300"
      />
    </ModalZoom>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
  ...MODAL_ZOOM_DEFAULT_PROPS,
};
