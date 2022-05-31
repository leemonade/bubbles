import React from 'react';
import { Box, ImageLoader, Text, TextClamp } from '@bubbles-ui/components';
import { TaskHeaderStyles } from './TaskHeader.styles';
import { TASK_HEADER_DEFAULT_PROPS, TASK_HEADER_PROP_TYPES } from './TaskHeader.constants';

const TaskHeader = ({ title, subtitle, color, icon, size, styles, className, ...props }) => {
  const isMedium = size === 'md';
  const { classes, cx } = TaskHeaderStyles({ color, styles, size }, { name: 'TaskHeader' });
  return (
    <Box className={cx(classes.root, className)}>
      <TextClamp lines={isMedium ? 2 : 1}>
        <Text className={classes.title} color="primary">
          {title}
        </Text>
      </TextClamp>
      <Box className={classes.subtitleWrapper}>
        <Box className={classes.icon}>
          <ImageLoader src={icon} height={12} width={12} />
        </Box>
        <Text className={classes.subtitle} color="primary">
          {subtitle}
        </Text>
      </Box>
    </Box>
  );
};

TaskHeader.defaultProps = TASK_HEADER_DEFAULT_PROPS;
TaskHeader.propTypes = TASK_HEADER_PROP_TYPES;

export { TaskHeader };
