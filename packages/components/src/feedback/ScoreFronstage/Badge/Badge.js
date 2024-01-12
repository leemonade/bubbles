import React from 'react';
import { BadgeStyles } from './Badge.styles';
import { BADGE_DEFAULT_PROPS, BADGE_PROP_TYPES } from './Badge.constants';
import { Box } from '../../../layout';

const Badge = ({ score, minGrade, nonCalificable, ...props }) => {
  const { classes } = BadgeStyles({ score, minGrade, nonCalificable }, { name: 'Badge' });

  return (
    <Box className={classes.root}>
      {score.letter || Number.isInteger(score.number) ? score.number : score.number.toFixed(2)}
    </Box>
  );
};

Badge.defaultProps = BADGE_DEFAULT_PROPS;
Badge.propTypes = BADGE_PROP_TYPES;

export { Badge };
