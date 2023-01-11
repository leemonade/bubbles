import { PluginAssignmentsIcon } from '@bubbles-ui/icons/outline';
import React from 'react';
import { PageHeader } from './PageHeader';
import { PAGE_HEADER_DEFAULT_PROPS } from './PageHeader.constants';
import mdx from './PageHeader.mdx';

export default {
  title: 'Molecules/Layout/PageHeader',
  parameters: {
    component: PageHeader,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {},
};

const Template = ({ ...props }) => {
  return <PageHeader {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  ...PAGE_HEADER_DEFAULT_PROPS,
  values: {
    title: 'Lorem ipsum dolor sit amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
  },
  buttons: {
    duplicate: 'Guardar borrador',
    new: 'Publicar',
  },
  icon: <PluginAssignmentsIcon />,
};
