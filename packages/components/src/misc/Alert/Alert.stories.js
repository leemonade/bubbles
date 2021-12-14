import React from 'react';
import { Box } from '@mantine/core';
import { Alert, ALERT_COLORS, ALERT_ICONS } from './Alert';
import mdx from './Alert.mdx';

export default {
  title: 'Misc/Alert',
  parameters: {
    component: Alert,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB?embed_host=share&kind=&node-id=3640%3A34476&viewer=1',
    },
  },
  argTypes: {
    color: { options: ALERT_COLORS, control: { type: 'select' } },
    icon: { options: ALERT_ICONS, control: { type: 'select' } },
    // myBooleanProp: { control: { type: 'boolean' } },
    // mySelectProp: { options: ['Hello', 'World'], control: { type: 'select' } },
  },
};

const Template = ({ children, title, color, closeButtonLabel, ...props }) => {
  return (
    <Alert title={title} color={color} closeButtonLabel="Close alert" {...props}>
      {console.log(ALERT_ICONS)}
      {console.log(ALERT_ICONS[0])}
      {console.log(ALERT_ICONS[1])}
      {console.log(ALERT_ICONS[2])}
      {children}
    </Alert>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  title: 'Default',
  children: 'Default text',
  color: '',
  icon: ALERT_ICONS[0],
  withCloseButton: true,
};
