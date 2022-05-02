import React from 'react';
import PropTypes from 'prop-types';
import { Box, ImageLoader, Text } from '@bubbles-ui/components';
import { TaskHeaderStyles } from './TaskHeader.styles';
import { TASK_HEADER_DEFAULT_PROPS, TASK_HEADER_PROP_TYPES } from './TaskHeader.constants';

const TaskHeader = ({ title, subtitle, color, icon, ...props }) => {
  const { classes, cx } = TaskHeaderStyles({ color }, { name: 'TaskHeader' });

  return (
    <Box className={classes.root}>
      <Text className={classes.title} color="primary">
        {title}
      </Text>
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
