import React, { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
  MultiSelect as MantineMultiSelect,
  Autocomplete as MantineAutocomplete,
} from '@mantine/core';
import { InputWrapper, INPUT_WRAPPER_SIZES } from '../InputWrapper';
import { AutocompleteStyles } from './Autocomplete.styles';
import { useId } from '@mantine/hooks';
import { Text } from '../../typography/Text';
import { DeleteIcon } from '@bubbles-ui/icons/solid/';

export const AUTOCOMPLETE_DEFAULT_PROPS = {
  itemComponent: forwardRef(({ children, ...others }, ref) => (
    <div ref={ref} {...others}>
      <Text>{children}</Text>
    </div>
  )),
  valueComponent: forwardRef(({ children, onRemove, classNames, ...others }, ref) => (
    <Text ref={ref} {...others} onClick={onRemove} style={{ cursor: 'pointer' }}>
      {children}
    </Text>
  )),
  multiple: false,
};

export const AUTOCOMPLETE_PROP_TYPES = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  data: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(
      PropTypes.shape({ value: PropTypes.string.isRequired, label: PropTypes.string })
    ),
  ]).isRequired,
  itemComponent: PropTypes.elementType,
  valueComponent: PropTypes.elementType,
  nothingFoundLabel: PropTypes.string,
  multiple: PropTypes.bool,
  size: PropTypes.oneOf(INPUT_WRAPPER_SIZES),
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onItemSubmit: PropTypes.func,
};

const Autocomplete = forwardRef(
  (
    {
      label,
      placeholder,
      data,
      itemComponent,
      valueComponent,
      nothingFoundLabel,
      multiple,
      size,
      error,
      onItemSubmit,
      ...props
    },
    ref
  ) => {
    const { classes, cx } = AutocompleteStyles({ multiple });

    const [selectedValue, setSelectedValue] = useState(null);
    const [inputValue, setInputValue] = useState('');

    const onItemSubmitHandler = (e) => {
      onItemSubmit && onItemSubmit(e);
      setSelectedValue(e);
    };

    const deleteValues = () => {
      setSelectedValue(null);
      setInputValue('');
    };

    const uuid = useId();
    return (
      <InputWrapper uuid={uuid} size={size} error={error}>
        {!multiple ? (
          <MantineAutocomplete
            label={label}
            value={inputValue}
            placeholder={placeholder}
            itemComponent={itemComponent}
            onItemSubmit={onItemSubmitHandler}
            nothingFound={nothingFoundLabel}
            rightSection={
              selectedValue && (
                <DeleteIcon
                  height={12}
                  width={12}
                  className={classes.deleteIcon}
                  onClick={deleteValues}
                />
              )
            }
            onChange={(e) => setInputValue(e)}
            data={data}
            {...props}
            ref={ref}
            classNames={classes}
          />
        ) : (
          <MantineMultiSelect
            ref={ref}
            classNames={classes}
            {...props}
            label={label}
            placeholder={placeholder}
            data={data}
            searchable={true}
            itemComponent={itemComponent}
            valueComponent={valueComponent}
            nothingFound={nothingFoundLabel}
            rightSection={<></>}
            rightSectionWidth={0}
          />
        )}
      </InputWrapper>
    );
  }
);

Autocomplete.defaultProps = AUTOCOMPLETE_DEFAULT_PROPS;

Autocomplete.propTypes = AUTOCOMPLETE_PROP_TYPES;

export { Autocomplete };
