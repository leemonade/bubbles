import React from 'react';
import { Box } from '../../../layout/';
import { Text } from '../../../typography';
import { Badge } from '../../../informative';
import { Button } from '../../../form';
import { Progress } from '../';
import { StepStyles } from './Step.styles';
import { STEP_DEFAULT_PROPS, STEP_PROP_TYPES } from './Step.constants';
import { isFunction } from 'lodash';

const Step = ({
  label,
  text,
  badge,
  state,
  position,
  onClick,
  isChild,
  isActive,
  showChild,
  childRange,
  ...props
}) => {
  const isButton = !!onClick;
  const isText = !!text;
  const isCompleted = state === 'completed' || state === 'OK' || state === 'KO';

  if (isText) console.log(state);

  const onClickHandler = () => {
    isFunction(onClick) && onClick();
  };

  const renderVariant = () => {
    if (isButton)
      return (
        <>
          {isCompleted && <Text className={classes.label}>{label}</Text>}
          {!isCompleted && (
            <Button
              size="xs"
              disabled={!isActive}
              position="center"
              fullWidth
              onClick={onClickHandler}
            >
              {label}
            </Button>
          )}
        </>
      );
    if (isText) {
      return (
        <Text role="productive" size="xs" strong color="soft" transform="uppercase">
          {text}
        </Text>
      );
    }
    return (
      <>
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
      </>
    );
  };

  const { classes, cx } = StepStyles(
    { isButton, isText, isActive, isCompleted, isChild, showChild, childRange },
    { name: 'Step' }
  );
  return (
    <Box className={classes.root}>
      {!isChild && <Box className={classes.isCompletedBackground} />}
      <Box className={classes.labelContainer}>{renderVariant()}</Box>
      <Progress
        state={state}
        position={position}
        isChild={isChild}
        isText={isText}
        isButton={isButton}
        isCurrent={!isChild ? isActive : state === 'current'}
      />
    </Box>
  );
};

Step.defaultProps = STEP_DEFAULT_PROPS;
Step.propTypes = STEP_PROP_TYPES;

export { Step };
