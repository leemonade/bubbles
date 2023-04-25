import React, { forwardRef, useState } from 'react';
import { StarIcon } from '@bubbles-ui/icons/solid';
import { RemoveIcon } from '@bubbles-ui/icons/outline';
import { Stack, Box } from '../../layout';
import { UserDisplayItem } from '../../informative';
import { ActionButton } from '../../form';
import { MultiSelect } from './MultiSelect';
import {
  MULTI_SELECT_DEFAULT_PROPS,
  MULTI_SELECT_DROPDOWN_POSITIONS,
  MULTI_SELECT_ORIENTATIONS,
  MULTI_SELECT_SIZES,
} from './MultiSelect.constants';
import mdx from './MultiSelect.mdx';

export default {
  title: 'Molecules/Form/MultiSelect',
  parameters: {
    component: MultiSelect,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB/%F0%9F%8D%8B%F0%9F%92%A7-Bubbles-SD-v2?node-id=3649%3A33102',
    },
  },
  argTypes: {
    size: { options: MULTI_SELECT_SIZES, control: { type: 'select' } },
    orientation: { options: MULTI_SELECT_ORIENTATIONS, control: { type: 'select' } },
    dropdownPosition: { options: MULTI_SELECT_DROPDOWN_POSITIONS, control: { type: 'select' } },
    onChange: { action: 'Value changed' },
  },
};

const Template = ({ children, data, useValueComponent, onChange, showIcon, ...props }) => {
  const CustomValueComponent = forwardRef(({ label, onRemove }, ref) => {
    // return <UserDisplayItem name={label} size="xs" />;
    return (
      <Stack sx={(theme) => ({ paddingRight: theme.spacing[1] })}>
        <UserDisplayItem name={label} size="xs" />
        {onRemove ? (
          <Box>
            <ActionButton icon={<RemoveIcon />} onClick={() => onRemove(value)} />
          </Box>
        ) : null}
      </Stack>
    );
  });

  const [state, setState] = useState([]);
  const [value, setValue] = useState([]);
  return (
    <MultiSelect
      {...props}
      value={value}
      onChange={(value) => {
        setValue(value);
        onChange(value);
      }}
      data={[...data, ...state]}
      getCreateLabel={(query) => `+ Create ${query}`}
      onCreate={(q) => setState([...state, q])}
      valueComponent={useValueComponent ? CustomValueComponent : undefined}
      icon={showIcon ? <StarIcon /> : null}
      skipFlex
    />
  );
};

export const Playground = Template.bind({});

Playground.args = {
  ...MULTI_SELECT_DEFAULT_PROPS,
  showIcon: false,
  size: MULTI_SELECT_SIZES[1],
  useValueComponent: false,
  maxSelectedValues: 0,
  label: 'Label for Multiselect',
  placeholder: 'Select one',
  description: 'Optional descriptive text for this select field ',
  required: true,
  clearable: 'Clear select field',
  error: 'Descriptive text for error ',
  data: [
    {
      image: 'https://img.icons8.com/clouds/256/000000/futurama-bender.png',
      label: 'Bender Bending Rodríguez',
      value: 'Bender Bending Rodríguez',
      description: 'Fascinated with cooking',
    },
    {
      image: 'https://img.icons8.com/clouds/256/000000/futurama-mom.png',
      label: 'Carol Miller',
      value: 'Carol Miller',
      description: 'One of the richest people on Earth',
      group: 'Group 1',
    },
    {
      image: 'https://img.icons8.com/clouds/256/000000/homer-simpson.png',
      label: 'Homer Simpson',
      value: 'Homer Simpson',
      description: 'Overweight, lazy, and often ignorant',
      group: 'Group 1',
    },
    {
      image: 'https://img.icons8.com/clouds/256/000000/spongebob-squarepants.png',
      label: 'Spongebob Squarepants',
      value: 'Spongebob Squarepants',
      description: 'Not just a sponge',
      group: 'Group 1',
    },
  ],
};
