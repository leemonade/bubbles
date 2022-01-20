import React from 'react';
import { ProgramRules, PROGRAM_RULES_DEFAULT_PROPS } from './ProgramRules';
import mdx from './ProgramRules.mdx';

export default {
  title: 'leemons/AcademicRules/ProgramRules',
  parameters: {
    component: ProgramRules,
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

const Template = ({ children, ...props }) => {
  return <ProgramRules {...props}>{children}</ProgramRules>;
};

export const Playground = Template.bind({});

Playground.args = {
  ...PROGRAM_RULES_DEFAULT_PROPS,
};
