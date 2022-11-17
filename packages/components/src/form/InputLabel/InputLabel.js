import React from 'react';
import { InputLabelStyles } from './InputLabel.styles';
import { INPUT_LABEL_DEFAULT_PROPS, INPUT_LABEL_PROP_TYPES } from './InputLabel.constants';
import { Text } from '../../typography';
import { InputDescription } from '../InputDescription';
import { isEmpty } from 'lodash';
import { Box } from '../../layout';

const InputLabel = ({ label, description, withDescriptionIcon, required, ...props }) => {
  const { classes, cx } = InputLabelStyles({}, { name: 'InputLabel' });

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
