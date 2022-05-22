import React from 'react';
import { isEmpty } from 'lodash';
import { Box } from '../../layout';
import { Text } from '../../typography';
import { CalificationStyles } from './Calification.styles';
import { CALIFICATION_DEFAULT_PROPS, CALIFICATION_PROP_TYPES } from './Calification.constants';

const Calification = ({
  label,
  grade,
  minimumGrade,
  orientation,
  inverted,
  styles,
  className,
  ...props
}) => {
  const { classes, cx } = CalificationStyles(
    { grade, minimumGrade, orientation, inverted, styles },
    { name: 'Calification' }
  );
  return (
    <Box className={cx(classes.root, className)}>
      <Box className={classes.labelContainer}>{!isEmpty(label) && <Text strong>{label}</Text>}</Box>

      <Box className={classes.gradeContainer}>
        <Text size="xl">{grade}</Text>
      </Box>
    </Box>
  );
};

Calification.defaultProps = CALIFICATION_DEFAULT_PROPS;
Calification.propTypes = CALIFICATION_PROP_TYPES;

export { Calification };
