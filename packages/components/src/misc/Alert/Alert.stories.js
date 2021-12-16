import React from 'react';
import { Alert, ALERT_COLORS, ALERT_VARIANTS } from './Alert';
import mdx from './Alert.mdx';
import { CheckIcon } from '@heroicons/react/outline';
import { InformationCircleIcon, ExclamationIcon, XIcon } from '@heroicons/react/solid';

const ALERT_ICONS = { InformationCircleIcon, CheckIcon, ExclamationIcon, XIcon };

export default {
  title: 'Misc/Alert',
  parameters: {
    component: Alert,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB?embed_host=share&kind=&node-id=3640%3A34476&viewer=1',
    },
  },
  argTypes: {
    color: { options: ALERT_COLORS, control: { type: 'select' } },
    iconName: { control: { type: 'select', options: Object.keys(ALERT_ICONS) } },
    variant: { control: { type: 'select', options: ALERT_VARIANTS } },
    onAction: { action: 'clicked' },
    onClose: { action: 'closed' },
  },
};

const Template = ({ iconName, ...props }) => {
  const icon = ALERT_ICONS[iconName]();
  return <Alert icon={icon} {...props}></Alert>;
};

export const Playground = Template.bind({});

Playground.args = {
  title: 'Info',
  children: 'Brochure is missing',
  color: ALERT_COLORS[0],
  iconName: 'InformationCircleIcon',
  variant: ALERT_VARIANTS[0],
  withCloseButton: true,
  action: 'Do something',
};
