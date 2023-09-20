import React from 'react';
import { Box } from '@mantine/core';
import { FavButton } from './FavButton';
import { FAV_BUTTON_DEFAULT_PROPS } from './FavButton.constants';
import mdx from './FavButton.mdx';

export default {
  title: 'Atoms/Form/FavButton',
  parameters: {
    component: FavButton,
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
    // mySelectProp: { options: ['Hello', 'World'], control: { type: 'select' } },
  },
};

const containerStyles = {
  backgroundColor: '#fafafa',
  width: 50,
  height: 50,
  borderRadius: '12px',
  display: 'grid',
  placeContent: 'center',
};

const Template = ({ ...props }) => {
  return (
    <Box style={{ ...containerStyles }}>
      <FavButton {...props} />
    </Box>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
  ...FAV_BUTTON_DEFAULT_PROPS,
};
