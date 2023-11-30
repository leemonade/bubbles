import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { TotalLayoutHeader } from './TotalLayoutHeader';
import { TOTAL_LAYOUT_HEADER_DEFAULT_PROPS } from './TotalLayoutHeader.constants';
import mdx from './TotalLayoutHeader.mdx';
import { ContextContainer } from '../../ContextContainer';

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
  argTypes: {},
};

const MockComponent = () => (
  <div>MOCK COMPONENT CHILD OF TOTAL LAYOUT HEADER - RESPECTS PADDING</div>
);
const Template = (props) => {
  const formMethods = useForm();

  return (
    <FormProvider {...formMethods}>
      <ContextContainer
        id="container-for-storybook"
        divided
        style={{ width: '100wh', margin: '-16px', backgroundColor: '#d9d9d9' }}
      >
        <TotalLayoutHeader {...props} />
        <TotalLayoutHeader {...props}>
          <MockComponent />
        </TotalLayoutHeader>
      </ContextContainer>
    </FormProvider>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
  ...TOTAL_LAYOUT_HEADER_DEFAULT_PROPS,
  padding: 3,
};
