import React from 'react';
import { PRO_SWITCH_DEFAULT_PROPS, ProSwitch } from './ProSwitch';
import { EmailPileIcon } from '@bubbles-ui/icons/outline';
import mdx from './ProSwitch.mdx';

export default {
  title: 'Molecules/Form/ProSwitch',
  parameters: {
    component: ProSwitch,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    onChange: { action: 'Changed' },
  },
};

const Template = ({ children, useIcon, icon, onChange, ...props }) => {
  return <ProSwitch {...props} icon={useIcon ? icon : undefined} onChange={onChange} />;
};

export const Playground = Template.bind({});

Playground.args = {
  ...PRO_SWITCH_DEFAULT_PROPS,
  useIcon: true,
  icon: <EmailPileIcon />,
  ariaLabel: 'Email switch',
  label: 'Switch label',
  disabled: false,
};
