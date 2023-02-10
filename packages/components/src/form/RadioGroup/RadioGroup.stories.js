import React from 'react';
import { RadioGroup, RADIOGROUP_DEFAULT_PROPS, RADIOGROUP_DIRECTIONS } from './RadioGroup';
import { INPUT_WRAPPER_ORIENTATIONS, INPUT_WRAPPER_SIZES } from '../../form';
import mdx from './RadioGroup.mdx';
import { RADIO_VARIANTS } from '../Radio/Radio';
import { StarIcon } from '@bubbles-ui/icons/solid';

export default {
  title: 'Molecules/Form/RadioGroup',
  parameters: {
    component: RadioGroup,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB/%F0%9F%8D%8B%F0%9F%92%A7-Bubbles-SD-v2?node-id=3642%3A26575',
    },
  },
  argTypes: {
    variant: { options: RADIO_VARIANTS, control: { type: 'select' } },
    direction: { options: RADIOGROUP_DIRECTIONS, control: { type: 'select' } },
    orientation: { options: INPUT_WRAPPER_ORIENTATIONS, control: { type: 'select' } },
    size: { options: INPUT_WRAPPER_SIZES, control: { type: 'select' } },
    onChange: { action: 'Changed' },
  },
};

const Template = ({ ...props }) => {
  return <RadioGroup {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  ...RADIOGROUP_DEFAULT_PROPS,
  data: [
    {
      value: 'option1',
      label: 'Label for option 1',
      icon: <StarIcon />,
      image:
        'https://images.unsplash.com/photo-1627552245715-77d79bbf6fe2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=80',
    },
    {
      value: 'option2',
      label: 'Label for option 2',
      icon: <StarIcon />,
      image:
        'https://images.unsplash.com/photo-1627552245715-77d79bbf6fe2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=80',
    },
    {
      value: 'option3',
      label: 'Label for option 3',
      icon: <StarIcon />,
      help: 'Help text for option 3',
      helpPosition: 'bottom',
      image:
        'https://images.unsplash.com/photo-1627552245715-77d79bbf6fe2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=80',
    },
  ],
};
