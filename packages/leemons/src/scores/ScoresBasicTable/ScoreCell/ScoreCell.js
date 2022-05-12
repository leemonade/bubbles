import React from 'react';
import { Box, Text, TextClamp } from '@bubbles-ui/components';
import { ScoreCellStyles } from './ScoreCell.styles';
import { SCORES_CELL_DEFAULT_PROPS, SCORES_CELL_PROP_TYPES } from './ScoreCell.constants';

const ScoreCell = ({ value }) => {
  const { classes, cx } = ScoreCellStyles({}, { name: 'ScoreCell' });
  return (
    <Box className={classes.root}>
      <Text color="primary" role="productive">
        {value}
      </Text>
    </Box>
  );
};

ScoreCell.defaultProps = SCORES_CELL_DEFAULT_PROPS;
ScoreCell.propTypes = SCORES_CELL_PROP_TYPES;

export { ScoreCell };
