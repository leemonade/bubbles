import React from 'react';
import { Box, createStyles } from '@bubbles-ui/components';
import { TaskDeadlineHeader } from './TaskDeadlineHeader';
import { TASK_DEADLINE_HEADER_DEFAULT_PROPS } from './TaskDeadlineHeader.constants';
import mdx from './TaskDeadlineHeader.mdx';
import { HeaderBackground } from '../HeaderBackground';

export default {
  title: 'leemons/Common/TaskDeadlineHeader',
  parameters: {
    component: TaskDeadlineHeader,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    locale: { options: ['en', 'es', 'fr'], control: { type: 'select' } },
    onDeadlineChange: { action: 'onDeadlineChange' },
    onCloseTask: { action: 'onCloseTask' },
  },
};

const Template = ({ ...props }) => {
  return <TaskDeadlineHeader {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  ...TASK_DEADLINE_HEADER_DEFAULT_PROPS,
  isStarted: false,
  title: 'Los romanos',
  subtitle: 'Historia - G01',
  icon: 'https://static.thenounproject.com/png/447685-200.png',
  color: '#FABADA',
  startDate: new Date('2022-12-10 18:00:00'),
  deadline: new Date('2022-12-10 22:00:00'),
  locale: 'en',
  labels: {
    noDeadline: 'No deadline',
    deadline: 'Deadline',
    deadlineExtraTime: 'Add extra time',
    closeTask: 'Close task',
    archiveTask: 'Archive task',
    save: 'Update',
    cancel: 'Cancel',
    period: 'Tipo de periodo',
    startDate: 'Fecha de inicio',
    startHour: 'Hora de inicio',
    endDate: 'Fecha de fin',
    endHour: 'Hora de fin',
    closedPeriod: 'Periodo cerrado',
    liveSession: 'Session en directo',
    openPeriod: 'Periodo abierto',
    liveSessionDate: 'Fecha',
  },
};

// --------------------------------------------------------------------------------------------

const Styles = createStyles((theme) => ({
  header: {
    position: 'relative',
    height: 220,
  },
  taskHeaderContainer: {
    position: 'relative',
    height: '100%',
    zIndex: 1,
  },
}));

const WithBackgroundTemplate = ({ ...props }) => {
  const { classes: styles } = Styles();

  return (
    <Box className={styles.header}>
      <HeaderBackground
        image={
          'https://images.unsplash.com/photo-1650120060263-61dc78365ef3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80'
        }
        withGradient
        styles={{ position: 'absolute', zIndex: 1 }}
      />
      <Box className={styles.taskHeaderContainer}>
        <TaskDeadlineHeader {...props} />
      </Box>
    </Box>
  );
};

export const WithBackground = WithBackgroundTemplate.bind({});

WithBackground.args = {
  ...Playground.args,
  items: [
    {
      name: 'Historia - G01',
      icon: 'https://static.thenounproject.com/png/447685-200.png',
      color: '#FABADA',
    },
    {
      name: 'Geografia - G01',
      icon: 'https://static.thenounproject.com/png/447685-200.png',
      color: 'green',
    },
    {
      name: 'Matematicas - G01',
      icon: 'https://static.thenounproject.com/png/447685-200.png',
      color: 'red',
    },
  ],
};
