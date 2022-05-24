import React from 'react';
import { Box } from '../../../layout';
import { ProgressStyles } from './Progress.styles';
import { TimeClockCircleIcon } from '@bubbles-ui/icons/outline/';
import { CheckIcon, RemoveBoldIcon } from '@bubbles-ui/icons/solid';
import { PROGRESS_DEFAULT_PROPS, PROGRESS_PROP_TYPES } from './Progress.constants';

const Progress = ({
  state,
  position,
  isButton,
  isActivity,
  isChild,
  isText,
  isCurrent,
  isVisited,
  ...props
}) => {
  const { classes, cx } = ProgressStyles(
    { position, isButton, isActivity, isText, isCurrent, isVisited, state },
    { name: 'Progress' }
  );

  const renderState = () => {
    if (isChild) {
      return (
        <Box className={classes.progressContainer}>
          <Box className={classes.progressBar}>
            <Box className={classes.progressBarCurrent} />
          </Box>
        </Box>
      );
    }
    if (isText) {
      return (
        <Box className={classes.progressContainer}>
          <Box className={classes.textBar}></Box>
        </Box>
      );
    }
    switch (state) {
      case 'pending':
        return (
          <Box className={classes.progressContainer}>
            <Box className={classes.pendingBar} />
            <Box className={classes.pending} />
          </Box>
        );
      case 'current':
        return (
          <Box className={classes.progressContainer}>
            <Box className={classes.solidBar} />
            <TimeClockCircleIcon height={20} width={20} className={classes.currentIcon} />
          </Box>
        );
      case 'completed':
        return (
          <Box className={classes.progressContainer}>
            <Box className={classes.solidBar} />
            <CheckIcon height={12} width={12} className={classes.completedIcon} />
          </Box>
        );
      case 'OK':
        return (
          <Box className={classes.progressContainer}>
            <Box className={classes.solidBar}></Box>
            <CheckIcon height={12} width={12} className={classes.OKIcon} />
          </Box>
        );
      case 'KO':
        return (
          <Box className={classes.progressContainer}>
            <Box className={classes.solidBar}></Box>
            <RemoveBoldIcon height={12} width={12} className={classes.KOIcon} />
          </Box>
        );
    }
  };

  return <Box className={classes.root}>{renderState()}</Box>;
};

Progress.defaultProps = PROGRESS_DEFAULT_PROPS;
Progress.propTypes = PROGRESS_PROP_TYPES;

export { Progress };
