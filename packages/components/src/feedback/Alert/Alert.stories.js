import React from 'react';
import { Alert, ALERT_SEVERITIES, ALERT_VARIANTS } from './Alert';
import mdx from './Alert.mdx';

export default {
  title: 'Atoms/Feedback/Alert',
  parameters: {
    component: Alert,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB/%F0%9F%8D%8B%F0%9F%92%A7-Bubbles-SD-v2?node-id=3650%3A31905',
    },
  },
  argTypes: {
    severity: { options: ALERT_SEVERITIES, control: { type: 'select' } },
    variant: { control: { type: 'select', options: ALERT_VARIANTS } },
    onAction: { action: 'clicked' },
    onClose: { action: 'closed' },
  },
};

const Template = ({ ...props }) => {
  return <Alert {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  title: 'Info',
  children: 'Brochure is missing',
  severity: ALERT_SEVERITIES[0],
  variant: ALERT_VARIANTS[0],
  closeable: 'Close',
  action: 'Do something',
};
