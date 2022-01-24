import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mantine/core';
import { ProgramRulesStyles } from './ProgramRules.styles';
import { RuleGroup } from '../RuleGroup';
import { v4 as uuidv4 } from 'uuid';
import { Stack } from '../../../layout';
import { Button, Select, TextInput } from '../../../form';
import { isFunction } from 'lodash';

const PROPTYPES_SHAPE = PropTypes.shape({
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
});

export const LOGIC_OPERATORS = [
  { label: 'AND', value: 'and' },
  { label: 'OR', value: 'or' },
];

export const PROGRAM_RULES_DEFAULT_PROPS = {};
export const PROGRAM_RULES_PROP_TYPES = {
  programs: PropTypes.arrayOf(PROPTYPES_SHAPE),
  grades: PropTypes.arrayOf(PROPTYPES_SHAPE),
  gradeSystem: PropTypes.arrayOf(PROPTYPES_SHAPE),
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
  gradeSystems,
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

  const [data, setData] = useState({
    name: '',
    program: '',
    grade: '',
    group: {
      operator: LOGIC_OPERATORS[0].value,
      conditions: [{ id: uuidv4(), source: '', sourceIds: [], data: '', operator: '', target: 0 }],
    },
  });
  const [logicOperator, setLogicOperator] = useState(LOGIC_OPERATORS[0]);
  const [nameValue, setNameValue] = useState('');
  const [program, setProgram] = useState(null);

  const handleOnChange = (data) => {
    isFunction(onChange) && onChange(data);
  };

  return (
    <Box className={classes.root}>
      <Stack justifyContent={'space-between'} fullWidth>
        <TextInput
          placeholder={'Program name'}
          value={nameValue}
          onChange={(e) => {
            setNameValue(e);
            setData({ ...data, name: e });
          }}
        />
        <Button onClick={() => handleOnChange(data)}>Save</Button>
      </Stack>
      <Stack fullWidth>
        <Select
          data={programs}
          placeholder={'Select a program...'}
          onChange={(e) => {
            setProgram(programs.find((obj) => obj.value === e));
            setData({ ...data, program: e });
          }}
        />
        <Select
          data={gradeSystems}
          placeholder={'Select a grade system...'}
          className={classes.gradeSelect}
          onChange={(e) => {
            setProgram(gradeSystems.find((obj) => obj.value === e));
            setData({ ...data, grade: e });
          }}
        />
      </Stack>
      <RuleGroup
        program={program}
        grades={grades}
        sources={sources}
        courses={courses}
        knowledges={knowledges}
        subjects={subjects}
        subjectTypes={subjectTypes}
        subjectGroups={subjectGroups}
        dataTypes={dataTypes}
        operators={operators}
        externalOperator={logicOperator}
        setExternalOperator={setLogicOperator}
        group={data.group}
        data={data}
        setData={setData}
      />
    </Box>
  );
};

ProgramRules.defaultProps = PROGRAM_RULES_DEFAULT_PROPS;
ProgramRules.propTypes = PROGRAM_RULES_PROP_TYPES;

export { ProgramRules };
