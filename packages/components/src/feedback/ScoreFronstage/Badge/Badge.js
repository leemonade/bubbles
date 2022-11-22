import React from 'react';
import { BadgeStyles } from './Badge.styles';
import { BADGE_DEFAULT_PROPS, BADGE_PROP_TYPES } from './Badge.constants';
import { Box } from '../../../layout';

const Badge = ({ score, minGrade, ...props }) => {
  const { classes, cx } = BadgeStyles({ score, minGrade }, { name: 'Badge' });

  return <Box className={classes.root}>{score}</Box>;
};

Badge.defaultProps = BADGE_DEFAULT_PROPS;
Badge.propTypes = BADGE_PROP_TYPES;

export { Badge };
