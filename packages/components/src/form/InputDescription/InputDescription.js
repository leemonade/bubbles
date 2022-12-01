import React from 'react';
import { Text } from '@mantine/core';
import {
  INPUT_DESCRIPTION_DEFAULT_PROPS,
  INPUT_DESCRIPTION_PROP_TYPES,
} from './InputDescription.constants';
import { InputDescriptionStyles } from './InputDescription.styles';
import { AlertInformationCircleIcon } from '@bubbles-ui/icons/solid';
import { Box } from '../../layout';

const InputDescription = ({ message, withIcon, ...props }) => {
  const { classes, cx } = InputDescriptionStyles({ withIcon });

  return (
    <Box className={classes.container}>
      {withIcon && (
        <Box className={classes.descriptionIcon}>
          <AlertInformationCircleIcon />
        </Box>
      )}
      <Text className={classes.description}>{message}</Text>
    </Box>
  );
};

InputDescription.defaultProps = INPUT_DESCRIPTION_DEFAULT_PROPS;
InputDescription.propTypes = INPUT_DESCRIPTION_PROP_TYPES;

export { InputDescription };
