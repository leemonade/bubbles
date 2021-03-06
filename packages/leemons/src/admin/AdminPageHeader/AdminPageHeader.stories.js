import React from 'react';
import { Box, Paragraph } from '@bubbles-ui/components';
import { PluginAssignmentsIcon } from '@bubbles-ui/icons/outline';
import { AdminPageHeader } from './AdminPageHeader';
import {
  ADMIN_PAGE_HEADER_DEFAULT_PROPS,
  ADMIN_PAGE_HEADER_BUTTON_TYPES,
  ADMIN_PAGE_HEADER_VARIANTS,
} from './AdminPageHeader.constants';
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
    variant: { options: ADMIN_PAGE_HEADER_VARIANTS, control: { type: 'select' } },
    onNew: { action: 'New clicked' },
    onEdit: { action: 'Edit clicked' },
    onSave: { action: 'Save clicked' },
    onCancel: { action: 'Cancel clicked' },
    onDuplicate: { action: 'Duplicate clicked' },
  },
};

const Template = ({ ...props }) => {
  return (
    <Box style={{ margin: '-15px' }}>
      <AdminPageHeader {...props} />
      <Box padding={5}>
        {[...Array(10)].map((_, i) => (
          <Paragraph key={`p-${i}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </Paragraph>
        ))}
      </Box>
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
  icon: <PluginAssignmentsIcon />,
};
