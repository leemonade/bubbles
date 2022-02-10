import React, { forwardRef, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { MultiSelectStyles } from './MultiSelect.styles';
import { isArray, isFunction, isString, isEmpty } from 'lodash';
import { MultiSelect as MantineMultiSelect } from '@mantine/core';
import { ActionButton } from '../ActionButton';
import { ChevDownIcon, RemoveIcon } from '@bubbles-ui/icons/outline';
import {
  InputWrapper,
  INPUT_WRAPPER_ORIENTATIONS,
  INPUT_WRAPPER_SIZES,
  INPUT_WRAPPER_SHARED_PROPS,
} from '../InputWrapper';
import { useUuid } from '@mantine/hooks';

export const MULTI_SELECT_SIZES = INPUT_WRAPPER_SIZES;
export const MULTI_SELECT_ORIENTATIONS = INPUT_WRAPPER_ORIENTATIONS;

export const MULTI_SELECT_DEFAULT_PROPS = {
  label: '',
  description: '',
  placeholder: '',
  help: '',
  required: false,
  error: '',
  orientation: 'vertical',
  size: 'sm',
  disabled: false,
  searchable: false,
  creatable: false,
  clearable: '',
};

export const MULTI_SELECT_PROP_TYPES = {
  ...INPUT_WRAPPER_SHARED_PROPS,
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  data: PropTypes.any,
  size: PropTypes.oneOf(MULTI_SELECT_SIZES),
  orientation: PropTypes.oneOf(MULTI_SELECT_ORIENTATIONS),
  searchable: PropTypes.bool,
  clearable: PropTypes.string,
  creatable: PropTypes.bool,
};

const MultiSelect = forwardRef(
  (
    {
      label,
      description,
      required,
      help,
      size: sizeProp,
      orientation: orientationProp,
      dropdownPosition,
      error,
      clearable,
      onChange,
      ...props
    },
    ref
  ) => {
    const uuid = useUuid();
    const size = MULTI_SELECT_SIZES.includes(sizeProp) ? sizeProp : 'sm';
    const orientation = MULTI_SELECT_ORIENTATIONS.includes(orientationProp)
      ? orientationProp
      : 'vertical';
    const isClearable = useMemo(() => isString(clearable) && clearable !== '', [clearable]);

    // ······················································
    // HANDLERS

    const [showClear, setShowClear] = useState(false);

    const handleChange = (ev) => {
      setShowClear(isArray(ev) && ev.length);

      if (isFunction(onChange)) {
        onChange(ev);
      }
    };

    const handleClear = () => {
      handleChange([]);
    };

    // ······················································
    // STYLES

    const { classes, cx } = MultiSelectStyles({ size, orientation }, { name: 'MultiSelect' });

    return (
      <InputWrapper
        uuid={uuid}
        label={label}
        description={description}
        required={required}
        help={help}
        size={size}
        error={error}
        orientation={orientation}
      >
        <MantineMultiSelect
          {...props}
          ref={ref}
          size={size}
          onChange={handleChange}
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
          error={!isEmpty(error)}
          classNames={classes}
        />
      </InputWrapper>
    );
  }
);

MultiSelect.defaultProps = {
  size: 'sm',
  orientation: 'vertical',
};

MultiSelect.propTypes = {
  label: PropTypes.string,
  description: PropTypes.string,
  placeholder: PropTypes.string,
  data: PropTypes.any,
  required: PropTypes.bool,
  size: PropTypes.oneOf(MULTI_SELECT_SIZES),
  orientation: PropTypes.oneOf(MULTI_SELECT_ORIENTATIONS),
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  searchable: PropTypes.bool,
  clearable: PropTypes.string,
  creatable: PropTypes.bool,
};

export { MultiSelect };
