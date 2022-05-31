import React, { useRef, useState } from 'react';
import { Box } from '@bubbles-ui/components';
import { ActivityContainerStyles } from './ActivityContainer.styles';
import { HeaderBackground, TaskHeader, TaskDeadline } from '../../common';
import {
  ACTIVITY_CONTAINER_DEFAULT_PROPS,
  ACTIVITY_CONTAINER_PROP_TYPES,
} from './ActivityContainer.constants';

const ActivityContainer = ({ header, deadline, children, ...props }) => {
  const { title, subtitle, icon, color, image } = header;
  const rootRef = useRef();
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const isCurrentlyScrolled = rootRef.current.scrollTop > 0;
    if (isCurrentlyScrolled !== isScrolled) setIsScrolled(isCurrentlyScrolled);
  };

  const { classes, cx } = ActivityContainerStyles({ isScrolled }, { name: 'ActivityContainer' });
  return (
    <Box ref={rootRef} onScroll={handleScroll} className={classes.root}>
      <Box className={classes.header}>
        <HeaderBackground image={image} backgroundPosition={'center'} />
        <TaskHeader
          title={title}
          subtitle={subtitle}
          icon={icon}
          color={color}
          size={isScrolled ? 'sm' : 'md'}
          className={classes.taskHeader}
        />
        <TaskDeadline {...deadline} size={isScrolled ? 'sm' : 'md'} className={classes.deadline} />
      </Box>
      <Box className={classes.childrenContainer}>{children}</Box>
    </Box>
  );
};

ActivityContainer.defaultProps = ACTIVITY_CONTAINER_DEFAULT_PROPS;
ActivityContainer.propTypes = ACTIVITY_CONTAINER_PROP_TYPES;

export { ActivityContainer };
