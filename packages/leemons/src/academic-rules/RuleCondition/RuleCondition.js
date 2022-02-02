import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import { LOGIC_OPERATORS } from '../ProgramRules';
import { RuleConditionStyles } from './RuleCondition.styles';
import { Box, NumberInput, Paper, Select, Stack, Text, TextInput } from '@bubbles-ui/components';
import { MultiSelect } from '@bubbles-ui/components/src/form/';
import { Menu } from '@bubbles-ui/components/src/navigation';
import { DeleteBinIcon } from '@bubbles-ui/icons/solid';
import { DuplicateIcon, SwitchHorizontalIcon } from '@bubbles-ui/icons/outline';
import { v4 as uuidv4 } from 'uuid';
import { filter } from 'lodash';

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
  index: PropTypes.number,
  draggableId: PropTypes.string,
  data: PropTypes.object,
  setData: PropTypes.func,
  condition: PropTypes.object,
  group: PropTypes.object,
  edited: PropTypes.array,
  setEdited: PropTypes.func,
  error: PropTypes.bool,
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
  edited,
  setEdited,
  error,
  setError,
  errorMessage,
  ...props
}) => {
  const { classes, cx } = RuleConditionStyles({}, { name: 'RuleCondition' });

  const [sourceValue, setSourceValue] = useState(condition.source || '');
  const [sourceIdsValue, setSourceIdsValue] = useState(condition.sourceIds || []);
  const [dataType, setDataType] = useState(condition.data || '');
  const [operatorValue, setOperatorValue] = useState(condition.operator || '');
  const [targetValue, setTargetValue] = useState(condition.target || '');

  const setNewData = (e, field) => {
    if (field === 'source') {
      condition[field] = e;
      condition.sourceIds = [];
      setSourceIdsValue([]);
      if (e === 'program') {
        condition.sourceIds = [program.value];
        setSourceIdsValue([program.value]);
      }
    }
    if (field === 'sourceIds') setSourceIdsValue(e);
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
            value={sourceIdsValue}
            onChange={(e) => setNewData(e, 'sourceIds')}
          />
        );
      case 'knowledge':
        return (
          <MultiSelect
            data={knowledges}
            placeholder={'Select knowledge...'}
            value={sourceIdsValue}
            onChange={(e) => setNewData(e, 'sourceIds')}
          />
        );
      case 'subject':
        return (
          <MultiSelect
            data={subjects}
            placeholder={'Select subject...'}
            value={sourceIdsValue}
            onChange={(e) => setNewData(e, 'sourceIds')}
          />
        );
      case 'subjectType':
        return (
          <MultiSelect
            data={subjectTypes}
            placeholder={'Select subject type...'}
            value={sourceIdsValue}
            onChange={(e) => setNewData(e, 'sourceIds')}
          />
        );
      case 'subjectGroup':
        return (
          <MultiSelect
            data={subjectGroups}
            placeholder={'Select subject group...'}
            value={sourceIdsValue}
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
      return <Text role="productive">Where</Text>;
    }
    if (index === 1) {
      return (
        <Select
          className={classes.input}
          data={LOGIC_OPERATORS}
          value={logicOperator.value}
          onChange={(e) => {
            setLogicOperator({ label: e.toUpperCase(), value: e });
            setGroupOperator(e);
          }}
        />
      );
    } else {
      return (
        <Box m={10}>
          <Text role="productive">{logicOperator.label}</Text>
        </Box>
      );
    }
  };

  const removeCondition = () => {
    group.conditions.splice(index, 1);
    setData({ ...data });
  };

  const duplicateCondition = () => {
    group.conditions.push({ ...condition, id: uuidv4() });
    setData({ ...data });
  };

  const turnToGroup = () => {
    group.conditions.splice(index, 1, {
      id: uuidv4(),
      group: { operator: 'and', conditions: [condition] },
    });
    setData({ ...data });
  };

  const filteredDataTypes = useMemo(() => {
    let results = [];
    if (sourceValue && dataTypes) {
      let filters = [];
      switch (sourceValue) {
        case 'program':
          filters = ['cpp', 'cpc', 'gpa'];
          break;
        case 'course':
          filters = ['cpc', 'gpa'];
          break;
        case 'knowledge':
        case 'subject-type':
          filters = ['cpp', 'cpc', 'gpa', 'cbcg'];
          break;
        case 'subject':
          filters = ['grade', 'enrolled'];
          break;
        case 'subject-group':
          filters = ['gpa', 'credits'];
          break;
        default:
          break;
      }
      return filter(dataTypes, (item) => filters.includes(item.value));
    }
    return results;
  }, [sourceValue, dataTypes]);

  useEffect(() => {
    setEdited(
      edited.map((item) => {
        if (item.id === draggableId) {
          if (targetValue === '' || !targetValue || targetValue === 0) {
            return {
              ...item,
              value: false,
            };
          }
          return {
            ...item,
            value: true,
          };
        }
        return item;
      })
    );
  }, [targetValue]);

  useEffect(() => {
    if (edited.filter((item) => item.value === false).length === 0) {
      setError(false);
    }
  }, [edited]);

  useEffect(() => {
    setEdited([...edited, { id: draggableId, value: false }]);
  }, []);

  return (
    <Draggable draggableId={draggableId} index={index}>
      {(provided, snapshot) => (
        <Paper
          fullWidth
          padding="none"
          shadow="none"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Box className={classes.root}>
            <Box className={classes.logicOperator}>{getLogicOperatorSelect()}</Box>
            <Stack fullWidth spacing={1}>
              <Box className={classes.sourceSelects} skipFlex>
                <Select
                  className={classes.input}
                  data={sources}
                  placeholder={'Select item...'}
                  value={sourceValue}
                  onChange={(e) => {
                    setSourceValue(e);
                    setNewData(e, 'source');
                  }}
                  disabled={!program}
                />

                {sourceValue && getSourceSelect(sourceValue)}
              </Box>
              <Select
                data={filteredDataTypes}
                placeholder={'Select data...'}
                value={dataType}
                onChange={(e) => {
                  setDataType(e);
                  setNewData(e, 'data');
                }}
                disabled={!sourceValue}
              />
              <Select
                data={operators}
                placeholder={'Select operator...'}
                value={operatorValue}
                onChange={(e) => {
                  setOperatorValue(e);
                  setNewData(e, 'operator');
                }}
                disabled={!dataType}
              />
              {dataType === 'gpa' || dataType === 'grade' ? (
                <Select
                  data={grades}
                  placeholder={'Select grade...'}
                  value={targetValue}
                  onChange={(e) => {
                    setTargetValue(e);
                    setNewData(e, 'target');
                  }}
                  disabled={!operatorValue}
                  error={error && !targetValue ? errorMessage || 'Please select a grade' : null}
                  required
                />
              ) : operatorValue === 'contains' ? (
                <TextInput
                  placeholder={'Enter value...'}
                  value={targetValue}
                  onChange={(e) => {
                    setTargetValue(e);
                    setNewData(e, 'target');
                  }}
                  disabled={!operatorValue}
                  error={error && !targetValue ? errorMessage || 'Please select a grade' : null}
                  required
                />
              ) : (
                <NumberInput
                  placeholder={'Enter value...'}
                  defaultValue={0}
                  value={targetValue}
                  onChange={(e) => {
                    setTargetValue(e);
                    setNewData(e, 'target');
                  }}
                  disabled={!operatorValue}
                  error={error && !targetValue ? errorMessage || 'Please select a grade' : null}
                  required
                />
              )}
            </Stack>
            <Menu
              items={[
                { children: 'Remove', icon: <DeleteBinIcon />, onClick: removeCondition },
                { children: 'Duplicate', icon: <DuplicateIcon />, onClick: duplicateCondition },
                {
                  children: 'Turn into group',
                  icon: <SwitchHorizontalIcon />,
                  onClick: turnToGroup,
                },
              ]}
            />
          </Box>
        </Paper>
      )}
    </Draggable>
  );
};

RuleCondition.defaultProps = RULE_CONDITION_DEFAULT_PROPS;
RuleCondition.propTypes = RULE_CONDITION_PROP_TYPES;

export { RuleCondition };
