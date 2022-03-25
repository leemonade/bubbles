import React, { useMemo } from 'react';
import { isEmpty, isNil } from 'lodash';
import { Text } from '../../typography';
import { Box } from '../../layout/Box';
import { Stack } from '../../layout/Stack';
import { InputError } from '../InputError';
import { InputDescription } from '../InputDescription';
import { InputHelp } from '../InputHelp';
import { InputWrapperStyles } from './InputWrapper.styles';
import {
  INPUT_WRAPPER_DEFAULT_PROPS,
  INPUT_WRAPPER_PROP_TYPES,
  INPUT_WRAPPER_ORIENTATIONS,
  INPUT_WRAPPER_SIZES,
} from './InputWrapper.constants';

const InputWrapper = ({
  orientation: orientationProp,
  size: sizeProp,
  uuid,
  label,
  description,
  error,
  help,
  children,
  required,
  headerClassName,
  contentClassName,
  headerStyle,
  contentStyle,
  className,
  style,
  formValues,
  ...props
}) => {
  const size = INPUT_WRAPPER_SIZES.includes(sizeProp) ? sizeProp : 'sm';
  const orientation = INPUT_WRAPPER_ORIENTATIONS.includes(orientationProp)
    ? orientationProp
    : 'vertical';
  const hasError = useMemo(() => !isEmpty(error), [error]);
  const hasHeader = useMemo(() => !isEmpty(label) || !isEmpty(description), [label, description]);
  const { classes, cx } = InputWrapperStyles({ size, orientation }, { name: 'InputWrapper' });

  const labelProps = !isNil(uuid) ? { htmlFor: uuid, id: `${uuid}-label` } : {};

  return (
    <Box className={cx(classes.root, className)} style={style}>
      {/* Label & Description */}
      {hasHeader && (
        <Stack
          direction="column"
          spacing={1}
          className={cx(classes.header, headerClassName)}
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
      )}

      {/* Input, Error & help */}
      <Stack
        direction="column"
        spacing={1}
        className={cx(classes.content, contentClassName)}
        style={contentStyle}
      >
        {children}

        {hasError && <InputError message={error} />}
        {!isEmpty(help) && !hasError && <InputHelp message={help} />}
      </Stack>
    </Box>
  );
};

InputWrapper.defaultProps = INPUT_WRAPPER_DEFAULT_PROPS;
InputWrapper.propTypes = INPUT_WRAPPER_PROP_TYPES;

export { InputWrapper };
