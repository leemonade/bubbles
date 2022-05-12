import React from 'react';
import { TaskDeadline } from './TaskDeadline';
import { TASK_DEADLINE_DEFAULT_PROPS, TASK_DEADLINE_SIZES } from './TaskDeadline.constants';
import mdx from './TaskDeadline.mdx';

export default {
  title: 'leemons/Common/TaskDeadline',
  parameters: {
    component: TaskDeadline,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    locale: {
      options: ['en-gb', 'en-us', 'fr', 'fr-ca', 'es-es', 'es-pr'],
      control: { type: 'select' },
    },
    size: { options: TASK_DEADLINE_SIZES, control: { type: 'select' } },
  },
};

const Template = ({ ...props }) => {
  return <TaskDeadline {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  ...TASK_DEADLINE_DEFAULT_PROPS,
  label: 'Entrega',
  deadline: new Date('2022-04-22'),
};
