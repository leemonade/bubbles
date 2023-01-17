import React from 'react';
import { Box } from '@mantine/core';
import { HeroBg, HERO_BG_DEFAULT_PROPS, HERO_BG_SIZES, HERO_BG_COLORS } from './HeroBg';
import mdx from './HeroBg.mdx';

export default {
  title: 'BB1/HeroBg',
  parameters: {
    component: HeroBg,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    size: { options: HERO_BG_SIZES, control: { type: 'select' } },
    color: { options: HERO_BG_COLORS, control: { type: 'select' } },
  },
};

const Template = ({ ...props }) => {
  return <HeroBg {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  ...HERO_BG_DEFAULT_PROPS,
};

export const SizeLg = Template.bind({});

SizeLg.args = {
  ...HERO_BG_DEFAULT_PROPS,
  size: 'lg',
  color: 'primary',
};

export const SizeXmd = Template.bind({});

SizeXmd.args = {
  ...HERO_BG_DEFAULT_PROPS,
  size: 'x-md',
  color: 'secondary',
};
