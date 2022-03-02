import React from 'react';
import { Box } from '@bubbles-ui/components';
import { ArchiveIcon } from '@bubbles-ui/icons/solid/';
import { LibraryCardDeadline } from './LibraryCardDeadline';
import { LIBRARY_CARD_DEADLINE_DEFAULT_PROPS } from './LibraryCardDeadline.constants';
import mdx from './LibraryCardDeadline.mdx';

export default {
  title: 'Leemons/Library/LibraryCardDeadline',
  parameters: {
    component: LibraryCardDeadline,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    locale: {
      options: ['en', 'fr', 'de', 'es', 'it', 'ja', 'ko', 'pt', 'ru', 'zh'],
      control: { type: 'select' },
      withImage: { type: 'boolean' },
    },
  },
};

const Template = ({ children, withImage, ...props }) => {
  const image =
    'https://images.unsplash.com/photo-1627552245715-77d79bbf6fe2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=80';
  const icon = props.icon;

  return (
    <LibraryCardDeadline {...props} icon={withImage ? image : icon}>
      {children}
    </LibraryCardDeadline>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  ...LIBRARY_CARD_DEADLINE_DEFAULT_PROPS,
  withImage: false,
  parentHovered: false,
  icon: <ArchiveIcon width={16} height={16} />,
  deadline: new Date('2022-02-20'),
  locale: 'es',
  isNew: false,
};
