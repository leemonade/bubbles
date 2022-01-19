import React, { useState } from 'react';
import { Box } from '@mantine/core';
import { Button } from '../Button';
import { Popover } from '../../overlay';
import { ColorPicker, COLOR_PICKER_DEFAULT_PROPS, COLOR_PICKER_FORMATS } from './ColorPicker';
import mdx from './ColorPicker.mdx';

export default {
  title: 'Molecules/Form/ColorPicker',
  parameters: {
    component: ColorPicker,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    onChange: { action: 'Color Changed' },
    format: { options: COLOR_PICKER_FORMATS, control: { type: 'select' } },
  },
};

const Template = ({ ...props }) => {
  return <ColorPicker {...props} />;
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
        width={260}
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
