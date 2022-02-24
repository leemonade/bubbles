import React, { forwardRef, useState, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import {
  MultiSelect as MantineMultiSelect,
  Autocomplete as MantineAutocomplete,
} from '@mantine/core';
import { DeleteIcon } from '@bubbles-ui/icons/solid/';
import { isFunction, isEmpty } from 'lodash';
import { useId } from '@mantine/hooks';
import {
  InputWrapper,
  INPUT_WRAPPER_PROP_TYPES,
  INPUT_WRAPPER_DEFAULT_PROPS,
} from '../InputWrapper';
import { Box } from '../../layout';
import { AutocompleteStyles } from './Autocomplete.styles';
import { Text } from '../../typography/Text';

export const AUTOCOMPLETE_DEFAULT_PROPS = {
  ...INPUT_WRAPPER_DEFAULT_PROPS,
  itemComponent: forwardRef(({ value, ...others }, ref) => (
    <Box ref={ref} {...others}>
      <Text>{value}</Text>
    </Box>
  )),
  valueComponent: forwardRef(({ value, onRemove, classNames, ...others }, ref) => (
    <Box ref={ref} {...others} onClick={onRemove} style={{ cursor: 'pointer' }}>
      <Text>{value}</Text>
    </Box>
  )),
  multiple: false,
  value: [],
  placeholder: '',
  ignoreWrapper: false,
};

export const AUTOCOMPLETE_PROP_TYPES = {
  ...INPUT_WRAPPER_PROP_TYPES,
  placeholder: PropTypes.string,
  data: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(
      PropTypes.shape({ value: PropTypes.string.isRequired, label: PropTypes.string })
    ),
  ]).isRequired,
  value: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(
      PropTypes.shape({ value: PropTypes.string.isRequired, label: PropTypes.string })
    ),
  ]),
  itemComponent: PropTypes.elementType,
  valueComponent: PropTypes.elementType,
  nothingFoundLabel: PropTypes.string,
  multiple: PropTypes.bool,
  onItemSubmit: PropTypes.func,
  id: PropTypes.string,
  ignoreWrapper: PropTypes.bool,
};

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
      onItemSubmit,
      onChange,
      id,
      ignoreWrapper,
      ...props
    },
    ref
  ) => {
    const { classes, cx } = AutocompleteStyles({ multiple }, { name: 'Autocomplete' });
    const [selectedValue, setSelectedValue] = useState(value.length > 1 ? value : null);
    const [inputValue, setInputValue] = useState('');
    const uuid = useId();

    const onItemSubmitHandler = (e) => {
      isFunction(onItemSubmit) && onItemSubmit(e);
      setSelectedValue(e);
    };

    const onChangeHandler = (e) => {
      isFunction(onChange) && onChange(e);
      setInputValue(e);
    };

    const deleteValues = () => {
      setSelectedValue(null);
      setInputValue('');
    };

    useImperativeHandle(ref, () => ({
      deleteValues: () => deleteValues(),
    }));

    const Wrapper = !ignoreWrapper ? InputWrapper : React.Fragment;
    const wrapperProps = !ignoreWrapper
      ? { uuid: id || uuid, size, error, label, description, help, required }
      : {};

    return (
      <Wrapper {...wrapperProps}>
        {!multiple ? (
          <MantineAutocomplete
            {...props}
            id={id || uuid}
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
            onChange={onChangeHandler}
            data={data}
            ref={ref}
            classNames={classes}
            error={!isEmpty(error)}
          />
        ) : (
          <MantineMultiSelect
            {...props}
            id={id || uuid}
            ref={ref}
            classNames={classes}
            placeholder={placeholder}
            data={data}
            searchable={true}
            value={selectedValue}
            itemComponent={itemComponent}
            valueComponent={valueComponent}
            nothingFound={nothingFoundLabel}
            rightSection={<></>}
            rightSectionWidth={0}
            onChange={(e) => {
              onItemSubmitHandler(e);
              setInputValue(e);
            }}
            error={!isEmpty(error)}
          />
        )}
      </Wrapper>
    );
  }
);

Autocomplete.defaultProps = AUTOCOMPLETE_DEFAULT_PROPS;
Autocomplete.propTypes = AUTOCOMPLETE_PROP_TYPES;

export { Autocomplete };
