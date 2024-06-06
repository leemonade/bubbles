import React from 'react';
import { isEmpty } from 'lodash';
import { Box } from '../../layout/Box';
import { Text } from '../../typography/Text';
import { InputDescription } from '../InputDescription';
import { InputLabelStyles } from './InputLabel.styles';
import { INPUT_LABEL_DEFAULT_PROPS, INPUT_LABEL_PROP_TYPES } from './InputLabel.constants';

const InputLabel = ({
  label,
  description,
  withDescriptionIcon,
  required,
  showEmptyLabel,
  ...props
}) => {
  const { classes } = InputLabelStyles({}, { name: 'InputLabel' });

  return (
    <Box className={classes.container}>
      {(!isEmpty(label) || showEmptyLabel) && (
        <Text as="label" className={classes.label} {...props}>
          {!isEmpty(label) ? label : <span dangerouslySetInnerHTML={{ __html: '&nbsp;' }} />}
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
