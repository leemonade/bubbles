import React from 'react';
import { Box } from '@bubbles-ui/components';
import { LibraryNavbar, LIBRARY_NAVBAR_DEFAULT_PROPS } from './LibraryNavbar';
import { PluginKimIcon, PluginContentCreatorIcon, StarIcon } from '@bubbles-ui/icons/solid';
import mdx from './LibraryNavbar.mdx';

export default {
  title: 'leemons/Library/LibraryNavbar',
  parameters: {
    component: LibraryNavbar,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB/🍋💧-Bubbles-SD-v2?node-id=6696%3A72630',
    },
  },
  argTypes: {
    onNav: { action: 'onNav' },
    onFile: { action: 'onFile' },
    onNew: { action: 'onNew' },
  },
};

const Template = ({ children, ...props }) => {
  return (
    <Box style={{ width: 240 }}>
      <LibraryNavbar {...props}>{children}</LibraryNavbar>
    </Box>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  ...LIBRARY_NAVBAR_DEFAULT_PROPS,
  labels: {
    uploadButton: 'Upload or create',
    quickAccess: 'Quick access',
    createNewTitle: 'Create new',
    fileUploadTitle: 'Click to browse your file',
    fileUploadSubtitle: 'or drop here a file from your computer',
  },

  categories: [
    {
      id: '1',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/User-rights_icon.svg',
      name: 'Media files',
      slug: 'media-files',
    },
    {
      id: '2',
      icon: <PluginContentCreatorIcon />,
      name: 'Content creator',
      slug: 'content-creator',
    },

    {
      id: '3',
      icon: <StarIcon />,
      name: 'Paths',
      slug: 'paths',
    },
    {
      id: '4',
      icon: <StarIcon />,
      name: 'Tasks',
      slug: 'tasks',
    },
    {
      id: '5',
      icon: <StarIcon />,
      name: 'Activities',
      slug: 'activities',
    },
    {
      id: '6',
      icon: <StarIcon />,
      name: 'Bookmarks',
      slug: 'bookmarks',
    },
  ],
};
