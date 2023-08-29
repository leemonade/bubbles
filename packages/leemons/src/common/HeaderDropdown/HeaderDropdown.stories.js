import React from 'react';
import { Box } from '@bubbles-ui/components';
import { HeaderDropdown } from './HeaderDropdown';
import { HEADER_DROPDOWN_DEFAULT_PROPS } from './HeaderDropdown.constants';
import { DROPDOWN_DATA } from './mock/data';
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
  argTypes: {
    onChange: { action: 'onChange' },
  },
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
  data: DROPDOWN_DATA,
  value: {
    id: '',
  },
};
