import React, { forwardRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mantine/core';
import { isEmpty, isNil } from 'lodash';
import { Text } from '../../typography';
import { InputError } from '../InputError';
import { InputDescription } from '../InputDescription';
import { InputHelp } from '../InputHelp';
import { InputWrapperStyles } from './InputWrapper.styles';

export const INPUT_WRAPPER_SIZES = ['xs', 'sm'];
export const INPUT_WRAPPER_ORIENTATION = ['horizontal', 'vertical'];

export const INPUT_WRAPPER_PROP_TYPES = {
  label: PropTypes.string,
  description: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(INPUT_WRAPPER_SIZES),
  orientation: PropTypes.oneOf(INPUT_WRAPPER_ORIENTATION),
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  help: PropTypes.string,
  required: PropTypes.bool,
  headerClassname: PropTypes.string,
  contentClassname: PropTypes.string,
  headerStyle: PropTypes.any,
  contentStyle: PropTypes.any,
};
export const INPUT_WRAPPER_DEFAULT_PROPS = {
  as: 'input',
  orientation: 'vertical',
  size: 'sm',
  required: false,
};

const InputWrapper = forwardRef(
  (
    {
      radius, // Just to pick it up to not pass to props
      as,
      orientation: orientationProp,
      size: sizeProp,
      uuid,
      label,
      description,
      error,
      help,
      children,
      required,
      headerClassname,
      contentClassname,
      headerStyle,
      contentStyle,
      ...props
    },
    ref
  ) => {
    const size = INPUT_WRAPPER_SIZES.includes(sizeProp) ? sizeProp : 'sm';
    const orientation = INPUT_WRAPPER_ORIENTATION.includes(orientationProp)
      ? orientationProp
      : 'vertical';
    const hasError = useMemo(() => !isNil(error) && error !== '', [error]);

    const { classes, cx } = InputWrapperStyles({ size, orientation });

    const labelProps = !isNil(uuid) ? { htmlFor: uuid, id: `${uuid}-label` } : {};

    return (
      <Box className={classes.root}>
        {/* Label & Description */}
        <Box className={cx(classes.header, headerClassname)} style={headerStyle}>
          {!isEmpty(label) && (
            <Text as="label" color="primary" role="productive" strong {...labelProps}>
              {label}
              {required && <span className={classes.required}> *</span>}
            </Text>
          )}
          {!isEmpty(description) && <InputDescription message={description} />}
        </Box>

        {/* Input, Error & help */}
        <Box className={cx(classes.content, contentClassname)} style={contentStyle}>
          {children}
          {hasError && <InputError message={error} />}
          {!isEmpty(help) && !hasError && <InputHelp message={help} />}
        </Box>
      </Box>
    );
  }
);

InputWrapper.defaultProps = INPUT_WRAPPER_DEFAULT_PROPS;
InputWrapper.propTypes = INPUT_WRAPPER_PROP_TYPES;

export { InputWrapper };
