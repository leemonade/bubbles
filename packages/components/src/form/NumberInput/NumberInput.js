import React, { forwardRef, useRef } from 'react';
import PropTypes from 'prop-types';
import { NumberInput as MantineNumberInput, ActionIcon as MantineActionIcon } from '@mantine/core';
import { isEmpty } from 'lodash';
import { useId } from '@mantine/hooks';
import { Box } from '@bubbles-ui/components';
import {
  INPUT_WRAPPER_ORIENTATIONS,
  INPUT_WRAPPER_SIZES,
  InputWrapper,
  INPUT_WRAPPER_SHARED_PROPS,
} from '../InputWrapper';
import { Paragraph } from '../../typography';
import { NumberInputStyles } from './NumberInput.styles';

export const NUMBER_INPUT_PROP_TYPES = {
  ...INPUT_WRAPPER_SHARED_PROPS,
  orientation: PropTypes.oneOf(INPUT_WRAPPER_ORIENTATIONS),
  size: PropTypes.oneOf(INPUT_WRAPPER_SIZES),
  autoComplete: PropTypes.string,
  label: PropTypes.string,
  description: PropTypes.string,
  error: PropTypes.string,
  required: PropTypes.bool,
  customDesign: PropTypes.bool,
};

export const NUMBER_INPUT_DEFAULT_PROPS = {
  label: '',
  description: '',
  size: INPUT_WRAPPER_SIZES[1],
  orientation: INPUT_WRAPPER_ORIENTATIONS[1],
  error: '',
  required: false,
  autoComplete: 'off',
  customDesign: false,
};

const NumberInput = forwardRef(
  (
    {
      error,
      size,
      label,
      orientation,
      description,
      help,
      readOnly,
      icon,
      required,
      headerStyle,
      contentStyle,
      headerClassName,
      contentClassName,
      ariaLabel,
      customDesign,
      ...props
    },
    ref,
  ) => {
    const uuid = useId();
    const hasIcon = !!icon;
    const { classes, cx } = NumberInputStyles(
      { size, hasIcon, customDesign },
      { name: 'NumberInput' },
    );
    const customDesignRef = useRef();

    return (
      <InputWrapper
        uuid={uuid}
        size={size}
        error={error}
        label={label}
        description={description}
        orientation={orientation}
        required={required}
        help={help}
        headerStyle={headerStyle}
        contentStyle={contentStyle}
        headerClassName={headerClassName}
        contentClassName={contentClassName}
      >
        {readOnly ? (
          <Paragraph clean>{props.value || props.defaultValue || ''}</Paragraph>
        ) : (
          <Box className={customDesign && classes.customDesignRoot}>
            {customDesign && (
              <MantineActionIcon
                size={42}
                variant="transparent"
                onClick={() => customDesignRef.current.decrement()}
                className={classes.customDesignHandlerRemove}
              >
                –
              </MantineActionIcon>
            )}
            <MantineNumberInput
              {...props}
              hideControls={customDesign || props.hideControls}
              ref={ref}
              handlersRef={customDesignRef}
              icon={icon}
              classNames={classes}
              error={!isEmpty(error)}
              aria-label={ariaLabel}
            />
            {customDesign && (
              <MantineActionIcon
                size={42}
                variant="transparent"
                onClick={() => customDesignRef.current.increment()}
                className={classes.customDesignHandlerAdd}
              >
                +
              </MantineActionIcon>
            )}
          </Box>
        )}
      </InputWrapper>
    );
  },
);

NumberInput.propTypes = NUMBER_INPUT_PROP_TYPES;
NumberInput.defaultProps = NUMBER_INPUT_DEFAULT_PROPS;
NumberInput.displayName = 'NumberInput';

export { NumberInput };
