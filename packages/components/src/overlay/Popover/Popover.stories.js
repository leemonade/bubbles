import React, { useEffect } from 'react';
import { Button } from '../../form';
import { Popover } from './Popover';
import { POPOVER_DEFAULT_PROPS, POPOVER_POSITIONS } from './Popover.constants';
import mdx from './Popover.mdx';
import { Text } from '../../typography';
import { Box } from '../../layout';

export default {
  title: 'Atoms/Overlay/Popover',
  parameters: {
    component: Popover,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    position: { options: POPOVER_POSITIONS, control: { type: 'select' } },
    // myBooleanProp: { control: { type: 'boolean' } },
    // mySelectProp: { options: ['Hello', 'World'], control: { type: 'select' } },
  },
};

const Template = ({ children, opened: _opened, ...props }) => {
  const [opened, setOpened] = React.useState(_opened);

  useEffect(() => {
    setOpened(_opened);
  }, [_opened]);

  return (
    <Popover
      opened={opened}
      target={<Button onClick={() => setOpened(!opened)}>Toggle popover</Button>}
      {...props}
    >
      {children}
      <Box style={{ padding: 8 }}>
        <Text color="primary" size="lg">
          I'm a popover
        </Text>
      </Box>
    </Popover>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  opened: false,
  ...POPOVER_DEFAULT_PROPS,
};
