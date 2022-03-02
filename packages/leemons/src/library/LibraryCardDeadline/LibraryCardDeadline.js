import React, { useState, useEffect } from 'react';
import { capitalize } from 'lodash';
import { Box, ImageLoader } from '@bubbles-ui/components';
import { LibraryCardDeadlineStyles } from './LibraryCardDeadline.styles';
import {
  LIBRARY_CARD_DEADLINE_DEFAULT_PROPS,
  LIBRARY_CARD_DEADLINE_PROP_TYPES,
} from './LibraryCardDeadline.constants';

const TODAY = new Date().getDate();

const LibraryCardDeadline = ({
  labels,
  icon,
  isNew,
  locale,
  deadline,
  direction,
  parentHovered,
  ...props
}) => {
  const [title, setTitle] = useState(labels.title);

  const formattedDate = `${labels.deadline + ' '}${deadline.toLocaleDateString(
    locale
  )} - ${deadline.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' })}`;

  useEffect(() => {
    if (!deadline) return;
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
    setTitle(capitalize(result));
  }, [deadline, locale]);

  const { classes, cx } = LibraryCardDeadlineStyles(
    { isNew, direction, parentHovered },
    { name: 'LibraryCardDeadline' }
  );
  return (
    <Box className={classes.root}>
      {icon && (
        <Box className={classes.icon}>
          {typeof icon === 'string' ? <ImageLoader src={icon} height={16} width={16} /> : icon}
        </Box>
      )}
      <Box className={classes.info}>
        <Box className={classes.title}>{isNew ? labels.new : title}</Box>
        {deadline && <Box className={classes.deadline}>{formattedDate}</Box>}
      </Box>
    </Box>
  );
};

LibraryCardDeadline.defaultProps = LIBRARY_CARD_DEADLINE_DEFAULT_PROPS;
LibraryCardDeadline.propTypes = LIBRARY_CARD_DEADLINE_PROP_TYPES;

export { LibraryCardDeadline };
