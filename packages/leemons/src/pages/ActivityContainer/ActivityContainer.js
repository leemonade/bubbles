import React, { useState } from 'react';
import { Box, useResizeObserver } from '@bubbles-ui/components';
import { ActivityContainerStyles } from './ActivityContainer.styles';
import { HeaderBackground, TaskDeadline, TaskHeader } from '../../common';
import {
  ACTIVITY_CONTAINER_DEFAULT_PROPS,
  ACTIVITY_CONTAINER_PROP_TYPES,
} from './ActivityContainer.constants';

const ActivityContainer = ({
  header,
  deadline,
  children,
  collapsed,
  collapseOnScroll,
  ...props
}) => {
  const { image, ...headerProps } = header;
  const [headerHeight, setHeaderHeight] = useState(204);
  const [isScrolled, setIsScrolled] = useState(collapsed);
  const [rootRef, rootRect] = useResizeObserver();
  const [headerRef, headerRect] = useResizeObserver();

  React.useEffect(() => setIsScrolled(collapsed), [collapsed]);
  React.useEffect(() => {
    if (headerRect.height > headerHeight) {
      setHeaderHeight(headerRect.height);
    }
  }, [headerRect.height]);

  const handleScroll = (e) => {
    const { scrollTop } = e.target;
    const isCurrentlyScrolled = scrollTop > 40;
    if (!collapsed) if (isCurrentlyScrolled !== isScrolled) setIsScrolled(isCurrentlyScrolled);
  };

  const { classes, cx } = ActivityContainerStyles({ isScrolled }, { name: 'ActivityContainer' });
  return (
    <Box ref={rootRef} onScroll={collapseOnScroll ? handleScroll : null} className={classes.root}>
      <Box
        ref={headerRef}
        className={classes.header}
        style={{ width: rootRect.width, top: rootRect.top }}
      >
        <HeaderBackground
          image={image}
          withGradient
          backgroundPosition={'center'}
          styles={{ position: 'absolute', zIndex: 1 }}
        />
        <Box className={classes.taskHeaderWrapper}>
          <TaskHeader
            {...headerProps}
            size={isScrolled ? 'sm' : 'md'}
            className={classes.taskHeader}
          />
          {deadline && deadline.deadline ? (
            <TaskDeadline
              {...deadline}
              size={isScrolled ? 'sm' : 'md'}
              className={classes.deadline}
            />
          ) : null}
        </Box>
      </Box>
      <Box style={{ marginTop: headerHeight }}>
        {React.cloneElement(children, { marginTop: headerHeight })}
      </Box>
    </Box>
  );
};

ActivityContainer.defaultProps = ACTIVITY_CONTAINER_DEFAULT_PROPS;
ActivityContainer.propTypes = ACTIVITY_CONTAINER_PROP_TYPES;

export { ActivityContainer };
