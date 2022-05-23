import React from 'react';
import { Box } from '../../layout';
import { ActivityAnswersBar } from './ActivityAnswersBar';
import { ACTIVITY_ANSWERS_BAR_DEFAULT_PROPS } from './ActivityAnswersBar.constants';
import mdx from './ActivityAnswersBar.mdx';
import { DATA, SELECTABLES } from './mock/data';

export default {
  title: 'Organisms/Informative/ActivityAnswersBar',
  parameters: {
    component: ActivityAnswersBar,
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

const Template = ({ wrapperHeight, ...props }) => {
  return (
    <Box style={{ height: wrapperHeight }}>
      <ActivityAnswersBar {...props} />
    </Box>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  wrapperHeight: 270,
  ...ACTIVITY_ANSWERS_BAR_DEFAULT_PROPS,
  data: DATA,
  selectables: SELECTABLES,
};
