import React from 'react';
import { RuleGroup, RULE_GROUP_DEFAULT_PROPS } from './RuleGroup';
import mdx from './RuleGroup.mdx';

export default {
  title: 'leemons/AcademicRules/RuleGroup',
  parameters: {
    component: RuleGroup,
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
  return <RuleGroup {...props}>{children}</RuleGroup>;
};

export const Playground = Template.bind({});

Playground.args = {
  ...RULE_GROUP_DEFAULT_PROPS,
};
