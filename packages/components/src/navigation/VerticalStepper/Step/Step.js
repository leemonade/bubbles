import React from 'react';
import { Box } from '../../../layout/';
import { Text } from '../../../typography';
import { Badge } from '../../../informative';
import { Button } from '../../../form';
import { Progress } from '../';
import { StepStyles } from './Step.styles';
import { RatingStarIcon as RatingStarIconSolid } from '@bubbles-ui/icons/solid';
import { RatingStarIcon as RatingStarIconOutline } from '@bubbles-ui/icons/outline';
import { STEP_DEFAULT_PROPS, STEP_PROP_TYPES } from './Step.constants';
import { isFunction } from 'lodash';

const Step = ({
  label,
  text,
  completion,
  badge,
  state,
  position,
  onClick,
  isChild,
  isActive,
  isChildActive,
  isVisited,
  showChild,
  childRange,
  ...props
}) => {
  const isButton = !!onClick;
  const isText = !!text;
  const isActivity = !!completion;
  const isCompleted = state === 'completed' || state === 'OK' || state === 'KO';

  const onClickHandler = () => {
    isFunction(onClick) && onClick();
  };

  const renderVariant = () => {
    if (isButton)
      return (
        <React.Fragment>
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
        </React.Fragment>
      );
    if (isText) {
      return (
        <Text role="productive" size="xs" strong color="soft" transform="uppercase">
          {text}
        </Text>
      );
    }
    if (isActivity) {
      const activityCompleted = completion.current === completion.total;
      const badgeLabel = (
        <Box className={classes.activityBadge}>
          <Text>{`${completion.current}/${completion.total}`}</Text>
          {!activityCompleted && <RatingStarIconOutline width={12} height={12} />}
          {activityCompleted && <RatingStarIconSolid width={12} height={12} />}
        </Box>
      );
      return (
        <Box className={classes.activityStep}>
          <Text className={classes.label}>{label}</Text>
          <Badge
            label={badgeLabel}
            color={isActive ? 'stroke' : 'solid'}
            closable={false}
            size={'xs'}
          />
        </Box>
      );
    }
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  };

  const getVariantClassName = () => {
    if (isButton) return classes.buttonVariant;
    if (isText) return classes.textVariant;
    if (isActivity) return classes.activityVariant;
    return classes.defaultVariant;
  };

  const { classes, cx } = StepStyles(
    {
      isButton,
      isText,
      isActive,
      isActivity,
      isChild,
      showChild,
      childRange,
      isVisited,
      isCompleted,
      isChildActive,
    },
    { name: 'Step' }
  );
  return (
    <Box className={getVariantClassName()}>
      {!isChild && <Box className={classes.isVisitedBackground} />}
      <Box className={classes.labelContainer}>{renderVariant()}</Box>
      <Progress
        state={state}
        position={position}
        isChild={isChild}
        isText={isText}
        isButton={isButton}
        isActivity={isActivity}
        isCurrent={isChild ? state === 'current' : isActive}
      />
    </Box>
  );
};

Step.defaultProps = STEP_DEFAULT_PROPS;
Step.propTypes = STEP_PROP_TYPES;

export { Step };
