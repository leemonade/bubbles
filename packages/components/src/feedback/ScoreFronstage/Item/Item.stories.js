import React from 'react';
import { Item } from './Item';
import { ITEM_DEFAULT_PROPS } from './Item.constants';
import mdx from './Item.mdx';

export default {
  title: 'BB2/ScoreFronstage/Item',
  parameters: {
    component: Item,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {},
};

const Template = ({ ...props }) => {
  return <Item {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  ...ITEM_DEFAULT_PROPS,
  title: 'Title',
  date: new Date(),
  percentage: '10',
};
