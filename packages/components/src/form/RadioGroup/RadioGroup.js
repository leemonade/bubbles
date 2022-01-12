import React, { useMemo, forwardRef, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { isNil } from 'lodash';
import { Box, SegmentedControl as MantineSegmentedControl } from '@mantine/core';
import { RadioGroupStyles } from './RadioGroup.styles';
import { Radio, RADIO_VARIANTS } from '../Radio/Radio';
import { InputError } from '../../form';

export const RADIOGROUP_DIRECTIONS = ['column', 'row'];

export const RADIOGROUP_DEFAULT_PROPS = {
  variant: RADIO_VARIANTS[0],
  defaultValue: '',
  value: '',
  fullWidth: false,
  error: '',
};
export const RADIOGROUP_PROP_TYPES = {
  variant: PropTypes.oneOf(RADIO_VARIANTS),
  data: PropTypes.arrayOf(Object),
  defaultValue: PropTypes.string,
  direction: PropTypes.oneOf(RADIOGROUP_DIRECTIONS),
  fullWidth: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

const RadioGroup = forwardRef(
  ({ variant, data, defaultValue, direction, fullWidth, error, ...props }, ref) => {
    const [value, setValue] = useState(props.value);
    const [activePosition, setActivePosition] = useState({ height: 0, translate: 0 });
    const refs = useRef({});
    const wrapperRef = useRef();
    const hasError = useMemo(() => !isNil(error) && error !== '', [error]);

    const { classes, cx } = RadioGroupStyles(
      { variant, value, direction, fullWidth, activePosition, hasError },
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
      props.onChange(value);
      setValue(value);
    };

    useEffect(() => {
      const observer = new ResizeObserver(() => {
        if (value) {
          const element = refs.current[value].closest('.mantine-SegmentedControl-label');

          const rect = element.getBoundingClientRect();
          setActivePosition({
            height: Math.floor(rect.height),
            translate: rect.y - wrapperRef.current.getBoundingClientRect().y,
          });
        }
      });

      observer.observe(wrapperRef.current);
      return () => observer.disconnect();
    }, [value]);

    return (
      <Box ref={wrapperRef}>
        <MantineSegmentedControl
          {...props}
          ref={ref}
          onChange={onChange}
          classNames={classes}
          defaultValue={defaultValue ? defaultValue : ' '}
          value={value}
          data={data.map(({ label, ...item }, index) => {
            return {
              value: item.value,
              label: (
                <Radio
                  ref={(node) => {
                    refs.current[item.value] = node;
                  }}
                  key={index}
                  className={classes.radio}
                  variant={variant}
                  {...item}
                  checked={value === item.value}
                  onChange={() => {}}
                >
                  {label}
                </Radio>
              ),
            };
          })}
        />
        {hasError && (
          <Box mt={10}>
            <InputError message={error} />
          </Box>
        )}
      </Box>
    );
  }
);

RadioGroup.propTypes = {
  variant: PropTypes.oneOf(RADIO_VARIANTS),
  data: PropTypes.arrayOf(Object),
  defaultValue: PropTypes.string,
  direction: PropTypes.oneOf(RADIOGROUP_DIRECTIONS),
  fullWidth: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export { RadioGroup };
