import React from 'react';
import { Box } from '@bubbles-ui/components';
import {
  AdminPageHeader,
  ADMIN_PAGE_HEADER_DEFAULT_PROPS,
  ADMIN_PAGE_HEADER_BUTTON_TYPES,
} from './AdminPageHeader';
import mdx from './AdminPageHeader.mdx';

export default {
  title: 'Leemons/Admin/AdminPageHeader',
  parameters: {
    component: AdminPageHeader,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/SjAiYd128sqDIzjPRsyRDe/%F0%9F%8D%8B-App-Opensource?node-id=111%3A39060',
    },
  },
  argTypes: {
    // myBooleanProp: { control: { type: 'boolean' } },
    isLoading: { options: ADMIN_PAGE_HEADER_BUTTON_TYPES, control: { type: 'select' } },
  },
};

const Template = ({ children, ...props }) => {
  return (
    <Box style={{ margin: '-15px' }}>
      <AdminPageHeader {...props}>{children}</AdminPageHeader>
    </Box>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  ...ADMIN_PAGE_HEADER_DEFAULT_PROPS,
  breadcrumbs: [{ label: 'Users', href: '#' }, { label: 'Profiles' }],
  values: {
    title: 'Profile list',
    description: `Use the user profiles to manage permissions for applications. Each time you install a new Leemon (plugin) we will ask you to define permissions for each existing profile. Start by manually creating a profile or install the default profiles suggested here and save a lot of time (seriously).`,
  },
  placeholders: {
    title: 'Profile name',
    description: 'Profile description',
  },
};
