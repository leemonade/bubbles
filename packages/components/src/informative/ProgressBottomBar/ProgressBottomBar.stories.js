import React from 'react';
import { ProgressBottomBar } from './ProgressBottomBar';
import mdx from './ProgressBottomBar.mdx';
import { Box } from '../../layout';
import { PROGRESSBOTTOMBAR_RADIUS, PROGRESSBOTTOMBAR_SIZES } from './ProgressBottomBar.constants';

export default {
  title: 'Atoms/Informative/ProgressBottomBar',
  parameters: {
    component: ProgressBottomBar,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      //   url: 'https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB/🍋💧-Bubbles-SD-v2?node-id=3639%3A28963',
    },
  },
  argTypes: {
    animate: {
      control: {
        type: 'boolean',
      },
    },
    color: {
      control: {
        type: 'color',
      },
    },
    radius: {
      control: {
        type: 'select',
        options: PROGRESSBOTTOMBAR_RADIUS,
      },
    },
    size: {
      control: {
        type: 'select',
        options: PROGRESSBOTTOMBAR_SIZES,
      },
    },
    striped: {
      control: {
        type: 'boolean',
      },
    },
    label: {
      control: {
        type: 'text',
      },
    },
    labelLeft: {
      control: {
        type: 'text',
      },
    },
    labelRight: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template = ({ ...props }) => (
  <Box style={{ maxWidth: '300px' }}>
    <ProgressBottomBar {...props} />
  </Box>
);

export const Playground = Template.bind({});

Playground.args = {
  animate: false,
  value: 50,
  size: 'lg',
  radius: 'lg',
  striped: false,
  color: 'orange',
  label: '',
  labelTop: 'labelTop',
};
