import React from 'react';
import { Box } from '../../../layout/';
import { Text } from '../../../typography';
import { Badge } from '../../../informative';
import { Progress } from '../';
import { StepStyles } from './Step.styles';
import { STEP_DEFAULT_PROPS, STEP_PROP_TYPES } from './Step.constants';

const Step = ({ label, badge, state, position, subSteps, currentSubstep, ...props }) => {
  const isCompleted = state === 'completed' || state === 'OK' || state === 'KO';
  const totalChilds = subSteps.length;

  const { classes, cx } = StepStyles({ isCompleted, totalChilds }, { name: 'Step' });
  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.isCompletedBackground} />
        <Box className={classes.info}>
          <Box>
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
        </Box>
        <Progress state={state} position={position} />
      </Box>
      <Box>
        {(isCompleted || state === 'current') &&
          subSteps.map((child, index) => (
            <Box key={`child step ${label} ${index}`} className={classes.childStep}>
              <Box className={classes.info}>
                <Text className={classes.label}>{child.label}</Text>
                {child.badge && (
                  <Badge
                    className={classes.badge}
                    label={child.badge}
                    severity={'success'}
                    radius={'default'}
                    closable={false}
                    size={'xs'}
                  />
                )}
              </Box>
              <Progress
                position={'between'}
                isChild
                isCurrent={state === 'current' && currentSubstep >= index + 1}
              />
            </Box>
          ))}
      </Box>
    </>
  );
};

Step.defaultProps = STEP_DEFAULT_PROPS;
Step.propTypes = STEP_PROP_TYPES;

export { Step };
