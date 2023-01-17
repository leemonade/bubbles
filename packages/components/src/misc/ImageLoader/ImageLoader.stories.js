import React from 'react';
import { ImageLoader } from './ImageLoader';
import mdx from './ImageLoader.mdx';

export default {
  title: 'BB1/ImageLoader',
  parameters: {
    component: ImageLoader,
    docs: {
      page: mdx,
    },
  },
  argTypes: {},
};

const Template = (props) => {
  return <ImageLoader {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  src: 'https://images.unsplash.com/photo-1627552245715-77d79bbf6fe2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=80',
  forceImage: false,
  withPlaceholder: false,
  height: '100%',
  radius: '50%',
  imageStyles: {
    width: '100%',
  },
  alt: 'Dog asking for treats',
};
