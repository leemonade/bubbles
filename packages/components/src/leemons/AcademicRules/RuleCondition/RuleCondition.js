import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mantine/core';
import { Draggable } from 'react-beautiful-dnd';
import { PROPTYPES_SHAPE } from '../ProgramRules';
import { LOGIC_OPERATORS } from '../RuleGroup';
import { RuleConditionStyles } from './RuleCondition.styles';
import { Text } from '../../../typography';
import { NumberInput, Select, MultiSelect } from '../../../form';

export const RULE_CONDITION_DEFAULT_PROPS = {};
export const RULE_CONDITION_PROP_TYPES = {
  program: PROPTYPES_SHAPE,
  grades: PropTypes.arrayOf(PROPTYPES_SHAPE),
  sources: PropTypes.arrayOf(PROPTYPES_SHAPE),
  courses: PropTypes.arrayOf(PROPTYPES_SHAPE),
  knowledges: PropTypes.arrayOf(PROPTYPES_SHAPE),
  subjects: PropTypes.arrayOf(PROPTYPES_SHAPE),
  subjectTypes: PropTypes.arrayOf(PROPTYPES_SHAPE),
  subjectGroups: PropTypes.arrayOf(PROPTYPES_SHAPE),
  dataTypes: PropTypes.arrayOf(PROPTYPES_SHAPE),
  operators: PropTypes.arrayOf(PROPTYPES_SHAPE),
  // logicOperator: PropTypes.shape(PROPTYPES_SHAPE),
  setLogicOperator: PropTypes.func,
};

const RuleCondition = ({
  program,
  grades,
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
  draggableId,
  conditions,
  setConditions,
  condition,
  ...props
}) => {
  const { classes, cx } = RuleConditionStyles({});

  const [sourceValue, setSourceValue] = useState(null);
  const [dataType, setDataType] = useState(null);

  const setNewConditions = (e, field) => {
    const newConditions = [...conditions];
    field === 'source'
      ? newConditions.splice(index, 1, {
          ...condition,
          [field]: e,
          sourceIds: e === 'program' ? [program().value] : [],
        })
      : newConditions.splice(index, 1, { ...condition, [field]: e });
    setConditions(newConditions);
  };

  const getSourceSelect = (value) => {
    switch (value) {
      case 'course':
        return (
          <MultiSelect
            data={courses}
            placeholder={'Select course...'}
            onChange={(e) => setNewConditions(e, 'sourceIds')}
          />
        );
      case 'knowledge':
        return (
          <MultiSelect
            data={knowledges}
            placeholder={'Select knowledge...'}
            onChange={(e) => setNewConditions(e, 'sourceIds')}
          />
        );
      case 'subject':
        return (
          <MultiSelect
            data={subjects}
            placeholder={'Select subject...'}
            onChange={(e) => setNewConditions(e, 'sourceIds')}
          />
        );
      case 'subjectType':
        return (
          <MultiSelect
            data={subjectTypes}
            placeholder={'Select subject type...'}
            onChange={(e) => setNewConditions(e, 'sourceIds')}
          />
        );
      case 'subjectGroup':
        return (
          <MultiSelect
            data={subjectGroups}
            placeholder={'Select subject group...'}
            onChange={(e) => setNewConditions(e, 'sourceIds')}
          />
        );
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
          defaultValue={logicOperator.value}
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
    <Draggable draggableId={draggableId} index={index}>
      {(provided, snapshot) => (
        <Box
          className={classes.root}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Box className={classes.logicOperator}>{getLogicOperator()}</Box>
          <Box className={classes.sourceSelects}>
            <Select
              data={sources}
              placeholder={'Select item...'}
              onChange={(e) => {
                setSourceValue(e);
                setNewConditions(e, 'source');
              }}
            />
            {sourceValue && getSourceSelect(sourceValue)}
          </Box>
          <Select
            className={classes.input}
            data={dataTypes}
            placeholder={'Select data...'}
            onChange={(e) => {
              setDataType(e);
              setNewConditions(e, 'data');
            }}
          />
          <Select
            className={classes.input}
            data={operators}
            placeholder={'Select operator...'}
            onChange={(e) => setNewConditions(e, 'operator')}
          />
          {dataType === 'gpa' || dataType === 'grade' ? (
            <Select
              className={classes.input}
              data={grades}
              placeholder={'Select grade...'}
              onChange={(e) => setNewConditions(e, 'target')}
            />
          ) : (
            <NumberInput
              className={classes.input}
              placeholder={'Enter value...'}
              onChange={(e) => setNewConditions(e, 'target')}
            />
          )}
        </Box>
      )}
    </Draggable>
  );
};

RuleCondition.defaultProps = RULE_CONDITION_DEFAULT_PROPS;
RuleCondition.propTypes = RULE_CONDITION_PROP_TYPES;

export { RuleCondition };
