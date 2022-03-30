import React from 'react';
import { Box } from '../../../layout';
import { ProgressStyles } from './Progress.styles';
import { TimeClockCircleIcon } from '@bubbles-ui/icons/outline/';
import { CheckIcon } from '@bubbles-ui/icons/solid';
import { PROGRESS_DEFAULT_PROPS, PROGRESS_PROP_TYPES } from './Progress.constants';

const Progress = ({ state, position, isButton, ...props }) => {
  const { classes, cx } = ProgressStyles({ position, isButton }, { name: 'Progress' });

  const renderState = () => {
    switch (state) {
      case 'notStarted':
        return <Box className={classes.notStarted}></Box>;
      case 'inProgress':
        return (
          <Box className={classes.inProgress}>
            <TimeClockCircleIcon height={20} width={20} className={classes.inProgressIcon} />
          </Box>
        );
      case 'completed':
        return (
          <Box className={classes.completed}>
            <CheckIcon height={12} width={12} className={classes.completedIcon} />
          </Box>
        );
      case 'OK':
        return (
          <Box className={classes.OK}>
            <CheckIcon height={12} width={12} className={classes.OKIcon} />
          </Box>
        );
    }
  };

  return <Box className={classes.root}>{renderState()}</Box>;
};

Progress.defaultProps = PROGRESS_DEFAULT_PROPS;
Progress.propTypes = PROGRESS_PROP_TYPES;

export { Progress };
