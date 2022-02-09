import React from 'react';
import { Box } from '@bubbles-ui/components';
import { LibraryCardContent, LIBRARY_CARD_CONTENT_DEFAULT_PROPS } from './LibraryCardContent';
import mdx from './LibraryCardContent.mdx';

export default {
  title: 'leemons/Library/LibraryCardContent',
  parameters: {
    component: LibraryCardContent,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB/🍋💧-Bubbles-SD-v2',
    },
  },
  argTypes: {
    showDescription: { control: 'boolean' },
  },
};

const Template = ({ children, description, showDescription, ...props }) => {
  return (
    <LibraryCardContent {...props} description={showDescription ? description : null}>
      {children}
    </LibraryCardContent>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  ...LIBRARY_CARD_CONTENT_DEFAULT_PROPS,
  showDescription: true,
  description:
    'This is a very large description of the book Rythim of War, the fourth book in The Stormlight Archive.',
  metadata: [
    { label: 'Quality', value: '128kb' },
    { label: 'Format', value: 'mp3' },
    { label: 'Duration', value: '10 min' },
    { label: 'Transcript', value: 'Not available' },
  ],
  tags: ['Fantasy', 'Adventure', 'Fiction'],
};
