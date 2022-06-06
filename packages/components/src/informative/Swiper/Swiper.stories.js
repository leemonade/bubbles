import mdx from './Swiper.mdx';
import React from 'react';
import { Swiper } from './Swiper';
import { childrens } from './mock/data';
import { SWIPER_DEFAULT_PROPS, SWIPER_VARIANTS } from './Swiper.constants';

export default {
  title: 'Molecules/Informative/Swiper',
  parameters: {
    component: Swiper,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    onSelectIndex: { action: 'onSelectIndex' },
    variant: { control: { type: 'select' }, options: SWIPER_VARIANTS },
  },
};

const Template = ({ children, ...props }) => {
  return (
    <Swiper {...props} children={children}>
      {children}
    </Swiper>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  ...SWIPER_DEFAULT_PROPS,
  variant: 'dashboard',
  selectable: false,
  children: childrens,
  breakAt: {
    1200: { slidesPerView: 4, spaceBetween: 20 },
    940: { slidesPerView: 3, spaceBetween: 20 },
    520: { slidesPerView: 2, spaceBetween: 30 },
    360: { slidesPerView: 1, spaceBetween: 40 },
  },
};
