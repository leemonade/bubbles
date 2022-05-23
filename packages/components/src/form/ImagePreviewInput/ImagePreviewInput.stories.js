import React from 'react';
import { ImagePreviewInput, IMAGE_PREVIEW_INPUT_DEFAULT_PROPS } from './ImagePreviewInput';
import mdx from './ImagePreviewInput.mdx';

export default {
  title: 'Molecules/Form/ImagePreviewInput',
  parameters: {
    component: ImagePreviewInput,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    onChange: { action: 'onChange' },
  },
};

const Template = ({ children, onChange, ...props }) => {
  const [value, setValue] = React.useState(null);

  return (
    <ImagePreviewInput
      {...props}
      value={value}
      onChange={(e) => {
        console.log(e);
        onChange(e);
        setTimeout(() => setValue(null), 2000);
      }}
    >
      {children}
    </ImagePreviewInput>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  ...IMAGE_PREVIEW_INPUT_DEFAULT_PROPS,
  labels: {
    changeImage: 'Change image',
    uploadButton: 'Upload image',
  },
  previewURL:
    'https://images.unsplash.com/photo-1643892593347-d19c62b8cea5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0NTExNDkyMg&ixlib=rb-1.2.1&q=80&w=1080',
};
