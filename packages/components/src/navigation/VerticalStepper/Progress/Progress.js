import React from 'react';
import { TimeClockCircleIcon } from '@bubbles-ui/icons/outline/';
import { CheckIcon, RemoveBoldIcon } from '@bubbles-ui/icons/solid';
import { Box } from '../../../layout/Box';
import { ProgressStyles } from './Progress.styles';
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
}) => {
  const { classes } = ProgressStyles(
    { position, isButton, isActivity, isText, isCurrent, isVisited, state },
    { name: 'Progress' },
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
            <Box className={classes.pendingIcon} />
          </Box>
        );
      case 'current':
        return (
          <Box className={classes.progressContainer}>
            <Box className={classes.solidBar} />
            <Box height={16} width={16} className={classes.currentIconContainer}>
              <svg
                className={classes.currentIcon}
                width="6"
                height="6"
                viewBox="0 0 6 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="3" cy="3" r="3" fill="#0C1F22" />
              </svg>
            </Box>
          </Box>
        );
      case 'completed':
      case 'OK':
        return (
          <Box className={classes.progressContainer}>
            <Box className={classes.solidBar} />
            <CheckIcon height={16} width={16} className={classes.completedIcon} />
          </Box>
        );
      case 'KO':
        return (
          <Box className={classes.progressContainer}>
            <Box className={classes.solidBar}></Box>
            <RemoveBoldIcon height={20} width={20} className={classes.KOIcon} />
          </Box>
        );
      default:
        break;
    }
    return null;
  };

  return <Box className={classes.root}>{renderState()}</Box>;
};

Progress.defaultProps = PROGRESS_DEFAULT_PROPS;
Progress.propTypes = PROGRESS_PROP_TYPES;

export { Progress };
