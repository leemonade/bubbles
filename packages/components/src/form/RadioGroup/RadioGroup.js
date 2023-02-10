import React, { forwardRef, useEffect, useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { isEmpty, map } from 'lodash';
import { Box, SegmentedControl as MantineSegmentedControl } from '@mantine/core';
import { useId } from '@mantine/hooks';
import { RadioGroupStyles } from './RadioGroup.styles';
import { Radio, RADIO_VARIANTS } from '../Radio/Radio';
import {
  INPUT_WRAPPER_ORIENTATIONS,
  INPUT_WRAPPER_SHARED_PROPS,
  INPUT_WRAPPER_SIZES,
  InputWrapper,
} from '../InputWrapper';
import { isFunction } from 'lodash';

export const RADIOGROUP_DIRECTIONS = ['column', 'row'];

export const RADIOGROUP_DEFAULT_PROPS = {
  label: '',
  description: '',
  help: '',
  required: false,
  error: '',
  orientation: 'vertical',
  direction: 'row',
  size: 'sm',
  variant: RADIO_VARIANTS[0],
  rounded: false,
  defaultValue: '',
  value: '',
  imageHeight: 100,
  fullWidth: false,
  useAria: true,
};
export const RADIOGROUP_PROP_TYPES = {
  ...INPUT_WRAPPER_SHARED_PROPS,
  variant: PropTypes.oneOf(RADIO_VARIANTS),
  rounded: PropTypes.bool,
  size: PropTypes.oneOf(INPUT_WRAPPER_SIZES),
  data: PropTypes.arrayOf(Object),
  defaultValue: PropTypes.string,
  direction: PropTypes.oneOf(RADIOGROUP_DIRECTIONS),
  orientation: PropTypes.oneOf(INPUT_WRAPPER_ORIENTATIONS),
  fullWidth: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.any,
  imageHeight: PropTypes.number,
  useAria: PropTypes.bool,
};

const RadioGroup = forwardRef(
  (
    {
      label,
      description,
      help,
      required,
      error,
      size,
      orientation,
      variant,
      rounded,
      data,
      defaultValue,
      direction,
      imageHeight,
      fullWidth,
      useAria,
      ...props
    },
    ref
  ) => {
    const [value, setValue] = useState(props.value);
    const [activePosition, setActivePosition] = useState({ height: 0, translate: 0 });
    const refs = useRef({});
    const wrapperRef = useRef();
    const hasError = useMemo(() => !isEmpty(error), [error]);
    const uuid = useId();

    React.useEffect(() => {
      setValue(props.value);
    }, [props.value]);

    const { classes, cx } = RadioGroupStyles(
      { variant, value, direction, fullWidth, activePosition, hasError, rounded },
      { name: 'RadioGroup' }
    );

    if (!direction) {
      if (variant === 'default') {
        direction = 'column';
      } else if (variant === 'boxed') {
        direction = 'row';
      }
    }
    if (variant === 'icon') {
      direction = 'row';
    }

    const onChange = (value) => {
      const item = data.find((item) => item.value === value);
      if (!props.disabled && !item.disabled) {
        isFunction(props.onChange) && props.onChange(value);
        setValue(value);
      }
    };

    useEffect(() => {
      const observer = new ResizeObserver(() => {
        if (value) {
          const element = refs.current[value]?.closest('.mantine-SegmentedControl-label');

          if (element) {
            const rect = element.getBoundingClientRect();
            setActivePosition({
              height: Math.floor(rect.height),
              // translate: rect.y - wrapperRef.current.getBoundingClientRect().y,
            });
          }
        }
      });

      observer.observe(wrapperRef.current);
      return () => observer.disconnect();
    }, [value]);

    return (
      <InputWrapper
        uuid={uuid}
        orientation={orientation}
        label={label}
        size={size}
        description={description}
        help={help}
        error={error}
        required={required}
      >
        <Box ref={wrapperRef} role={useAria ? 'radiogroup' : undefined}>
          <MantineSegmentedControl
            {...props}
            ref={ref}
            id={uuid}
            size={size}
            onChange={onChange}
            classNames={classes}
            defaultValue={defaultValue ? defaultValue : ' '}
            value={value}
            data={map(data, ({ label, ...item }, index) => ({
              value: item.value,
              label: (
                <Radio
                  {...item}
                  disabled={item.disabled || props.disabled}
                  ref={(node) => {
                    refs.current[item.value] = node;
                  }}
                  size={size}
                  key={index}
                  className={classes.radio}
                  variant={variant}
                  checked={value === item.value}
                  onChange={() => {}}
                  imageHeight={imageHeight}
                  useAria={useAria}
                >
                  {label}
                </Radio>
              ),
            }))}
          />
        </Box>
      </InputWrapper>
    );
  }
);

RadioGroup.propTypes = RADIOGROUP_PROP_TYPES;
RadioGroup.defaultProps = RADIOGROUP_DEFAULT_PROPS;

export { RadioGroup };
