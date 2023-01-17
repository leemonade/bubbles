import React from 'react';
import {
  Paragraph,
  PARAGRAPH_ALIGNS,
  PARAGRAPH_COLORS,
  PARAGRAPH_DEFAULT_PROPS,
  PARAGRAPH_SIZES,
  PARAGRAPH_TRANSFORMS,
} from './Paragraph';
import mdx from './Paragraph.mdx';

export default {
  title: 'BB1/Paragraph',
  parameters: {
    component: Paragraph,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB/%F0%9F%8D%8B%F0%9F%92%A7-Bubbles-SD-v2?node-id=3511%3A21971',
    },
  },
  argTypes: {
    // myBooleanProp: { control: { type: 'boolean' } },
    align: { options: PARAGRAPH_ALIGNS, control: { type: 'select' } },
    size: { options: PARAGRAPH_SIZES, control: { type: 'select' } },
    color: { options: PARAGRAPH_COLORS, control: { type: 'select' } },
    transform: { options: PARAGRAPH_TRANSFORMS, control: { type: 'select' } },
  },
};

const Template = ({ test_text, ...props }) => {
  return <Paragraph {...props}>{test_text}</Paragraph>;
};

export const Playground = Template.bind({});

Playground.args = {
  test_text: 'Test',
  ...PARAGRAPH_DEFAULT_PROPS,
};
