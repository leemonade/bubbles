import { LinkModal, LINKMODAL_DEFAULT_PROPS } from './LinkModal';

export default {
  title: 'Atom/Form/LinkModal',
  parameters: {
    component: LinkModal,
    docs: {
      // page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    onChange: { action: 'onChange' },
    onCancel: { action: 'onCancel' },
  },
};

const Template = ({ content, numberOfTools, ...props }) => {
  return <LinkModal {...props}></LinkModal>;
};

export const Playground = Template.bind({});

Playground.args = {
  ...LINKMODAL_DEFAULT_PROPS,
  labels: {
    text: 'Text',
    link: 'Link',
    switch: 'Embed player',
    cancel: 'Cancel',
    add: 'Add link',
    cardInput: 'Item from library',
    selectCard: 'Select item',
  },
  placeholders: {
    text: 'Introduce un texto',
    link: 'Introduce un link',
  },
  errorMessages: {
    text: 'Text is required',
    link: 'Link is required',
    validURL: 'Link is not valid',
  },
};
