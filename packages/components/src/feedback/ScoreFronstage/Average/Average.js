import React from 'react';
import { AverageStyles } from './Average.styles';
import { AVERAGE_DEFAULT_PROPS, AVERAGE_PROP_TYPES } from './Average.constants';
import { Box } from '../../../layout/Box';

const Average = ({ label, score, minGrade, maxGrade, ...props }) => {
  const { classes } = AverageStyles({ score, minGrade }, { name: 'Average' });

  const renderScore = () => (
    <>
      <span className={classes.score}>{score.letter || score.number}</span>
      {!score.letter && <span>{`/${maxGrade}`}</span>}
    </>
  );

  return (
    <Box className={classes.root} {...props}>
      <Box className={classes.labelContainer}>{label.toUpperCase()}</Box>
      <Box className={classes.scoreContainer}>{renderScore()}</Box>
    </Box>
  );
};

Average.defaultProps = AVERAGE_DEFAULT_PROPS;
Average.propTypes = AVERAGE_PROP_TYPES;
Average.displayName = 'Average';

export default Average;
export { Average };
