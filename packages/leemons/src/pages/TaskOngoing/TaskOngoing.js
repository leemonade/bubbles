import React from 'react';
import { Box, Button, HorizontalTimeline, Text, ScoresBar, COLORS } from '@bubbles-ui/components';
import { HeaderBackground, TaskDeadlineHeader } from '../../common';
import { TaskOngoingStyles } from './TaskOngoing.styles';
import { TASK_ONGOING_DEFAULT_PROPS, TASK_ONGOING_PROP_TYPES } from './TaskOngoing.constants';
import { ChevLeftIcon } from '@bubbles-ui/icons/outline';
import { mock } from './mock/mock';

const TaskOngoing = ({ ...props }) => {
  const { classes, cx } = TaskOngoingStyles({}, { name: 'TaskOngoing' });

  return (
    <Box className={classes.root}>
      <Box className={classes.header}>
        <HeaderBackground {...mock.headerBackground} styles={{ position: 'absolute' }} />
        <Button
          variant="light"
          compact
          leftIcon={<ChevLeftIcon width={20} height={20} />}
          styles={{ zIndex: 5, color: COLORS.mainWhite }}
        >
          Back
        </Button>
        <TaskDeadlineHeader
          {...mock.taskDeadlineHeader}
          styles={{ position: 'absolute', bottom: 0, left: 0, right: '50%', zIndex: 5 }}
        />
        <HorizontalTimeline
          {...mock.horizontalTimeline}
          rootStyles={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            left: '50%',
            paddingInline: 48,
            paddingBottom: 10,
            zIndex: 5,
          }}
        />
      </Box>
      <Box className={classes.mainContent}>
        <Box className={classes.leftSide}>
          <Text>Resumen del estado</Text>
          <ScoresBar />
        </Box>
        <Box className={classes.rightSide}>
          <Text>Status</Text>
          <ScoresBar />
        </Box>
      </Box>
    </Box>
  );
};

TaskOngoing.defaultProps = TASK_ONGOING_DEFAULT_PROPS;
TaskOngoing.propTypes = TASK_ONGOING_PROP_TYPES;

export { TaskOngoing };
