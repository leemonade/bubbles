import React from 'react';
import { Box } from '@bubbles-ui/components';
import { HeaderDropdown } from './HeaderDropdown';
import { HEADER_DROPDOWN_DEFAULT_PROPS } from './HeaderDropdown.constants';
import mdx from './HeaderDropdown.mdx';

export default {
  title: 'leemons/Common/HeaderDropdown',
  parameters: {
    component: HeaderDropdown,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {},
};

const Template = ({ ...props }) => {
  return (
    <Box style={{ width: 680 }}>
      <HeaderDropdown {...props} />
    </Box>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  ...HEADER_DROPDOWN_DEFAULT_PROPS,
  placeholder: 'Search',
  data: [
    {
      id: 'my-uuid',
      color: '#4F96FF',
      label: 'Bases para el análisis y el tratamiento del Cáncer',
      description: 'CFP594-22/001',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Globe_icon_2.svg',
      image:
        'https://images.unsplash.com/photo-1502230831726-fe5549140034?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80',
    },
    {
      id: 'my-uuid',
      color: '#FABADA',
      label: 'Titulo muy largo del item numero 2',
      description: 'Descripcion de item 2',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Globe_icon_2.svg',
      image:
        'https://images.unsplash.com/photo-1631931413024-38ed4229d10d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1586&q=80',
    },
    {
      id: 'my-uuid',
      color: '#345',
      label: 'Titulo del item numero 3',
      description: 'Descripcion de item 3',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Globe_icon_2.svg',
      image:
        'https://images.unsplash.com/photo-1433162653888-a571db5ccccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    },
    {
      id: 'my-uuid',
      color: '#271',
      label: 'Cómo montar una mensa',
      description: 'Descripcion de item 4',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Globe_icon_2.svg',
      image:
        'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1636&q=80',
    },
  ],
};
