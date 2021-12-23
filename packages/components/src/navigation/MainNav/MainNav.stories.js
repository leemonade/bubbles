import React from 'react';
import { Box } from '@mantine/core';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { MainNav } from './MainNav';
import mdx from './MainNav.mdx';

export default {
  title: 'Organisms/Navigation/MainNav',
  parameters: {
    component: MainNav,
    docs: {
      page: mdx,
    },
  },
  argTypes: {},
};

const Template = (props) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Box style={{ margin: '-15px', maxWidth: 250 }}>
        <MainNav {...props} />
      </Box>
    </DndProvider>
  );
};

export const Playground = Template.bind({});

Playground.args = {};
