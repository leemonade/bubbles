import React from 'react';
import { Highlight } from './Highlight';
import mdx from './Highlight.mdx';

export default {
  title: 'Atoms/Typography/Highlight',
  parameters: {
    component: Highlight,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB/%F0%9F%8D%8B%F0%9F%92%A7-Bubbles-SD-v2?node-id=3511%3A21971',
    },
  },
  argTypes: {},
};

const Template = ({ test_text, highlight, ...props }) => (
  <Highlight {...props} highlight={highlight}>
    {test_text}
  </Highlight>
);

export const Playground = Template.bind({});

Playground.args = {
  test_text: 'This is a text for test purpose',
  highlight: 'test',
};
