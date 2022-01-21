import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mantine/core';
import { PROPTYPES_SHAPE } from '../ProgramRules';
import { RuleGroupStyles } from './RuleGroup.styles';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid';
import { Text } from '../../../typography';
import { RuleCondition } from '../RuleCondition/';
import { Button } from '../../../form';
import { Stack } from '../../../layout';
import { Select } from '../../../form';

export const LOGIC_OPERATORS = [
  { label: 'AND', value: 'and' },
  { label: 'OR', value: 'or' },
];

export const RULE_GROUP_DEFAULT_PROPS = {};
export const RULE_GROUP_PROP_TYPES = {
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
};

const RuleGroup = ({
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
  index,
  draggableId,
  className,
  externalOperator,
  setExternalOperator,
  ...props
}) => {
  const { classes, cx } = RuleGroupStyles({}, { name: 'RuleGroup' });

  const newConditionTemplate = {
    id: uuidv4(),
    source: '',
    sourceIds: [],
    data: '',
    operator: '',
    target: 0,
  };

  const [conditions, setConditions] = useState([
    { id: uuidv4(), source: '', sourceIds: [], data: '', operator: '', target: 0 },
  ]);
  const [logicOperator, setLogicOperator] = useState(LOGIC_OPERATORS[0]);

  const addCondition = () => {
    setConditions([...conditions, newConditionTemplate]);
  };

  const addGroup = () => {
    setConditions([...conditions, { id: uuidv4(), group: { operator: '', conditions: [] } }]);
  };

  const handleDragEnd = ({ source, destination }) => {
    if (!destination) return;

    const newConditions = [...conditions];
    const [removed] = newConditions.splice(source.index, 1);
    newConditions.splice(destination.index, 0, removed);
    setConditions(newConditions);
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
          defaultValue={externalOperator.value}
          value={externalOperator}
          onChange={(e) => {
            setExternalOperator({ label: e.toUpperCase(), value: e });
          }}
        />
      );
    } else {
      return <Text>{externalOperator.label}</Text>;
    }
  };

  const uuid = uuidv4();
  const ruleGroup = (
    <Box className={classes.root}>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId={uuid}>
          {(provided, snapshot) => (
            <Box {...provided.droppableProps} ref={provided.innerRef}>
              {conditions.map((condition, index) =>
                condition.group ? (
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
                    key={condition.id}
                    draggableId={condition.id}
                    index={index}
                    className={classes.draggableGroup}
                    externalOperator={logicOperator}
                    setExternalOperator={setLogicOperator}
                  />
                ) : (
                  <RuleCondition
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
                    logicOperator={logicOperator}
                    setLogicOperator={setLogicOperator}
                    index={index}
                    draggableId={condition.id}
                    key={condition.id}
                    conditions={conditions}
                    setConditions={setConditions}
                    condition={condition}
                  />
                )
              )}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </DragDropContext>
      <Stack direction={'column'} alignItems={'start'}>
        <Button variant={'link'} onClick={addCondition}>
          Add new rule
        </Button>
        <Button variant={'link'} onClick={addGroup}>
          Add new rule group
        </Button>
      </Stack>
    </Box>
  );
  return draggableId ? (
    <Draggable draggableId={draggableId} index={index}>
      {(provided, snapshot) => (
        <Box {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
          <Box className={classes.pepito}>
            {<Box className={classes.logicOperator}>{getLogicOperator()}</Box>}
            <Box className={className}>{ruleGroup}</Box>
          </Box>
        </Box>
      )}
    </Draggable>
  ) : (
    ruleGroup
  );
};

RuleGroup.defaultProps = RULE_GROUP_DEFAULT_PROPS;
RuleGroup.propTypes = RULE_GROUP_PROP_TYPES;

export { RuleGroup };
