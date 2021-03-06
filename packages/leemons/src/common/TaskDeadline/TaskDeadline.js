import React from 'react';
import { Box, Text } from '@bubbles-ui/components';
import { TaskDeadlineStyles } from './TaskDeadline.styles';
import { PluginCalendarIcon, AlarmBellTimerIcon } from '@bubbles-ui/icons/outline/';
import { TASK_DEADLINE_DEFAULT_PROPS, TASK_DEADLINE_PROP_TYPES } from './TaskDeadline.constants';
import { startCase, capitalize } from 'lodash';

const getDeadlineText = (deadline, locale) => {
  const TODAY = new Date().getDate();

  const formatter = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });
  let deltaDays = (deadline.getTime() - Date.now()) / (1000 * 3600 * 24);
  if (deltaDays < 1) {
    if (deadline.getDate() === TODAY) {
      deltaDays = 0;
    } else if (deadline.getDate() === TODAY - 1) {
      deltaDays = -1;
    } else if (deadline.getDate() === TODAY + 1) {
      deltaDays = 1;
    }
  }
  deltaDays = Math.ceil(deltaDays);
  const result = formatter.format(deltaDays, 'day');
  return capitalize(result);
};

const TaskDeadline = ({
  label,
  size,
  deadline,
  alertDays,
  locale,
  styles,
  className,
  ...props
}) => {
  const showAlert =
    new Date() >= new Date(deadline).setDate(new Date(deadline).getDate() - alertDays);

  const renderDate = () => {
    const date = deadline.toLocaleDateString(
      locale,
      isMedium ? {} : { weekday: 'long', day: 'numeric', month: 'long' }
    );
    return isMedium ? date : startCase(date);
  };

  const renderTime = () => {
    const time = deadline.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
    });
    return time;
  };

  const isMedium = size === 'md';
  const { classes, cx } = TaskDeadlineStyles({ isMedium, styles }, { name: 'TaskDeadline' });
  return (
    <Box className={cx(classes.root, className)}>
      <Box className={classes.deadline}>
        <PluginCalendarIcon className={classes.calendarIcon} height={16} width={16} />
        <Text color="soft" size="xs" role="productive" transform="uppercase" strong>
          {label}
        </Text>
        <Text color="primary" role="productive" size="md" className={classes.date}>
          {renderDate()}
        </Text>
        {isMedium && (
          <Text role="productive" size="xs" className={classes.date}>
            {renderTime()}
          </Text>
        )}
      </Box>
      {showAlert && (
        <Box className={classes.alert}>
          <AlarmBellTimerIcon height={16} width={16} className={classes.alertIcon} />
          <Text role="productive" className={classes.deadlineText}>
            {getDeadlineText(deadline, locale)}
          </Text>
        </Box>
      )}
    </Box>
  );
};

TaskDeadline.defaultProps = TASK_DEADLINE_DEFAULT_PROPS;
TaskDeadline.propTypes = TASK_DEADLINE_PROP_TYPES;

export { TaskDeadline };
