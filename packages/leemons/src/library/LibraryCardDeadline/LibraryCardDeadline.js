import React from 'react';
import PropTypes from 'prop-types';
import { Box, ImageLoader } from '@bubbles-ui/components';
import { LibraryCardDeadlineStyles } from './LibraryCardDeadline.styles';
import { useEffect } from 'react';
import { capitalize } from 'lodash';

export const LIBRARY_CARD_DEADLINE_DEFAULT_PROPS = {
  labels: {
    title: 'Coming soon',
    new: 'New',
    deadline: '',
  },
};
export const LIBRARY_CARD_DEADLINE_PROP_TYPES = {
  labels: PropTypes.shape({
    title: PropTypes.string,
    new: PropTypes.string,
    deadline: PropTypes.string,
  }),
  icon: PropTypes.oneOfType([
    PropTypes.element,
    (props, propName, componentName) => {
      let url;

      const errorString = `Invalid prop ${propName} supplied to ${componentName}. Validation failed.`;

      try {
        url = new URL(props.icon);
      } catch (error) {
        return new Error(errorString);
      }

      if (url.protocol !== 'http:' && url.protocol !== 'https:') return new Error(errorString);
    },
  ]),
  locale: PropTypes.string,
  deadline: PropTypes.instanceOf(Date),
};

const LibraryCardDeadline = ({ labels, icon, isNew, locale, deadline, ...props }) => {
  const { classes, cx } = LibraryCardDeadlineStyles({ isNew });

  const renderIcon = () => {
    if (typeof icon === 'string') return <ImageLoader src={icon} height={16} width={16} />;
    return icon;
  };

  useEffect(() => {
    if (!deadline) return;

    const deltaDays = (deadline.getTime() - Date.now()) / (1000 * 3600 * 24);
    const result = new Intl.RelativeTimeFormat(locale || 'en').format(deltaDays, 'days');

    labels.title = capitalize(result);
  }, []);

  return (
    <Box className={classes.root}>
      {icon && <Box className={classes.icon}>{renderIcon()}</Box>}
      <Box>
        <Box className={classes.title}>{isNew ? labels.new : labels.title}</Box>
        <Box className={classes.deadline}>
          {deadline &&
            `${labels.deadline}${labels.deadline ? ' ' : ''}${deadline.toLocaleDateString(
              locale || 'en'
            )} ${deadline.toLocaleTimeString(locale || 'en', {
              hour: '2-digit',
              minute: '2-digit',
            })}`}
        </Box>
      </Box>
    </Box>
  );
};

LibraryCardDeadline.defaultProps = LIBRARY_CARD_DEADLINE_DEFAULT_PROPS;
LibraryCardDeadline.propTypes = LIBRARY_CARD_DEADLINE_PROP_TYPES;

export { LibraryCardDeadline };
