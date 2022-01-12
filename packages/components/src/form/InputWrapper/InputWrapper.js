import React, { forwardRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mantine/core';
import { isEmpty, isNil } from 'lodash';
import { Text } from '../../typography';
import { Stack } from '../../layout';
import { InputError } from '../InputError';
import { InputDescription } from '../InputDescription';
import { InputHelp } from '../InputHelp';
import { InputWrapperStyles } from './InputWrapper.styles';

export const INPUT_WRAPPER_SIZES = ['xs', 'sm'];
export const INPUT_WRAPPER_ORIENTATIONS = ['horizontal', 'vertical'];

export const INPUT_WRAPPER_SHARED_PROPS = {
  label: PropTypes.string,
  description: PropTypes.string,
  help: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

export const INPUT_WRAPPER_PROP_TYPES = {
  ...INPUT_WRAPPER_SHARED_PROPS,
  size: PropTypes.oneOf(INPUT_WRAPPER_SIZES),
  orientation: PropTypes.oneOf(INPUT_WRAPPER_ORIENTATIONS),
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
    const orientation = INPUT_WRAPPER_ORIENTATIONS.includes(orientationProp)
      ? orientationProp
      : 'vertical';
    const hasError = useMemo(() => !isNil(error) && error !== '', [error]);

    const { classes, cx } = InputWrapperStyles({ size, orientation });

    const labelProps = !isNil(uuid) ? { htmlFor: uuid, id: `${uuid}-label` } : {};

    return (
      <Box className={classes.root}>
        {/* Label & Description */}
        <Stack
          direction="column"
          spacing={1}
          className={cx(classes.header, headerClassname)}
          style={headerStyle}
        >
          {!isEmpty(label) && (
            <Text as="label" color="primary" role="productive" strong {...labelProps}>
              {label}
              {required && <span className={classes.required}> *</span>}
            </Text>
          )}
          {!isEmpty(description) && <InputDescription message={description} />}
        </Stack>

        {/* Input, Error & help */}
        <Stack
          direction="column"
          spacing={1}
          className={cx(classes.content, contentClassname)}
          style={contentStyle}
        >
          {children}

          {hasError && <InputError message={error} />}
          {!isEmpty(help) && !hasError && <InputHelp message={help} />}
        </Stack>
      </Box>
    );
  }
);

InputWrapper.defaultProps = INPUT_WRAPPER_DEFAULT_PROPS;
InputWrapper.propTypes = INPUT_WRAPPER_PROP_TYPES;

export { InputWrapper };
