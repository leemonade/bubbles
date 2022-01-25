import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mantine/core';
import { LOGIC_OPERATORS } from '../ProgramRules';
import { RuleGroupStyles } from './RuleGroup.styles';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid';
import { Text } from '../../../typography';
import { RuleCondition } from '../RuleCondition/';
import { Button } from '../../../form';
import { Stack } from '../../../layout';
import { Select } from '../../../form';

const PROPTYPES_SHAPE = PropTypes.shape({
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
});

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
  index: PropTypes.number,
  draggableId: PropTypes.string,
  className: PropTypes.string,
  parentOperator: PROPTYPES_SHAPE,
  setParentOperator: PropTypes.func,
  parentGroup: PropTypes.object,
  group: PropTypes.object,
  data: PropTypes.object,
  setData: PropTypes.func,
  edited: PropTypes.array,
  setEdited: PropTypes.func,
  error: PropTypes.bool,
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
  parentOperator,
  setParentOperator,
  parentGroup,
  group,
  data,
  setData,
  edited,
  setEdited,
  error,
  setError,
  errorMessage,
  ...props
}) => {
  const { classes, cx } = RuleGroupStyles({}, { name: 'RuleGroup' });

  const [logicOperator, setLogicOperator] = useState(LOGIC_OPERATORS[0]);

  const addCondition = () => {
    group.conditions.push({
      id: uuidv4(),
      source: '',
      sourceIds: [],
      data: '',
      operator: '',
      target: 0,
    });
    setData({ ...data });
  };

  const addGroup = () => {
    group.conditions.push({
      id: uuidv4(),
      group: {
        operator: LOGIC_OPERATORS[0].value,
        conditions: [
          {
            id: uuidv4(),
            source: '',
            sourceIds: [],
            data: '',
            operator: '',
            target: 0,
          },
        ],
      },
    });
    setData({ ...data });
  };

  const handleDragEnd = ({ source, destination }) => {
    if (!destination) return;

    const [removed] = group.conditions.splice(source.index, 1);
    group.conditions.splice(destination.index, 0, removed);

    setData({ ...data });
  };

  const setGroupOperator = (value) => {
    parentGroup.operator = value;
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
          defaultValue={parentOperator.value}
          value={parentOperator}
          onChange={(e) => {
            setParentOperator({ label: e.toUpperCase(), value: e });
            setGroupOperator(e);
          }}
        />
      );
    } else {
      return <Text>{parentOperator.label}</Text>;
    }
  };

  const uuid = uuidv4();
  const ruleGroup = (
    <Box className={classes.root}>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId={uuid}>
          {(provided, snapshot) => (
            <Box {...provided.droppableProps} ref={provided.innerRef}>
              {group.conditions.map((condition, index) =>
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
                    parentOperator={logicOperator}
                    setParentOperator={setLogicOperator}
                    parentGroup={group}
                    group={condition.group}
                    data={data}
                    setData={setData}
                    edited={edited}
                    setEdited={setEdited}
                    error={error}
                    setError={setError}
                    errorMessage={errorMessage}
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
                    data={data}
                    setData={setData}
                    group={group}
                    condition={condition}
                    edited={edited}
                    setEdited={setEdited}
                    error={error}
                    setError={setError}
                    errorMessage={errorMessage}
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
          <Box className={classes.ruleGroup}>
            {<Box className={classes.logicOperator}>{getLogicOperatorSelect()}</Box>}
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
