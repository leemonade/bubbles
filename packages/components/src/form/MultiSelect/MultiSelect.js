import React, { forwardRef, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { MultiSelectStyles } from './MultiSelect.styles';
import { isArray, isFunction, isNil, isString } from 'lodash';
import { MultiSelect as MantineMultiSelect } from '@mantine/core';
import { ActionButton } from '../ActionButton';
import { ChevDownIcon, RemoveIcon } from '../../../../icons/outline';
import { InputError } from '../InputError';
import { InputDescription } from '../InputDescription';
import { INPUT_WRAPPER_ORIENTATION, INPUT_WRAPPER_SIZES } from '../InputWrapper';

export const MULTI_SELECT_SIZES = INPUT_WRAPPER_SIZES;
export const MULTI_SELECT_ORIENTATIONS = INPUT_WRAPPER_ORIENTATION;

const MultiSelect = forwardRef(
  (
    {
      description,
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

    const { classes, cx } = MultiSelectStyles({ size, orientation });

    return (
      <MantineMultiSelect
        {...props}
        ref={ref}
        size={size}
        onChange={handleChange}
        rightSection={
          isClearable && showClear ? (
            <ActionButton
              leftIcon={<RemoveIcon />}
              description={clearable}
              size={size}
              onClick={handleClear}
            />
          ) : (
            <ChevDownIcon className={classes.rightSection} />
          )
        }
        error={!isNil(error) && error !== '' ? <InputError message={error} /> : null}
        description={!isNil(description) ? <InputDescription message={description} /> : null}
        classNames={classes}
      />
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
