import React from 'react';
import { XCircleIcon} from '@heroicons/react/solid';
import { Group, Container, Divider, Box } from '@mantine/core';
import { Input, INPUT_SIZES } from './Input';
import mdx from './Input.mdx';




export default {
  title: 'Form/Input',
  parameters: {
    component: Input,
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    size: { options: INPUT_SIZES, control: { type: 'select' } },
    invalid: { control: { type: 'boolean' } },

  },
};

const Template = (props) => { 
  return (
    <Container size="xl" padding="xs">
      <Group grow withGutter>
        <Box style={{ width: '80%' }}>
          <Input
            {...props}
            placeholder="Placeholder"
            rightSection={
              <XCircleIcon
                style={{ height: '1.2rem' }}
              />
            }
          />
        </Box>
        {/* <Divider orientation="vertical" mx="sm" /> */}
      </Group>
    </Container>
  );
};
export const DefaultInput = Template.bind({});

DefaultInput.args = {
  size: 'sm',
  invalid: false,
  disabled: false,
  showRightSection: false,
};
