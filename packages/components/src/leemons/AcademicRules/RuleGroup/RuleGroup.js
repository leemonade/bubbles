import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mantine/core';
import { PROPTYPES_SHAPE } from '../ProgramRules';
import { RuleGroupStyles } from './RuleGroup.styles';

export const LOGIC_OPERATORS = [
  { label: 'AND', value: 'and' },
  { label: 'OR', value: 'or' },
];

export const RULE_GROUP_DEFAULT_PROPS = {};
export const RULE_GROUP_PROP_TYPES = {
  program: PROPTYPES_SHAPE,
  sources: PropTypes.arrayOf(PROPTYPES_SHAPE),
  courses: PropTypes.arrayOf(PROPTYPES_SHAPE),
  knowledges: PropTypes.arrayOf(PROPTYPES_SHAPE),
  subjects: PropTypes.arrayOf(PROPTYPES_SHAPE),
  subjectTypes: PropTypes.arrayOf(PROPTYPES_SHAPE),
  subjectGroups: PropTypes.arrayOf(PROPTYPES_SHAPE),
  dataTypes: PropTypes.arrayOf(PROPTYPES_SHAPE),
  operators: PropTypes.arrayOf(PROPTYPES_SHAPE),
};

const RuleGroup = ({
  program,
  sources,
  courses,
  knowledges,
  subjects,
  subjectTypes,
  subjectGroups,
  dataTypes,
  operators,
  ...props
}) => {
  const { classes, cx } = RuleGroupStyles({});

  const [logicOperator, setLogicOperator] = useState(LOGIC_OPERATORS[0].label);

  return <Box className={classes.root}>Rule group</Box>;
};

RuleGroup.defaultProps = RULE_GROUP_DEFAULT_PROPS;
RuleGroup.propTypes = RULE_GROUP_PROP_TYPES;

export { RuleGroup };
