import React from 'react';
import { Box, ALERT_SEVERITIES } from '@bubbles-ui/components';
import { Notification, NOTIFICATION_DEFAULT_PROPS } from './Notification';
import mdx from './Notification.mdx';

export default {
  title: 'Notification',
  parameters: {
    component: Notification,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB/%F0%9F%8D%8B%F0%9F%92%A7-Bubbles-SD-v2?node-id=4121%3A40506',
    },
  },
  argTypes: {
    // myBooleanProp: { control: { type: 'boolean' } },
    // mySelectProp: { options: ['Hello', 'World'], control: { type: 'select' } },
    severity: { options: ['none', ...ALERT_SEVERITIES], control: { type: 'select' } },
  },
};

const Template = ({ ...props }) => {
  return <Notification {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
  ...NOTIFICATION_DEFAULT_PROPS,
  title: 'Notification',
  message: 'This is a cool notification',
};
