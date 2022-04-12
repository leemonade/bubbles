import React from 'react';
import { Box } from '../../layout';
import { Text } from '../../typography';
import { CalificationStyles } from './Calification.styles';
import { CALIFICATION_DEFAULT_PROPS, CALIFICATION_PROP_TYPES } from './Calification.constants';

const Calification = ({ label, grade, minimumGrade, ...props }) => {
  const { classes, cx } = CalificationStyles({ grade, minimumGrade }, { name: 'Calification' });

  return (
    <Box className={classes.root}>
      <Box className={classes.labelContainer}>
        <Text strong>{label}</Text>
      </Box>
      <Box className={classes.gradeContainer}>
        <Text size="xl">{grade}</Text>
      </Box>
    </Box>
  );
};

Calification.defaultProps = CALIFICATION_DEFAULT_PROPS;
Calification.propTypes = CALIFICATION_PROP_TYPES;

export { Calification };
