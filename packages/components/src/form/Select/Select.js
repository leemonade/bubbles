import React, { forwardRef, useEffect, useMemo, useState } from 'react';
import { ChevDownIcon, RemoveIcon } from '@bubbles-ui/icons/outline';
import { Select as MantineSelect } from '@mantine/core';
import { isEmpty, isFunction, isNil, isString, map } from 'lodash';
import { SELECT_PROP_TYPES, SELECT_DEFAULT_PROPS } from './Select.constants';
import { useId } from '@mantine/hooks';
import { InputWrapper } from '../InputWrapper';
import { ActionButton } from '../ActionButton';
import { SelectStyles } from './Select.styles';
import { Paragraph } from '../../typography';
import { MultiSelect } from '../MultiSelect';
import { Dropdown, Item } from '../../overlay/Dropdown';

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
      valueComponent,
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
      autoSelectOneOption,
      ariaLabel,
      withinPortal,
      ...props
    },
    ref
  ) => {
    const data = map(_data, (d) => (isString(d) ? d : { ...d, value: d?.value.toString() }));
    const value = isNil(_value) ? _value : _value.toString();
    const uuid = useId();
    const isClearable = useMemo(() => isString(clearable) && clearable !== '', [clearable]);
    const autoSelectOneOptionMode = autoSelectOneOption && data.length === 1;

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
    // useEffects

    useEffect(() => {
      if (!autoSelectOneOptionMode) return;
      if (data[0].value && data[0].value !== value)
        handleChange(valueComponent ? [data[0].value] : data[0].value);
    }, [autoSelectOneOption, data]);

    // ······················································
    // STYLES

    const { classes, cx } = SelectStyles(
      { size, rightEvents: isClearable && showClear, variant },
      { name: 'Select' }
    );

    Dropdown.props = { data };

    return valueComponent ? (
      <MultiSelect
        data={data}
        value={value ? [value] : undefined}
        onChange={handleChange}
        valueComponent={valueComponent}
        multiple={false}
        clearable={clearable}
        size={size}
        itemComponent={itemComponent}
        creatable={creatable}
        onCreate={onCreate}
        defaultValue={defaultValue}
        name={name}
        dropdownPosition={dropdownPosition}
        disabled={disabled || autoSelectOneOptionMode}
        searchable={searchable}
        onSearchChange={onSearchChange}
        onDropdownOpen={onDropdownOpen}
        onDropdownClose={onDropdownClose}
        initiallyOpened={initiallyOpened}
        getCreateLabel={getCreateLabel}
        nothingFound={nothingFound}
        placeholder={placeholder}
        error={error}
        ariaLabel={ariaLabel}
        {...props}
      ></MultiSelect>
    ) : (
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
            dropdownComponent={Dropdown}
            itemComponent={itemComponent || Item}
            creatable={creatable}
            onCreate={onCreate}
            defaultValue={defaultValue}
            name={name}
            disabled={disabled || autoSelectOneOptionMode}
            searchable={searchable}
            onSearchChange={onSearchChange}
            onDropdownOpen={onDropdownOpen}
            onDropdownClose={onDropdownClose}
            initiallyOpened={initiallyOpened}
            dropdownPosition={dropdownPosition}
            getCreateLabel={getCreateLabel}
            nothingFound={nothingFound}
            placeholder={placeholder}
            variant={variant}
            rightSection={
              isClearable && showClear && !autoSelectOneOptionMode ? (
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
            aria-label={ariaLabel}
            withinPortal={withinPortal}
          />
        )}
      </InputWrapper>
    );
  }
);

Select.defaultProps = SELECT_DEFAULT_PROPS;
Select.propTypes = SELECT_PROP_TYPES;

export { Select };
