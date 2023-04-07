import React from 'react';
import { Group } from '@mantine/core';
import { Button } from '../../form';
import { Spotlight, openSpotlight } from '.';
import { SPOTLIGHT_DEFAULT_PROPS } from './Spotlight.constants';
import mdx from './Spotlight.mdx';
import { MENU_DATA } from '../MainNav/mocks/menu';

export default {
  title: 'Molecules/Navigation/Spotlight',
  parameters: {
    component: Spotlight,
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

const actions = [
  {
    title: 'Home',
    description: 'Get to home page',
    onTrigger: () => console.log('Home'),
  },
  {
    title: 'Dashboard',
    description: 'Get full information about current system status',
    onTrigger: () => console.log('Dashboard'),
  },
  {
    title: 'Documentation',
    description: 'Visit documentation to lean more about all features',
    onTrigger: () => console.log('Documentation'),
  },
];

const Template = ({ ...props }) => {
  return (
    <Spotlight {...props}>
      <Group position="center">
        <Button onClick={() => openSpotlight()}>Open spotlight</Button>
      </Group>
    </Spotlight>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
  ...SPOTLIGHT_DEFAULT_PROPS,
  data: MENU_DATA
};
