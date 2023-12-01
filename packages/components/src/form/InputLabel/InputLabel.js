import React from 'react';
import { isEmpty } from 'lodash';
import { Box } from '../../layout/Box';
import { Text } from '../../typography/Text';
import { InputDescription } from '../InputDescription';
import { InputLabelStyles } from './InputLabel.styles';
import { INPUT_LABEL_DEFAULT_PROPS, INPUT_LABEL_PROP_TYPES } from './InputLabel.constants';

const InputLabel = ({ label, description, withDescriptionIcon, required, ...props }) => {
  const { classes } = InputLabelStyles({}, { name: 'InputLabel' });

  return (
    <Box className={classes.container}>
      {!isEmpty(label) && (
        <Text as="label" className={classes.label} {...props}>
          {label}
          {required && <span className={classes.required}>*</span>}
        </Text>
      )}
      {!isEmpty(description) && (
        <InputDescription message={description} withIcon={withDescriptionIcon} />
      )}
    </Box>
  );
};

InputLabel.defaultProps = INPUT_LABEL_DEFAULT_PROPS;
InputLabel.propTypes = INPUT_LABEL_PROP_TYPES;

export { InputLabel };
