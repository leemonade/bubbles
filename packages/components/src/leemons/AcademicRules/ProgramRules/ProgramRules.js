import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mantine/core';
import { ProgramRulesStyles } from './ProgramRules.styles';

export const PROPTYPES_SHAPE = PropTypes.shape({
  label: PropTypes.string,
  value: PropTypes.string,
});

export const PROGRAM_RULES_DEFAULT_PROPS = {};
export const PROGRAM_RULES_PROP_TYPES = {
  programs: PropTypes.arrayOf(PROPTYPES_SHAPE),
  grades: PropTypes.arrayOf(PROPTYPES_SHAPE),
  sources: PropTypes.arrayOf(PROPTYPES_SHAPE),
  courses: PropTypes.arrayOf(PROPTYPES_SHAPE),
  knowledges: PropTypes.arrayOf(PROPTYPES_SHAPE),
  subjects: PropTypes.arrayOf(PROPTYPES_SHAPE),
  subjectTypes: PropTypes.arrayOf(PROPTYPES_SHAPE),
  subjectGroups: PropTypes.arrayOf(PROPTYPES_SHAPE),
  dataTypes: PropTypes.arrayOf(PROPTYPES_SHAPE),
  operators: PropTypes.arrayOf(PROPTYPES_SHAPE),
  onChange: PropTypes.func,
};

const ProgramRules = ({
  programs,
  grades,
  sources,
  courses,
  knowledges,
  subjects,
  subjectTypes,
  subjectGroups,
  dataTypes,
  operators,
  onChange,
  ...props
}) => {
  const { classes, cx } = ProgramRulesStyles({});

  return <Box className={classes.root}>Program rules</Box>;
};

ProgramRules.defaultProps = PROGRAM_RULES_DEFAULT_PROPS;
ProgramRules.propTypes = PROGRAM_RULES_PROP_TYPES;

export { ProgramRules };
