import React from 'react';
import { Title } from '../Title';
import { Text } from '../Text';
import { Box, ContextContainer } from '../../layout';
import { TextClamp, TEXT_CLAMP_DEFAULT_PROPS } from './TextClamp';
import mdx from './TextClamp.mdx';

export default {
  title: 'Atoms/Typography/TextClamp',
  parameters: {
    component: TextClamp,
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
  return (
    <ContextContainer divided style={{ width: 300 }}>
      <Box>
        <TextClamp {...props}>
          <Title>{children}</Title>
        </TextClamp>
      </Box>
      <Box>
        <TextClamp {...props}>
          <Text role="productive" as="p">
            {children}
          </Text>
        </TextClamp>
      </Box>
      <Box>
        <TextClamp {...props}>
          <Text>{children}</Text>
        </TextClamp>
      </Box>
    </ContextContainer>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
  ...TEXT_CLAMP_DEFAULT_PROPS,
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel augue sed ante molestie pharetra. Aliquam facilisis venenatis iaculis.',
};
