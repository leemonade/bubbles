import React from 'react';
import { Box } from '@bubbles-ui/components';
import { HeaderBackground } from './HeaderBackground';
import { HEADER_BACKGROUND_DEFAULT_PROPS } from './HeaderBackground.constants';
import mdx from './HeaderBackground.mdx';

export default {
  title: 'leemons/Common/HeaderBackground',
  parameters: {
    component: HeaderBackground,
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

const Template = ({ withImage, ...props }) => {
  return (
    <Box style={{ height: '25vh' }}>
      <HeaderBackground {...props} image={withImage ? props.image : ''} />
    </Box>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  withImage: true,
  ...HEADER_BACKGROUND_DEFAULT_PROPS,
  image:
    'https://images.unsplash.com/photo-1650120060263-61dc78365ef3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80',
  color: '#FABADA',
};
