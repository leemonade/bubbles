import React, { forwardRef, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { ChevDownIcon, RemoveIcon } from '@bubbles-ui/icons/outline';
import { Select as MantineSelect } from '@mantine/core';
import { isEmpty, isFunction, isNil, isString, map } from 'lodash';
import { useId } from '@mantine/hooks';
import { INPUT_WRAPPER_ORIENTATIONS, INPUT_WRAPPER_SIZES, InputWrapper } from '../InputWrapper';
import { ActionButton } from '../ActionButton';
import { SelectStyles } from './Select.styles';
import { Paragraph } from '../../typography';

export const SELECT_SIZES = INPUT_WRAPPER_SIZES;
export const SELECT_ORIENTATIONS = INPUT_WRAPPER_ORIENTATIONS;

const Select = forwardRef(
  (
    {
      radius, // Just to pick it up to not pass to props
      dropdownPosition,
      error,
      size,
      clearable,
      onChange,
      itemComponent,
      onBlur,
      value: _value,
      defaultValue,
      name,
      data: _data,
      icon,
      disabled,
      searchable,
      getCreateLabel,
      onSearchChange,
      onDropdownOpen,
      onDropdownClose,
      initiallyOpened,
      creatable,
      onCreate,
      nothingFound,
      placeholder,
      className,
      autoComplete,
      readOnly,
      variant,
      ...props
    },
    ref
  ) => {
    const data = map(_data, (d) => (isString(d) ? d : { ...d, value: d.value.toString() }));
    const value = isNil(_value) ? _value : _value.toString();
    const uuid = useId();
    const isClearable = useMemo(() => isString(clearable) && clearable !== '', [clearable]);

    // ······················································
    // HANDLERS

    const [showClear, setShowClear] = useState(false);

    const handleChange = (ev) => {
      setShowClear(!isNil(ev));

      if (isFunction(onChange)) {
        onChange(ev);
      }
    };

    const handleClear = () => {
      handleChange(null);
    };

    // ······················································
    // LABELS & STATIC

    const dataValue = useMemo(() => {
      if (isNil(value)) {
        return '';
      }

      const found = data.find((d) => d.value === value);

      return found ? found.label : '';
    }, [data, value]);

    // ······················································
    // STYLES

    const { classes, cx } = SelectStyles({ size }, { name: 'Select' });

    return (
      <InputWrapper {...props} uuid={uuid} size={size} error={error}>
        {readOnly ? (
          <Paragraph clean>{dataValue}</Paragraph>
        ) : (
          <MantineSelect
            ref={ref}
            autoComplete={autoComplete}
            id={uuid}
            size={size}
            data={data}
            onChange={handleChange}
            onBlur={onBlur}
            value={value}
            itemComponent={itemComponent}
            creatable={creatable}
            onCreate={onCreate}
            defaultValue={defaultValue}
            name={name}
            disabled={disabled}
            searchable={searchable}
            onSearchChange={onSearchChange}
            onDropdownOpen={onDropdownOpen}
            onDropdownClose={onDropdownClose}
            initiallyOpened={initiallyOpened}
            getCreateLabel={getCreateLabel}
            nothingFound={nothingFound}
            placeholder={placeholder}
            variant={variant}
            rightSection={
              isClearable && showClear ? (
                <ActionButton
                  icon={<RemoveIcon />}
                  tooltip={clearable}
                  size={size}
                  onClick={handleClear}
                />
              ) : (
                <ChevDownIcon className={classes.rightSection} />
              )
            }
            className={className}
            classNames={classes}
            icon={icon}
            error={!isEmpty(error)}
          />
        )}
      </InputWrapper>
    );
  }
);

Select.defaultProps = {
  size: 'sm',
  orientation: 'vertical',
  autoComplete: 'off',
  readOnly: false,
  variant: 'default',
};

Select.propTypes = {
  label: PropTypes.string,
  description: PropTypes.string,
  placeholder: PropTypes.string,
  data: PropTypes.any,
  required: PropTypes.bool,
  size: PropTypes.oneOf(SELECT_SIZES),
  orientation: PropTypes.oneOf(SELECT_ORIENTATIONS),
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  searchable: PropTypes.bool,
  clearable: PropTypes.string,
  nothingFound: PropTypes.any,
  disabled: PropTypes.bool,
  onDropdownOpen: PropTypes.func,
  onDropdownClose: PropTypes.func,
  style: PropTypes.object,
  autoComplete: PropTypes.string,
  readOnly: PropTypes.bool,
};

export { Select };
