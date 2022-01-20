import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mantine/core';
import { Draggable } from 'react-beautiful-dnd';
import { PROPTYPES_SHAPE } from '../ProgramRules';
import { LOGIC_OPERATORS } from '../RuleGroup';
import { RuleConditionStyles } from './RuleCondition.styles';
import { Text } from '../../../typography';
import { NumberInput, Select, MultiSelect } from '../../../form';
import { v4 as uuidv4 } from 'uuid';

export const RULE_CONDITION_DEFAULT_PROPS = {};
export const RULE_CONDITION_PROP_TYPES = {
  program: PROPTYPES_SHAPE,
  sources: PropTypes.arrayOf(PROPTYPES_SHAPE),
  courses: PropTypes.arrayOf(PROPTYPES_SHAPE),
  knowledges: PropTypes.arrayOf(PROPTYPES_SHAPE),
  subjects: PropTypes.arrayOf(PROPTYPES_SHAPE),
  subjectTypes: PropTypes.arrayOf(PROPTYPES_SHAPE),
  subjectGroups: PropTypes.arrayOf(PROPTYPES_SHAPE),
  dataTypes: PropTypes.arrayOf(PROPTYPES_SHAPE),
  operators: PropTypes.arrayOf(PROPTYPES_SHAPE),
  // logicOperator: PropTypes.shape(),
  setLogicOperator: PropTypes.func,
};

const RuleCondition = ({
  program,
  sources,
  courses,
  knowledges,
  subjects,
  subjectTypes,
  subjectGroups,
  dataTypes,
  operators,
  logicOperator,
  setLogicOperator,
  index,
  provided,
  ...props
}) => {
  const { classes, cx } = RuleConditionStyles({});

  // const [course, setCourse] = useState(null);
  // const [knowledge, setKnowledge] = useState(null);
  // const [subject, setSubject] = useState(null);
  // const [subjectType, setSubjectType] = useState(null);
  // const [subjectGroup, setSubjectGroup] = useState(null);

  const [sourceValue, setSourceValue] = useState(null);

  const getSourceSelect = (value) => {
    switch (value) {
      case 'course':
        return <Select data={courses} placeholder={'Select course...'} />;
      case 'knowledge':
        return <Select data={knowledges} placeholder={'Select knowledge...'} />;
      case 'subject':
        return <Select data={subjects} placeholder={'Select subject...'} />;
      case 'subjectType':
        return <Select data={subjectTypes} placeholder={'Select subject type...'} />;
      case 'subjectGroup':
        return <Select data={subjectGroups} placeholder={'Select subject group...'} />;
      default:
        return null;
    }
  };

  const getLogicOperator = () => {
    if (index === 0) {
      return <Text>Where</Text>;
    }
    if (index === 1) {
      return (
        <Select
          className={classes.input}
          data={LOGIC_OPERATORS}
          defaultValue={logicOperator}
          value={logicOperator}
          onChange={(e) => {
            setLogicOperator({ label: e.toUpperCase(), value: e });
          }}
        />
      );
    } else {
      return <Text>{logicOperator.label}</Text>;
    }
  };

  return (
    <Draggable key={index} draggableId={`${index}`} index={index}>
      {(provided, snapshot) => (
        <Box
          className={classes.root}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Box className={classes.logicOperator}>{getLogicOperator()}</Box>
          <Box className={classes.sourceSelects}>
            <Select data={sources} placeholder={'Select item...'} onChange={setSourceValue} />
            {sourceValue && getSourceSelect(sourceValue)}
          </Box>
          <Select className={classes.input} data={dataTypes} placeholder={'Select data...'} />
          <Select className={classes.input} data={operators} placeholder={'Select operator...'} />
          <NumberInput className={classes.input} placeholder={'Enter value...'} />
        </Box>
      )}
    </Draggable>
  );
};

RuleCondition.defaultProps = RULE_CONDITION_DEFAULT_PROPS;
RuleCondition.propTypes = RULE_CONDITION_PROP_TYPES;

export { RuleCondition };
