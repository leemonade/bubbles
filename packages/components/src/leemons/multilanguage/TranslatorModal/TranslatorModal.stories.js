import React from 'react';
import { Box } from '@mantine/core';
import { TranslatorModal, TRANSLATOR_MODAL_DEFAULT_PROPS } from './TranslatorModal';
import { TranslatorTabs } from '../TranslatorTabs';
import { TRANSLATOR_TABS_DATA } from '../TranslatorTabs/mocks/data';
import mdx from './TranslatorModal.mdx';

export default {
  title: 'Leemons/Multilanguage/TranslatorModal',
  parameters: {
    component: TranslatorModal,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    onClose: { action: 'Close button pressed' },
    onSave: { action: 'Save button pressed' },
    onCancel: { action: 'Cancel button pressed' },
  },
};

const Template = ({ test_translatorModalData, ...props }) => {
  return (
    <TranslatorModal {...props}>
      <TranslatorTabs {...test_translatorModalData}>
        <Box>I'm locale</Box>
      </TranslatorTabs>
    </TranslatorModal>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  ...TRANSLATOR_MODAL_DEFAULT_PROPS,
  labels: {
    title: 'Configuration & languages',
    trigger: 'Translations',
    help: 'Untranslated content will appear in the default language',
    cancel: 'Cancel',
    save: 'Save',
    close: 'Close',
  },
  test_translatorModalData: { ...TRANSLATOR_TABS_DATA },
};
