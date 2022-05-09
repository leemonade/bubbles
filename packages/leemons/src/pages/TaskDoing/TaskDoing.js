import React from 'react';
import { mock } from './mock/mock';
import { TaskDoingStyles } from './TaskDoing.styles';
import { Box, VerticalStepper, COLORS } from '@bubbles-ui/components';
import { HeaderBackground, TaskHeader, TaskDeadline } from '../../common';
import { TASK_DOING_DEFAULT_PROPS, TASK_DOING_PROP_TYPES } from './TaskDoing.constants';

const TaskDoing = ({ ...props }) => {
  const [currentStep, setCurrentStep] = React.useState(11);
  const isFirstStep = currentStep === 0;

  const nextStep = () => {
    const nextStep = currentStep + 1;
    const isLastStep = nextStep === mock.pages.length;
    setCurrentStep(isLastStep ? 0 : nextStep);
  };

  const taskDeadlineProps = {
    ...mock.taskDeadline,
    styles: { ...mock.taskDeadline.styles, right: isFirstStep ? 8 : 0 },
  };

  const taskHeaderProps = {
    ...mock.taskHeader,
    styles: {
      ...mock.taskHeader.styles,
      right: isFirstStep && '50%',
      borderRadius: isFirstStep ? '16px 16px 0 0' : 0,
      backgroundColor: isFirstStep ? COLORS.mainWhite : COLORS.interactive03,
    },
  };

  const { classes, cx } = TaskDoingStyles({ isFirstStep }, { name: 'TaskDoing' });
  return (
    <Box className={classes.root}>
      <Box className={classes.header}>
        <HeaderBackground {...mock.headerBackground} />
        <TaskHeader {...taskHeaderProps} size={isFirstStep ? 'md' : 'sm'} />
        <TaskDeadline {...taskDeadlineProps} size={isFirstStep ? 'md' : 'sm'} />
      </Box>
      <Box className={classes.mainContent}>
        <Box className={classes.verticalStepper}>
          <VerticalStepper {...mock.verticalStepper} currentStep={currentStep} />
        </Box>
        <Box className={classes.pages}>{mock.pages[currentStep](classes, nextStep)}</Box>
      </Box>
    </Box>
  );
};

TaskDoing.defaultProps = TASK_DOING_DEFAULT_PROPS;
TaskDoing.propTypes = TASK_DOING_PROP_TYPES;

export { TaskDoing };
