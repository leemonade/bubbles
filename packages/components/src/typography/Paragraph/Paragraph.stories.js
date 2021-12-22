import React from 'react';
import {
  Paragraph,
  PARAGRAPH_ALIGNS,
  PARAGRAPH_COLORS,
  PARAGRAPH_SIZES,
  PARAGRAPH_TRANSFORMS,
  DEFAULT_PROPS,
} from './Paragraph';
import mdx from './Paragraph.mdx';

export default {
  title: 'Atoms/Typography/Paragraph',
  parameters: {
    component: Paragraph,
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
  ...DEFAULT_PROPS,
};
