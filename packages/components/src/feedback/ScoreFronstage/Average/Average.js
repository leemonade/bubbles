import React from 'react';
import { AverageStyles } from './Average.styles';
import { AVERAGE_DEFAULT_PROPS, AVERAGE_PROP_TYPES } from './Average.constants';
import { Box } from '../../../layout';

const Average = ({ label, score, minGrade, maxGrade, ...props }) => {
  const { classes, cx } = AverageStyles({ score, minGrade }, { name: 'Average' });

  const renderScore = () => (
    <>
      <span className={classes.score}>
        {score.letter || Number.isInteger(score.number) ? score.number : score.number?.toFixed(2)}
      </span>
      {!score.letter && <span>{`/${maxGrade}`}</span>}
    </>
  );

  return (
    <Box className={classes.root}>
      <Box className={classes.labelContainer}>{label.toUpperCase()}</Box>
      <Box className={classes.scoreContainer}>{renderScore()}</Box>
    </Box>
  );
};

Average.defaultProps = AVERAGE_DEFAULT_PROPS;
Average.propTypes = AVERAGE_PROP_TYPES;

export { Average };
