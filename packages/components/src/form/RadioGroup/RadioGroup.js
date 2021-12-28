import React, { forwardRef, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Center, SegmentedControl as MantineSegmentedControl } from '@mantine/core';
import { RadioGroupStyles } from './RadioGroup.styles';
import { Radio, RADIO_VARIANTS } from '../Radio/Radio';

export const RADIOGROUP_DIRECTIONS = ['column', 'row'];

const RadioGroup = forwardRef(
  ({ variant = 'default', data, defaultValue, direction, fullWidth, ...props }, ref) => {
    const [value, setValue] = useState(props.value);
    const [activePosition, setActivePosition] = useState({ height: 0, translate: 0 });
    const refs = useRef({});
    const wrapperRef = useRef();
    const { classes, cx } = RadioGroupStyles(
      { variant, value, direction, fullWidth, activePosition },
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
      setValue(value);
      props.onChange(value);
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
      <div ref={wrapperRef}>
        <MantineSegmentedControl
          {...props}
          onChange={onChange}
          classNames={classes}
          defaultValue={defaultValue ? defaultValue : ' '}
          value={value}
          ref={ref}
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
        ></MantineSegmentedControl>
      </div>
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
};

export { RadioGroup };
