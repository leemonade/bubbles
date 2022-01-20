import React from 'react';
import { RuleCondition, RULE_CONDITION_DEFAULT_PROPS } from './RuleCondition';
import mdx from './RuleCondition.mdx';
import { v4 as uuidv4 } from 'uuid';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

export default {
  title: 'leemons/AcademicRules/RuleCondition',
  parameters: {
    component: RuleCondition,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {},
};

const Template = ({ children, ...props }) => {
  const uuid = uuidv4();

  return (
    <DragDropContext>
      <Droppable droppableId={uuid}>
        {(provided, snapshot) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            <RuleCondition provided={provided} {...props}>
              {children}
            </RuleCondition>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  ...RULE_CONDITION_DEFAULT_PROPS,
  sources: [
    {
      label: 'Program',
      value: 'program',
    },
    {
      label: 'Course',
      value: 'course',
    },
    {
      label: 'Knowledge',
      value: 'knowledge',
    },
    {
      label: 'Subject',
      value: 'subject',
    },
    {
      label: 'Subject-type',
      value: 'subjectType',
    },
    {
      label: 'Subject-group',
      value: 'subjectGroup',
    },
  ],
  dataTypes: [
    {
      label: 'Media',
      value: 'gpa',
    },
    {
      label: 'Credits per program',
      value: 'cpp',
    },
    {
      label: 'Credits per course',
      value: 'cpc',
    },
    {
      label: 'Credits per course group',
      value: 'cpcg',
    },
    {
      label: 'Grade',
      value: 'grade',
    },
    {
      label: 'Enrolled',
      value: 'enrolled',
    },
    {
      label: 'Credits',
      value: 'credits',
    },
  ],
  operators: [
    {
      label: 'Greater than',
      value: 'gt',
    },
    {
      label: 'Greater than or equal',
      value: 'gte',
    },
    {
      label: 'Equal',
      value: 'eq',
    },
    {
      label: 'Less than or equal',
      value: 'lte',
    },
    {
      label: 'Less than',
      value: 'lt',
    },
    {
      label: 'Not equal',
      value: 'neq',
    },
    {
      label: 'Contains',
      value: 'contains',
    },
  ],
  courses: [
    {
      label: 'Course1',
      value: 'course1',
    },
    {
      label: 'Course2',
      value: 'course2',
    },
    {
      label: 'Course3',
      value: 'course3',
    },
    {
      label: 'Course4',
      value: 'course4',
    },
    {
      label: 'Course5',
      value: 'course5',
    },
  ],
  knowledges: [
    {
      label: 'English',
      value: 'english',
    },
    {
      label: 'Math',
      value: 'math',
    },
    {
      label: 'Science',
      value: 'science',
    },
    {
      label: 'History',
      value: 'history',
    },
    {
      label: 'Sports',
      value: 'sports',
    },
  ],
  subjects: [
    {
      label: 'Subject1',
      value: 'subject1',
    },
    {
      label: 'Subject2',
      value: 'subject2',
    },
    {
      label: 'Subject3',
      value: 'subject3',
    },
    {
      label: 'Subject4',
      value: 'subject4',
    },
    {
      label: 'Subject5',
      value: 'subject5',
    },
  ],
  subjectTypes: [
    {
      label: 'Type1',
      value: 'type1',
    },
    {
      label: 'Type2',
      value: 'type2',
    },
    {
      label: 'Type3',
      value: 'type3',
    },
    {
      label: 'Type4',
      value: 'type4',
    },
    {
      label: 'Type5',
      value: 'type5',
    },
  ],
  subjectGroups: [
    {
      label: 'Group1',
      value: 'group1',
    },
    {
      label: 'Group2',
      value: 'group2',
    },
    {
      label: 'Group3',
      value: 'group3',
    },
    {
      label: 'Group4',
      value: 'group4',
    },
    {
      label: 'Group5',
      value: 'group5',
    },
  ],
  logicOperator: { label: 'AND', value: 'and' },
  uuid: uuidv4(),
  index: 0,
};
