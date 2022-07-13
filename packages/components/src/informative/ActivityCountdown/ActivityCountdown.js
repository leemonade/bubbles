import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import useCountDown from 'react-countdown-hook';
import { AlarmClockIcon } from '@bubbles-ui/icons/outline';
import { Box } from '../../layout';
import { Text } from '../../typography';
import { ActivityCountdownStyles } from './ActivityCountdown.styles';
import {
  ACTIVITY_COUNTDOWN_DEFAULT_PROPS,
  ACTIVITY_COUNTDOWN_PROP_TYPES,
} from './ActivityCountdown.constants';

const ActivityCountdown = ({
  finish,
  interval,
  withIcon,
  rootStyles,
  rootClassname,
  useAria,
  ...props
}) => {
  const countDownMiliseconds = new Date(finish) - Date.now();
  const [timeLeft, { start, pause, resume, reset }] = useCountDown(countDownMiliseconds, interval);

  const padTo2Digits = (number) => {
    return number.toString().padStart(2, '0');
  };

  const getCountdown = (miliSeconds) => {
    const seconds = Math.trunc((miliSeconds / 1000) % 60);
    const minutes = Math.trunc((miliSeconds / 60000) % 60);
    const hours = Math.trunc(miliSeconds / 3600000);
    return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`;
  };

  useEffect(() => {
    start();
  }, []);

  const { classes, cx } = ActivityCountdownStyles({ rootStyles }, { name: 'ActivityCountdown' });
  return (
    <Box className={cx(classes.root, rootClassname)} role={useAria ? 'timer' : undefined}>
      <Text className={classes.countdown}>{getCountdown(timeLeft)}</Text>
      {withIcon && <AlarmClockIcon width={24} height={24} className={classes.clockIcon} />}
    </Box>
  );
};

ActivityCountdown.defaultProps = ACTIVITY_COUNTDOWN_DEFAULT_PROPS;
ActivityCountdown.propTypes = ACTIVITY_COUNTDOWN_PROP_TYPES;

export { ActivityCountdown };
