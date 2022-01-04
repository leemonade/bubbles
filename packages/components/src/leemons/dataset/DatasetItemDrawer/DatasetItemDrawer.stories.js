import React, { useState } from 'react';
import { DATASET_ITEM_DRAWER_DEFAULT_PROPS, DatasetItemDrawer } from './DatasetItemDrawer';
import mdx from './DatasetItemDrawer.mdx';
import { Button } from '../../../form';

export default {
  title: 'Leemons/Dataset/DatasetItemDrawer',
  parameters: {
    component: DatasetItemDrawer,
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
  const [opened, setOpened] = useState(true);

  return (
    <>
      <Button color="secondary" onClick={() => setOpened(true)}>
        OPEN
      </Button>
      <DatasetItemDrawer
        {...props}
        defaultValues={{ config: { centers: ['*'] } }}
        opened={opened}
        onClose={() => setOpened(false)}
      />
    </>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
  ...DATASET_ITEM_DRAWER_DEFAULT_PROPS,
};
