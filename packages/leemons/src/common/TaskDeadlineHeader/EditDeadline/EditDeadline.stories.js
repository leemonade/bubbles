import React from 'react';
import { Box } from '@bubbles-ui/components';
import { EditDeadline } from './EditDeadline';
import { EDIT_DEADLINE_DEFAULT_PROPS } from './EditDeadline.constants';
import mdx from './EditDeadline.mdx';

export default {
  title: 'leemons/Common/TaskDeadlineHeader/EditDeadline',
  parameters: {
    component: EditDeadline,
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

const Template = ({ ...props }) => {
  return <EditDeadline {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
  ...EDIT_DEADLINE_DEFAULT_PROPS,
  opened: true,
  target: <Box></Box>,
  labels: {
    save: 'Update',
    cancel: 'Cancel',
    period: 'Tipo de periodo',
    startDate: 'Fecha de inicio',
    startHour: 'Hora de inicio',
    endDate: 'Fecha de fin',
    endHour: 'Hora de fin',
  },
};
