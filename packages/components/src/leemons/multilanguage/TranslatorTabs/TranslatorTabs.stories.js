import React from 'react';
import { Box } from '@mantine/core';
import { TranslatorTabs, TRANSLATOR_TABS_DEFAULT_PROPS } from './TranslatorTabs';
import { TRANSLATOR_TABS_DATA } from './mocks/data';
import mdx from './TranslatorTabs.mdx';

export default {
  title: 'Leemons/Multilanguage/TranslatorTabs',
  parameters: {
    component: TranslatorTabs,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    onLocaleChange: { action: 'Locale has changed' },
  },
};

const Template = ({ children, ...props }) => {
  return <TranslatorTabs {...props}>{children}</TranslatorTabs>;
};

export const Playground = Template.bind({});
Playground.args = {
  ...TRANSLATOR_TABS_DEFAULT_PROPS,
  ...TRANSLATOR_TABS_DATA,
};
