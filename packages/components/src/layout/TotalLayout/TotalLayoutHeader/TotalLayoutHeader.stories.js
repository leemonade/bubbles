import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { TotalLayoutHeader } from './TotalLayoutHeader';
import { TOTAL_LAYOUT_HEADER_DEFAULT_PROPS } from './TotalLayoutHeader.constants';
import mdx from './TotalLayoutHeader.mdx';
import { ContextContainer } from '../../ContextContainer';
import { Stack } from '../../Stack';
import { Box } from '../../Box';
import { Button } from '../../../form/Button';

export default {
  title: 'Atoms/Layout/TotalLayout/TotalLayoutHeader',
  parameters: {
    component: TotalLayoutHeader,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    direction: {
      control: 'select',
      options: ['row', 'column'],
    },
  },
};

const MockComponent = () => (
  <div>MOCK COMPONENT CHILD OF TOTAL LAYOUT HEADER - RESPECTS PADDING</div>
);

const OtherMockComponent = () => (
  <Stack>
    <Button variant="link">Button A</Button>
    <Button variant="link">Button B</Button>
    <Button variant="link">Button C</Button>
  </Stack>
);
const Template = (props) => {
  const formMethods = useForm();

  return (
    <FormProvider {...formMethods}>
      <Box style={{ height: '100vh', width: '100wh', margin: '-16px', backgroundColor: '#f8f9fb' }}>
        <ContextContainer
          id="container-for-storybook"
          divided
          padded
        >
          <TotalLayoutHeader {...props} />

          <TotalLayoutHeader {...props}>
            <MockComponent />
          </TotalLayoutHeader>

          <TotalLayoutHeader {...props} icon={null} direction="row">
            <OtherMockComponent />
          </TotalLayoutHeader>
        </ContextContainer>
      </Box>
    </FormProvider>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
  ...TOTAL_LAYOUT_HEADER_DEFAULT_PROPS,
};
