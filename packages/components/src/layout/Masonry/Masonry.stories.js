import React, { useState, useMemo, useEffect } from 'react';
import { Paper } from '../Paper';
import { Text } from '../../typography';
import { Masonry, MASONRY_DEFAULT_PROPS } from './Masonry';
import mdx from './Masonry.mdx';

export default {
  title: 'Atoms/Layout/Masonry',
  parameters: {
    component: Masonry,
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

const Template = ({ test_nchildren, ...props }) => {
  const [list, setList] = useState([...Array(test_nchildren).keys()]);

  useEffect(() => setList([...Array(test_nchildren).keys()]), [test_nchildren]);

  return (
    <Paper color="solid" shadow="none" fullWidth>
      <Masonry {...props}>
        {list.map((item, index) => (
          <Paper key={index}>
            <Text>{item + 1}</Text>
          </Paper>
        ))}
      </Masonry>
    </Paper>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
  ...MASONRY_DEFAULT_PROPS,
  test_nchildren: 10,
};
