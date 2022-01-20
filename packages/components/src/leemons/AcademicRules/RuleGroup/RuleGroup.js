import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mantine/core';
import { PROPTYPES_SHAPE } from '../ProgramRules';
import { RuleGroupStyles } from './RuleGroup.styles';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid';
import { Text } from '../../../typography';
import { RuleCondition } from '../RuleCondition/';
import { Button } from '../../../form';

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

  const [conditions, setConditions] = useState([1, 2, 3, 4]);
  const [logicOperator, setLogicOperator] = useState(LOGIC_OPERATORS[0]);

  const uuid = uuidv4();

  const handleDragEnd = ({ source, destination }) => {
    if (!destination) return;

    const newConditions = [...conditions];
    const [removed] = newConditions.splice(source.index, 1);
    newConditions.splice(destination.index, 0, removed);
    setConditions(newConditions);
  };

  return (
    <Box className={classes.root}>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId={uuid}>
          {(provided, snapshot) => (
            <Box {...provided.droppableProps} ref={provided.innerRef}>
              {/* <Text>Rule group</Text> */}
              {conditions.map((condition, index) => {
                return (
                  <RuleCondition
                    program={program}
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
                    provided={provided}
                    key={index}
                  />
                );
              })}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </DragDropContext>
      <Button variant={'link'}>Add new rule</Button>
    </Box>
  );
};

RuleGroup.defaultProps = RULE_GROUP_DEFAULT_PROPS;
RuleGroup.propTypes = RULE_GROUP_PROP_TYPES;

export { RuleGroup };
