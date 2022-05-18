import React from 'react';
import { Box, Text, TextClamp } from '@bubbles-ui/components';
import { ActivityHeaderStyles } from './ActivityHeader.styles';
import {
  ACTIVIY_HEADER_DEFAULT_PROPS,
  ACTIVIY_HEADER_PROP_TYPES,
} from './ActivityHeader.constants';

const ActivityHeader = ({ id, name, deadline, completionPercentage, locale }) => {
  const { classes, cx } = ActivityHeaderStyles({}, { name: 'ActivityHeader' });
  return (
    <Box className={classes.root}>
      <Box>
        <TextClamp lines={1}>
          <Text role="productive" color="primary" stronger>
            {name}
          </Text>
        </TextClamp>
      </Box>
      <Box>
        <TextClamp lines={1}>
          <Text role="productive" color="primary" size="xs">
            {`${new Date(deadline).toLocaleDateString(locale)} - ${completionPercentage}`}
          </Text>
        </TextClamp>
      </Box>
    </Box>
  );
};

ActivityHeader.defaultProps = ACTIVIY_HEADER_DEFAULT_PROPS;
ActivityHeader.propTypes = ACTIVIY_HEADER_PROP_TYPES;

export { ActivityHeader };
