import React from 'react';
import { Box } from '../../../layout/';
import { Text } from '../../../typography';
import { Badge } from '../../../informative';
import { Progress } from '../';
import { StepStyles } from './Step.styles';
import { STEP_DEFAULT_PROPS, STEP_PROP_TYPES } from './Step.constants';

const Step = ({
  label,
  badge,
  state,
  position,
  isChild,
  totalChilds,
  childPosition,
  childPositions,
  currentStep,
  ...props
}) => {
  const isCompleted = state === 'completed' || state === 'OK' || state === 'KO';
  let isCurrent = false;
  let inRange = false;
  if (isChild) {
    isCurrent = currentStep >= childPosition && !isCompleted;
    inRange = currentStep >= childPositions[0] - 1 && currentStep <= childPositions[1];
  }

  const { classes, cx } = StepStyles({ isCompleted, totalChilds }, { name: 'Step' });
  return (
    <>
      {!isChild ? (
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
      ) : (
        (isCompleted || inRange) && (
          <Box>
            <Box className={classes.childStep}>
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
              <Progress position={'between'} isChild state={state} isCurrent={isCurrent} />
            </Box>
          </Box>
        )
      )}
    </>
  );
};

Step.defaultProps = STEP_DEFAULT_PROPS;
Step.propTypes = STEP_PROP_TYPES;

export { Step };
