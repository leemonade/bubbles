import { StarIcon } from '@bubbles-ui/icons/solid';
import React from 'react';
import { Item } from './Item';
import { ITEM_DEFAULT_PROPS } from './Item.constants';
import mdx from './Item.mdx';

export default {
  title: 'Molecules/Overlay/Dropdown/Item',
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

const Template = ({ hideImage, image, ...props }) => {
  return <Item {...props} image={hideImage ? null : image} />;
};

export const Playground = Template.bind({});

Playground.args = {
  ...ITEM_DEFAULT_PROPS,
  label: 'Item',
  image:
    'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80',
  icon: <StarIcon />,
  hideImage: false,
  group: true,
};
