import React from 'react';
import { Badge, Box, Divider, ImageLoader, Text, TextClamp } from '@bubbles-ui/components';
import { TaskHeaderStyles } from './TaskHeader.styles';
import { TASK_HEADER_DEFAULT_PROPS, TASK_HEADER_PROP_TYPES } from './TaskHeader.constants';
import { capitalize, isEmpty } from 'lodash';

const TaskHeader = ({
  title,
  color,
  image,
  icon,
  subjects: items,
  activityType,
  activityEvaluation,
  activityDates,
  styles,
  alertDays,
  className,
  locale,
  size,
  subtitle,
  ...props
}) => {
  const showAlert =
    !isEmpty(activityDates) &&
    activityDates.endDate &&
    new Date() >=
      new Date(
        new Date(activityDates.endDate).setDate(
          new Date(activityDates.endDate).getDate() - alertDays
        )
      );

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

  const { classes, cx } = TaskHeaderStyles({ color, styles }, { name: 'TaskHeader' });

  return (
    <Box className={cx(classes.root, className)}>
      {size === 'md' && (
        <Box className={classes.imageWrapper}>
          {image && !icon && <ImageLoader src={image} radius="50%" height={56} width={56} />}
          {icon && (
            <Box className={classes.iconWrapper}>
              <ImageLoader forceImage src={icon} height={24} width={24} />
            </Box>
          )}
        </Box>
      )}
      <Box className={classes.content}>
        <TextClamp lines={1}>
          <Text className={classes.title}>{title}</Text>
        </TextClamp>
        {size === 'md' && items.length > 0 && (
          <Box className={classes.itemRow}>
            {items.map((item) => (
              <Box className={classes.item}>
                <Box className={classes.itemIcon} style={{ backgroundColor: item.color }}>
                  <ImageLoader forceImage src={item.icon} height={8} width={8} />
                </Box>
                <Box className={classes.itemName}>{item.name}</Box>
              </Box>
            ))}
          </Box>
        )}
        {size === 'md' && (
          <Box className={classes.activityContent}>
            {!isEmpty(activityType) && (
              <Box style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <ImageLoader
                  forceImage
                  src={activityType.icon}
                  height={16}
                  width={16}
                  className={classes.activityTypeIcon}
                />
                <Box className={classes.content}>{activityType.type}</Box>
                <Divider orientation={'vertical'} />
              </Box>
            )}
            {activityEvaluation && <Box className={classes.content}>{activityEvaluation}</Box>}
            {activityEvaluation && <Divider orientation={'vertical'} />}
            {!isEmpty(activityDates) && (
              <Box style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <Box style={{ display: 'flex', gap: 4 }}>
                  <Box className={classes.content}>{`${activityDates.startLabel}:`}</Box>
                  <Box className={classes.content}>
                    {activityDates.startDate.toLocaleDateString(locale)}
                  </Box>
                </Box>
                <Box style={{ display: 'flex', gap: 4 }}>
                  <Box className={classes.content}>{`${activityDates.hourLabel}:`}</Box>
                  <Box className={classes.content}>
                    {activityDates.startDate.toLocaleTimeString(locale, {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </Box>
                </Box>
                <Box style={{ display: 'flex', gap: 4 }}>
                  <Box className={classes.content}>{`${activityDates.endLabel}:`}</Box>
                  <Box className={classes.content}>
                    {activityDates.endDate.toLocaleDateString(locale)}
                  </Box>
                </Box>
                <Box style={{ display: 'flex', gap: 4 }}>
                  <Box className={classes.content}>{`${activityDates.hourLabel}:`}</Box>
                  <Box className={classes.content}>
                    {activityDates.endDate.toLocaleTimeString(locale, {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </Box>
                </Box>
                {showAlert && (
                  <Badge
                    severity={'error'}
                    closable={false}
                    label={getDeadlineText(activityDates.endDate, locale)}
                  />
                )}
              </Box>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
};

TaskHeader.defaultProps = TASK_HEADER_DEFAULT_PROPS;
TaskHeader.propTypes = TASK_HEADER_PROP_TYPES;

export { TaskHeader };
