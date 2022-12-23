import React from 'react';
import { ItemStyles } from './Item.styles';
import { ITEM_DEFAULT_PROPS, ITEM_PROP_TYPES } from './Item.constants';
import { Box } from '../../../layout';
import { isDate, isFunction } from 'lodash';
import { Badge } from '../Badge';

const Item = ({
  title,
  date,
  percentage,
  score,
  nonCalificable,
  minGrade,
  onClick,
  locale,
  ...props
}) => {
  const { classes } = ItemStyles({}, { name: 'Item' });

  const handleOnClick = () => {
    isFunction(onClick) && onClick();
  };

  return (
    <Box className={classes.root} onClick={handleOnClick}>
      <Box className={classes.titleContainer}>
        <Box className={classes.title}>{title}</Box>
        <Box className={classes.date}>{isDate(date) ? date.toLocaleDateString(locale) : date}</Box>
      </Box>
      <Box className={classes.scoreContainer}>
        <Box className={classes.percenatage}>{percentage}%</Box>
        <Badge score={score} minGrade={minGrade} nonCalificable={nonCalificable} />
      </Box>
    </Box>
  );
};

Item.defaultProps = ITEM_DEFAULT_PROPS;
Item.propTypes = ITEM_PROP_TYPES;

export { Item };
