import React, { useState } from 'react';
import { Box } from '@bubbles-ui/components';
import { LibraryNavbar } from './LibraryNavbar';
import { LIBRARY_NAVBAR_DEFAULT_PROPS } from './LibraryNavbar.constants';
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

const Template = ({ onNav, ...props }) => {
  const [category, setCategory] = useState(null);
  return (
    <Box style={{ width: 240, height: '100vh', margin: -15 }}>
      <LibraryNavbar
        {...props}
        selectedCategory={category}
        onNav={(e) => {
          onNav(e);
          setCategory(e?.id);
        }}
      />
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
      icon: '/img/library/media-files.svg',
      name: 'Media files',
      slug: 'media-files',
    },
    {
      id: '2',
      icon: '/img/library/content-creator.svg',
      name: 'Content creator',
      slug: 'content-creator',
      creatable: true,
    },

    {
      id: '3',
      icon: '/img/library/paths.svg',
      name: 'Paths',
      slug: 'paths',
      creatable: true,
    },
    {
      id: '4',
      icon: '/img/library/tasks.svg',
      name: 'Tasks',
      slug: 'tasks',
      creatable: true,
    },
    {
      id: '5',
      icon: '/img/library/activities.svg',
      name: 'Activities',
      slug: 'activities',
      creatable: true,
    },
    {
      id: '6',
      icon: '/img/library/bookmarks.svg',
      name: 'Bookmarks',
      slug: 'bookmarks',
      creatable: true,
    },
  ],
};
