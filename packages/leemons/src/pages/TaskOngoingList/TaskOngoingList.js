import React from 'react';
import { Box, Button, HorizontalTimeline, Text, ScoresBar, COLORS } from '@bubbles-ui/components';
import {
  ChevLeftIcon,
  OpenIcon,
  TimeClockCircleIcon,
  CheckCircleIcon,
} from '@bubbles-ui/icons/outline';
import { HeaderBackground, TaskDeadlineHeader } from '../../common';
import { TaskOngoingListStyles } from './TaskOngoingList.styles';
import {
  TASK_ONGOING_LIST_DEFAULT_PROPS,
  TASK_ONGOING_LIST_PROP_TYPES,
} from './TaskOngoingList.constants';
import { mock } from './mock/mock';

const TaskOngoingList = ({ ...props }) => {
  const { classes, cx } = TaskOngoingListStyles({}, { name: 'TaskOngoingList' });

  return (
    <Box className={classes.root}>
      <Box className={classes.header}>
        <HeaderBackground
          {...mock.headerBackground}
          styles={{ position: 'absolute' }}
          backgroundPosition="center"
          blur={10}
        />
        <Button
          variant="light"
          size="md"
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
        <Box className={classes.timelineVeil} />
      </Box>
      <Box className={classes.mainContent}>
        <Box className={classes.leftSide}>
          <Text transform="uppercase">Resumen del estado</Text>
          <Box className={classes.leftScoreBarWrapper}>
            <Box className={classes.scoreBarLeftLegend}>
              <Box className={classes.legend}>
                <OpenIcon width={12} height={12} />
                <Text role="productive">Open</Text>
              </Box>
              <Box className={classes.legend}>
                <TimeClockCircleIcon width={12} height={12} />
                <Text role="productive">Ongoing</Text>
              </Box>
              <Box className={classes.legend}>
                <CheckCircleIcon width={12} height={12} />
                <Text role="productive">Completed</Text>
              </Box>
            </Box>
            <ScoresBar {...mock.leftScoresBar} />
          </Box>
        </Box>
        <Box className={classes.rightSide}>
          <Text transform="uppercase">Status</Text>
          <Box className={classes.rightScoreBarWrapper}>
            <ScoresBar {...mock.rightScoresBar} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

TaskOngoingList.defaultProps = TASK_ONGOING_LIST_DEFAULT_PROPS;
TaskOngoingList.propTypes = TASK_ONGOING_LIST_PROP_TYPES;

export { TaskOngoingList };
