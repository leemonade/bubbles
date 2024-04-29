import React from 'react';
import mdx from './ImageProfilePicker.mdx';
import ImageProfilePicker, { IMAGE_PROFILE_PICKER_VARIANTS } from './ImageProfilePicker';

export default {
  title: 'Organisms/Form/ImageProfilePicker',
  parameters: {
    component: ImageProfilePicker,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    onChange: { action: 'Value changed' },
    variant: {
      options: IMAGE_PROFILE_PICKER_VARIANTS,
      control: { type: 'select' },
    },
    loading: {
      type: 'boolean',
    },
  },
};

const Template = ({ ...props }) => (
  <ImageProfilePicker
    {...props}
    labels={{
      uploadImage: 'upload',
      changeImage: 'change',
      delete: 'delete',
      cancel: 'cancel',
      accept: 'accept',
    }}
  />
);

export const Playground = Template.bind({});

Playground.args = {
  fullName: 'John Doe',
  loading: false,
};
