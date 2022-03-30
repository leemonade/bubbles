import React from 'react';
import { Box } from '../../../layout/';
import { Text } from '../../../typography';
import { Badge } from '../../../informative';
import { Progress } from '../';
import { StepStyles } from './Step.styles';
import { STEP_DEFAULT_PROPS, STEP_PROP_TYPES } from './Step.constants';

const Step = ({ label, badge, state, position, ...props }) => {
  const { classes, cx } = StepStyles({}, { name: 'Step' });

  return (
    <Box className={classes.root}>
      <Box className={classes.info}>
        <Text className={classes.label}>{label}</Text>
        {badge && (
          <Badge
            className={classes.badge}
            label={badge}
            severity={'success'}
            radius={'default'}
            closable={false}
            size={'xs'}
          />
        )}
      </Box>
      <Progress state={state} position={position} />
    </Box>
  );
};

Step.defaultProps = STEP_DEFAULT_PROPS;
Step.propTypes = STEP_PROP_TYPES;

export { Step };
