import React from 'react';
import { Box, ImageLoader, Text, TextClamp } from '@bubbles-ui/components';
import { TaskHeaderStyles } from './TaskHeader.styles';
import { TASK_HEADER_DEFAULT_PROPS, TASK_HEADER_PROP_TYPES } from './TaskHeader.constants';

const TaskHeader = ({
  title,
  color,
  image,
  icon,
  items,
  activityType,
  activityEvaluation,
  activityDates,
  styles,
  className,
  ...props
}) => {
  const { classes, cx } = TaskHeaderStyles({ color, styles }, { name: 'TaskHeader' });
  return (
    <Box className={cx(classes.root, className)}>
      <Box className={classes.imageWrapper}>
        {image && !icon && <ImageLoader src={image} radius="50%" height={56} width={56} />}
        {icon && (
          <Box className={classes.iconWrapper}>
            <ImageLoader forceImage src={icon} height={24} width={24} />
          </Box>
        )}
      </Box>
      <Box className={classes.content}>
        <TextClamp lines={1}>
          <Text className={classes.title}>{title}</Text>
        </TextClamp>
        {items.length > 0 && (
          <Box className={classes.itemRow}>
            {items.map((item) => (
              <Box className={classes.item}>
                <Box className={classes.itemIcon} style={{ backgroundColor: item.color }}>
                  <ImageLoader forceImage src={item.icon} height={8} width={8} />
                </Box>
              </Box>
            ))}
          </Box>
        )}
        {/* {(icon || subtitle) && (
          <Box className={classes.subtitleWrapper}>
            <Box className={classes.icon}>
              {icon && <ImageLoader height="12px" width="12px" src={icon} forceImage />}
            </Box>
            {subtitle && <Text className={classes.subtitle}>{subtitle}</Text>}
          </Box>
        )} */}
      </Box>
    </Box>
  );
};

TaskHeader.defaultProps = TASK_HEADER_DEFAULT_PROPS;
TaskHeader.propTypes = TASK_HEADER_PROP_TYPES;

export { TaskHeader };
