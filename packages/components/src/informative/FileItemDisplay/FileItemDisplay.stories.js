import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { FileItemDisplay, FILE_ITEM_DISPLAY_DEFAULT_PROPS } from './FileItemDisplay';
import mdx from './FileItemDisplay.mdx';

export default {
  title: 'BB1/FileItemDisplay',
  parameters: {
    component: FileItemDisplay,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB/🍋💧-Bubbles-SD-v2?node-id=3639%3A28963',
    },
  },
  argTypes: {},
};

const Template = ({ children, useRouter, ...props }) => {
  return (
    <Router>
      <FileItemDisplay {...props} useRouter={useRouter}>
        {children}
      </FileItemDisplay>
    </Router>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  ...FILE_ITEM_DISPLAY_DEFAULT_PROPS,
  filename: 'filename.pdf',
  description: '',
  metadata: {},
};
