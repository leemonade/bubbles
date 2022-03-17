import React from 'react';
import { Paragraph } from '../../typography';
import { Button } from '../../form';
import { ModalsProvider } from './ModalsProvider';
import { useModals } from './hook/useModals';
import { MODALS_PROVIDER_DEFAULT_PROPS } from './ModalsProvider.constants';
import mdx from './ModalsProvider.mdx';

export default {
  title: 'Molecules/Overlay/ModalsProvider',
  parameters: {
    component: ModalsProvider,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    // myBooleanProp: { control: { type: 'boolean' } },
    // mySelectProp: { options: ['Hello', 'World'], control: { type: 'select' } },
  },
};

function Demo() {
  const modals = useModals();

  const openDeleteModal = () =>
    modals.openConfirmModal({
      title: 'Delete your profile',
      children: (
        <Paragraph>
          Are you sure you want to delete your profile? This action is destructive and you will have
          to contact support to restore your data.
        </Paragraph>
      ),
      labels: { confirm: 'Delete account', cancel: "No don't delete it" },
      confirmProps: { color: 'fatic' },
      onCancel: () => console.log('Cancel'),
      onConfirm: () => console.log('Confirmed'),
    });

  return <Button onClick={openDeleteModal}>Delete account</Button>;
}

const Template = ({ ...props }) => {
  return (
    <ModalsProvider>
      <Demo />
    </ModalsProvider>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
  ...MODALS_PROVIDER_DEFAULT_PROPS,
};
