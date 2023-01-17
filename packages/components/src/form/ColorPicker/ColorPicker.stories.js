import React, { useState } from 'react';
import { Box, Paper } from '../../layout';
import { Button } from '../Button';
import { Popover } from '../../overlay';

import { ColorPicker, COLOR_PICKER_DEFAULT_PROPS, COLOR_PICKER_FORMATS } from './ColorPicker';
import mdx from './ColorPicker.mdx';

export default {
  title: 'BB1/ColorPicker',
  parameters: {
    component: ColorPicker,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB/%F0%9F%8D%8B%F0%9F%92%A7-Bubbles-SD-v2?node-id=3652%3A33463',
    },
  },
  argTypes: {
    onChange: { action: 'Color Changed' },
    format: { options: COLOR_PICKER_FORMATS, control: { type: 'select' } },
    lightness: { control: 'number' },
    saturation: { control: 'number' },
  },
};

const Template = ({ ...props }) => {
  return (
    <Paper padding="sm" style={{ width: 300 }}>
      <ColorPicker {...props} />
    </Paper>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  ...COLOR_PICKER_DEFAULT_PROPS,
};

const DropdownTemplate = ({ ...props }) => {
  const [opened, setOpened] = useState(false);
  return (
    <Box style={{ textAlign: 'center' }}>
      <Popover
        opened={opened}
        onClose={() => setOpened(false)}
        target={<Button onClick={() => setOpened((o) => !o)}>Toggle popover</Button>}
        width={200}
        position="bottom"
      >
        <Box style={{ display: 'flex' }}>
          <ColorPicker {...props} />
        </Box>
      </Popover>
    </Box>
  );
};

export const DropdownExample = DropdownTemplate.bind({});

DropdownExample.args = {
  ...COLOR_PICKER_DEFAULT_PROPS,
};
