import React from 'react';
import { Button } from '../../form';
import { Popover, POPOVER_DEFAULT_PROPS } from './Popover';
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
    // myBooleanProp: { control: { type: 'boolean' } },
    // mySelectProp: { options: ['Hello', 'World'], control: { type: 'select' } },
  },
};

const Template = ({ children, ...props }) => {
  const [opened, setOpened] = React.useState(false);
  return (
    <Popover
      opened={opened}
      target={<Button onClick={() => setOpened(!opened)}>Toggle popover</Button>}
      position="bottom"
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
  ...POPOVER_DEFAULT_PROPS,
};
