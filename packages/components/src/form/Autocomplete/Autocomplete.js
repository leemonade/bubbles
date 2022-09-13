import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import {
  Autocomplete as MantineAutocomplete,
  MultiSelect as MantineMultiSelect,
} from '@mantine/core';
import { DeleteIcon } from '@bubbles-ui/icons/solid';
import { isEmpty, isFunction } from 'lodash';
import { useDebouncedValue, useId } from '@mantine/hooks';
import { InputWrapper } from '../InputWrapper';
import { AutocompleteStyles } from './Autocomplete.styles';
import { AUTOCOMPLETE_DEFAULT_PROPS, AUTOCOMPLETE_PROP_TYPES } from './Autocomplete.constants';

const Autocomplete = forwardRef(
  (
    {
      label,
      description,
      help,
      required,
      orientation,
      size,
      error,
      placeholder,
      data,
      value,
      itemComponent,
      valueComponent,
      nothingFoundLabel,
      multiple,
      id,
      ignoreWrapper,
      waitToSearch,
      autoComplete,
      ariaLabel,
      className,
      onItemSubmit = () => {},
      onChange = () => {},
      onSearch = () => {},
      ...props
    },
    ref
  ) => {
    const [selectedValue, setSelectedValue] = useState(Array.isArray(value) ? value : null);
    const [inputValue, setInputValue] = useState(value || '');
    const [debouncedValue] = useDebouncedValue(inputValue, waitToSearch);
    const uuid = useId();

    const Wrapper = !ignoreWrapper ? InputWrapper : React.Fragment;
    const wrapperProps = !ignoreWrapper
      ? { uuid: id || uuid, size, error, label, description, help, required }
      : {};

    useEffect(() => {
      onSearch(debouncedValue);
    }, [debouncedValue]);

    useEffect(() => {
      setSelectedValue(Array.isArray(value) ? value : null);
      setInputValue(value);
    }, [value]);

    // ················································································
    // HANDLERS

    const onItemSubmitHandler = (e) => {
      isFunction(onItemSubmit) && onItemSubmit(e);
      setSelectedValue(e);
    };

    const onChangeHandler = (e) => {
      setInputValue(e);
      isFunction(onChange) && onChange(e);
    };

    const deleteValues = () => {
      setSelectedValue(null);
      setInputValue('');
      isFunction(onChange) && onChange('');
    };

    useImperativeHandle(ref, () => ({
      deleteValues: () => deleteValues(),
    }));

    // ················································································
    // STYLES

    const { classes, cx } = AutocompleteStyles({ multiple }, { name: 'Autocomplete' });

    return (
      <Wrapper {...wrapperProps}>
        {multiple ? (
          <MantineMultiSelect
            {...props}
            id={id || uuid}
            ref={ref}
            classNames={classes}
            className={className}
            placeholder={placeholder}
            data={data}
            searchable={true}
            value={selectedValue}
            itemComponent={itemComponent}
            valueComponent={valueComponent}
            nothingFound={nothingFoundLabel}
            rightSection={<></>}
            rightSectionWidth={0}
            autoComplete={autoComplete}
            onChange={(e) => {
              onItemSubmitHandler(e);
              setInputValue(e);
            }}
            error={!isEmpty(error)}
            aria-label={ariaLabel}
          />
        ) : (
          <MantineAutocomplete
            {...props}
            id={id || uuid}
            value={inputValue}
            placeholder={placeholder}
            itemComponent={itemComponent}
            onItemSubmit={onItemSubmitHandler}
            className={className}
            nothingFound={nothingFoundLabel}
            rightSection={
              inputValue && (
                <DeleteIcon
                  height={12}
                  width={12}
                  className={classes.deleteIcon}
                  onClick={deleteValues}
                />
              )
            }
            onChange={onChangeHandler}
            data={data}
            ref={ref}
            autoComplete={autoComplete}
            classNames={classes}
            error={!isEmpty(error)}
            aria-label={ariaLabel}
          />
        )}
      </Wrapper>
    );
  }
);

Autocomplete.defaultProps = AUTOCOMPLETE_DEFAULT_PROPS;
Autocomplete.propTypes = AUTOCOMPLETE_PROP_TYPES;

export { Autocomplete };
