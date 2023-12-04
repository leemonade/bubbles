import React from 'react';
import { ProgressColorBar } from './ProgressColorBar';
import mdx from './ProgressColorBar.mdx';
import { Box } from '../../layout';
import { PROGRESSCOLORBAR_RADIUS, PROGRESSCOLORBAR_SIZES } from './ProgressColorBar.constants';

export default {
  title: 'Atoms/Informative/ProgressColorBar',
  parameters: {
    component: ProgressColorBar,
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
        options: PROGRESSCOLORBAR_RADIUS,
      },
    },
    size: {
      control: {
        type: 'select',
        options: PROGRESSCOLORBAR_SIZES,
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
    <ProgressColorBar {...props} />
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
  labelLeft: "I'm label left",
  labelRight: "I'm label right",
};
