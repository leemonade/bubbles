import React from 'react';
import { Box } from '@bubbles-ui/components';
import { LibraryCardDeadline, LIBRARY_CARD_DEADLINE_DEFAULT_PROPS } from './LibraryCardDeadline';
import { ArchiveIcon } from '@bubbles-ui/icons/solid/';
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
    icon: {
      options: [
        'https://image.flaticon.com/icons/png/512/16/16363.png',
        <ArchiveIcon width={16} height={16} />,
      ],
      control: { type: 'select' },
    },
  },
};

const Template = ({ children, ...props }) => {
  return <LibraryCardDeadline {...props}>{children}</LibraryCardDeadline>;
};

export const Playground = Template.bind({});

Playground.args = {
  ...LIBRARY_CARD_DEADLINE_DEFAULT_PROPS,
  icon: 'https://image.flaticon.com/icons/png/512/16/16363.png',
  deadline: new Date('2022-02-10'),
  locale: 'es',
};
