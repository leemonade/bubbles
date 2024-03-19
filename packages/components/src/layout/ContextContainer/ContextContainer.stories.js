import React from 'react';
import { TextInput } from '../../form';
import {
  ContextContainer,
  CONTEXT_CONTAINER_DEFAULT_PROPS,
  CONTEXT_CONTAINER_PADDED_TYPES,
} from './ContextContainer';
import mdx from './ContextContainer.mdx';

export default {
  title: 'Atoms/Layout/ContextContainer',
  parameters: {
    component: ContextContainer,
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
    padded: { options: CONTEXT_CONTAINER_PADDED_TYPES, control: { type: 'select' } },
  },
};

const Template = ({ ...props }) => {
  const headerInputStyle = { width: 300 };

  return (
    <ContextContainer {...props}>
      <TextInput headerStyle={headerInputStyle} label="Label for text field 2" />
      <TextInput headerStyle={headerInputStyle} label="Label for text field 2" />
    </ContextContainer>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  ...CONTEXT_CONTAINER_DEFAULT_PROPS,
  title: 'Subjects',
  subtitle: '',
};

const TemplateNested = ({ ...props }) => {
  const headerInputStyle = { width: 300 };

  return (
    <ContextContainer>
      <ContextContainer {...props}>
        <TextInput headerStyle={headerInputStyle} label="Label for text field 1" />
        <TextInput headerStyle={headerInputStyle} label="Label for text field 1" />
      </ContextContainer>
      <ContextContainer subtitle={'Without title - no extra margin'}>
        <TextInput headerStyle={headerInputStyle} label="Label for text field 2" />
        <TextInput headerStyle={headerInputStyle} label="Label for text field 2" />
      </ContextContainer>
      <ContextContainer {...props}>
        <TextInput headerStyle={headerInputStyle} label="Label for text field 3" />
        <TextInput headerStyle={headerInputStyle} label="Label for text field 3" />

        <ContextContainer {...props} subtitle={'Third level - extra margin'}>
          <TextInput headerStyle={headerInputStyle} label="Label for text field 4" />
          <TextInput headerStyle={headerInputStyle} label="Label for text field 4" />
        </ContextContainer>

        <ContextContainer {...props} subtitle={'Third level - extra margin'}>
          <TextInput headerStyle={headerInputStyle} label="Label for text field 5" />
          <TextInput headerStyle={headerInputStyle} label="Label for text field 5" />
        </ContextContainer>
      </ContextContainer>
      <ContextContainer {...props}>
        <TextInput headerStyle={headerInputStyle} label="Label for text field 6" />
        <TextInput headerStyle={headerInputStyle} label="Label for text field 6" />
      </ContextContainer>
    </ContextContainer>
  );
};

export const PlaygroundNested = TemplateNested.bind({});

PlaygroundNested.args = {
  ...CONTEXT_CONTAINER_DEFAULT_PROPS,
  title: 'Subjects',
  subtitle: '',
};
