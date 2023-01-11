import React, { forwardRef } from 'react';
import { Autocomplete } from './Autocomplete';
import { AUTOCOMPLETE_DEFAULT_PROPS } from './Autocomplete.constants';
import {
  INPUT_WRAPPER_ORIENTATIONS,
  INPUT_WRAPPER_SIZES,
} from '../InputWrapper/InputWrapper.constants';
import mdx from './Autocomplete.mdx';
import { UserDisplayItem } from '../../informative/UserDisplayItem';

export default {
  title: 'Molecules/Form/Autocomplete',
  parameters: {
    component: Autocomplete,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB/🍋💧-Bubbles-SD-v2?node-id=3649%3A33332',
    },
  },
  argTypes: {
    size: { options: INPUT_WRAPPER_SIZES, control: { type: 'select' } },
    orientation: { options: INPUT_WRAPPER_ORIENTATIONS, control: { type: 'select' } },
    onItemSubmit: { action: 'onItemSubmit' },
    onChange: { action: 'onChange' },
    onSearch: { action: 'onSearch' },
  },
};

const Template = ({ ...props }) => {
  return <Autocomplete {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  ...AUTOCOMPLETE_DEFAULT_PROPS,
  label: 'Student',
  placeholder: 'Search for a student',
  data: [
    { value: 'Ana Alonso', label: 'Ana Alonso', children: 'Ana Alonso' },
    { value: 'Antonia Hidalgo', label: 'Antonia Hidalgo', children: 'Antonia Hidalgo' },
    { value: 'Maria Merino', label: 'Maria Merino', children: 'Maria Merino' },
    { value: 'Juan Carlos', label: 'Juan Carlos', children: 'Juan Carlos' },
  ],
  nothingFoundLabel: 'No maches found',
};

export const withAvatar = Template.bind({});

withAvatar.args = {
  ...AUTOCOMPLETE_DEFAULT_PROPS,
  label: 'Student',
  placeholder: 'Search for a student',
  data: [
    {
      value: 'Ana Alonso',
      name: 'Ana Alonso',
      label: 'Ana Alonso',
      children: 'Ana Alonso',
      avatar:
        'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80',
    },
    {
      value: 'Antonia Hidalgo',
      name: 'Antonia Hidalgo',
      label: 'Antonia Hidalgo',
      children: 'Antonia Hidalgo',
      avatar:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80',
    },
    {
      value: 'Maria Merino',
      name: 'Maria Merino',
      label: 'Maria Merino',
      children: 'Maria Merino',
      avatar:
        'https://images.unsplash.com/photo-1641324379143-81128cbb7ee7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MTgxMDY1Ng&ixlib=rb-1.2.1&q=80&w=1080',
    },
    {
      value: 'Miles Morales',
      name: 'Miles Morales',
      label: 'Miles Morales',
      children: 'Miles Morales',
      avatar:
        'https://images.unsplash.com/photo-1641664434328-6fe8a810e882?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MTg5MjUyMw&ixlib=rb-1.2.1&q=80&w=1080',
    },
  ],
  nothingFoundLabel: 'No maches found',
  itemComponent: forwardRef(({ avatar, children, label, name, value, ...props }, ref) => (
    <div ref={ref} {...props} style={{ padding: 4 }}>
      <UserDisplayItem
        avatar={avatar}
        children={children}
        label={label}
        name={name}
        value={value}
      />
    </div>
  )),
  ariaLabel: 'Student',
};
