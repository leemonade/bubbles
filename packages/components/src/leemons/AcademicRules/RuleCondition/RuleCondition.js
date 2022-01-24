import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mantine/core';
import { Draggable } from 'react-beautiful-dnd';
import { LOGIC_OPERATORS } from '../ProgramRules';
import { RuleConditionStyles } from './RuleCondition.styles';
import { Text } from '../../../typography';
import { NumberInput, Select, MultiSelect, TextInput } from '../../../form';

const PROPTYPES_SHAPE = PropTypes.shape({
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
});

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
  logicOperator: PROPTYPES_SHAPE,
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
  data,
  setData,
  condition,
  group,
  ...props
}) => {
  const { classes, cx } = RuleConditionStyles({});

  const [sourceValue, setSourceValue] = useState(null);
  const [dataType, setDataType] = useState(null);
  const [operatorValue, setOperatorValue] = useState(null);
  const [targetValue, setTargetValue] = useState('');

  const setNewData = (e, field) => {
    if (field === 'source') {
      condition[field] = e;
      condition.sourceIds = [];
      if (e === 'program') condition.sourceIds = [program.value];
    }
    condition[field] = e;
    setData({ ...data });
  };

  const getSourceSelect = (value) => {
    switch (value) {
      case 'course':
        return (
          <MultiSelect
            data={courses}
            placeholder={'Select course...'}
            onChange={(e) => setNewData(e, 'sourceIds')}
          />
        );
      case 'knowledge':
        return (
          <MultiSelect
            data={knowledges}
            placeholder={'Select knowledge...'}
            onChange={(e) => setNewData(e, 'sourceIds')}
          />
        );
      case 'subject':
        return (
          <MultiSelect
            data={subjects}
            placeholder={'Select subject...'}
            onChange={(e) => setNewData(e, 'sourceIds')}
          />
        );
      case 'subjectType':
        return (
          <MultiSelect
            data={subjectTypes}
            placeholder={'Select subject type...'}
            onChange={(e) => setNewData(e, 'sourceIds')}
          />
        );
      case 'subjectGroup':
        return (
          <MultiSelect
            data={subjectGroups}
            placeholder={'Select subject group...'}
            onChange={(e) => setNewData(e, 'sourceIds')}
          />
        );
      default:
        return null;
    }
  };

  const setGroupOperator = (value) => {
    group.operator = value;
    setData({ ...data });
  };

  const getLogicOperatorSelect = () => {
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
            setGroupOperator(e);
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
          <Box className={classes.logicOperator}>{getLogicOperatorSelect()}</Box>
          <Box className={classes.sourceSelects}>
            <Select
              data={sources}
              placeholder={'Select item...'}
              onChange={(e) => {
                setSourceValue(e);
                setNewData(e, 'source');
              }}
              disabled={!program}
            />
            {sourceValue && getSourceSelect(sourceValue)}
          </Box>
          <Select
            className={classes.input}
            data={dataTypes}
            placeholder={'Select data...'}
            onChange={(e) => {
              setDataType(e);
              setNewData(e, 'data');
            }}
            disabled={!sourceValue}
          />
          <Select
            className={classes.input}
            data={operators}
            placeholder={'Select operator...'}
            onChange={(e) => {
              setOperatorValue(e);
              setNewData(e, 'operator');
            }}
            disabled={!dataType}
          />
          {dataType === 'gpa' || dataType === 'grade' ? (
            <Select
              className={classes.input}
              data={grades}
              placeholder={'Select grade...'}
              onChange={(e) => setNewData(e, 'target')}
              disabled={!operatorValue}
            />
          ) : operatorValue === 'contains' ? (
            <TextInput
              className={classes.input}
              placeholder={'Enter value...'}
              value={targetValue}
              onChange={(e) => {
                setTargetValue(e);
                setNewData(e, 'target');
              }}
              disabled={!operatorValue}
            />
          ) : (
            <NumberInput
              className={classes.input}
              placeholder={'Enter value...'}
              value={condition.target}
              onChange={(e) => setNewData(e, 'target')}
              disabled={!operatorValue}
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
