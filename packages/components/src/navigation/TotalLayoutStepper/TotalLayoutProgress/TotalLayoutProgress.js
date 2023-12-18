import React from 'react';
import { CheckIcon, RemoveBoldIcon } from '@bubbles-ui/icons/solid';
import { Box } from '../../../layout/Box';
import { TotalLayoutProgressStyles } from './TotalLayoutProgress.styles';
import StepperCurrentIcon from './CurrentIcon';

const TotalLayoutProgress = ({ state, position, isCurrent, isCompleted }) => {
  const { classes } = TotalLayoutProgressStyles(
    { position, isCurrent, isCompleted, state },
    { name: 'Progress' },
  );

  const renderProgressIcon = () => {
    switch (state) {
      case 'incomplete':
        return (
          <Box className={classes.progressContainer}>
            <Box className={classes.incompleteBar} />
            <Box className={classes.incompleteIcon} />
          </Box>
        );
      case 'completed':
        return (
          <Box className={classes.progressContainer}>
            <Box className={classes.filledBar} />
            <CheckIcon height={16} width={16} className={classes.completedIcon} />
          </Box>
        );
      case 'KO':
        return (
          <Box className={classes.progressContainer}>
            <Box className={classes.filledBar} />
            <RemoveBoldIcon height={16} width={16} className={classes.KOIcon} />
          </Box>
        );
      default:
        break;
    }
    return null;
  };

  return (
    <Box className={classes.root}>
      {isCurrent ? (
        <Box className={classes.progressContainer}>
          <Box className={classes.currentBarUp} />
          <Box height={16} width={16} className={classes.currentIconContainer}>
            <StepperCurrentIcon className={classes.currentIcon} />
          </Box>
          <Box className={classes.currentBarDown} />
        </Box>
      ) : (
        renderProgressIcon()
      )}
    </Box>
  );
};

export default TotalLayoutProgress;
