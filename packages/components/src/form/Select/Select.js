import React, { forwardRef, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { ChevDownIcon, RemoveIcon } from '@bubbles-ui/icons/outline';
import { Select as MantineSelect } from '@mantine/core';
import { isFunction, isNil, isString } from 'lodash';
import { INPUT_WRAPPER_ORIENTATION, INPUT_WRAPPER_SIZES } from '../InputWrapper';
import { InputError } from '../InputError';
import { InputDescription } from '../InputDescription';
import { ActionButton } from '../ActionButton';
import { SelectStyles } from './Select.styles';

export const SELECT_SIZES = INPUT_WRAPPER_SIZES;
export const SELECT_ORIENTATIONS = INPUT_WRAPPER_ORIENTATION;

const Select = forwardRef(
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
    const size = SELECT_SIZES.includes(sizeProp) ? sizeProp : 'sm';
    const orientation = SELECT_ORIENTATIONS.includes(orientationProp)
      ? orientationProp
      : 'vertical';
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
    // STYLES

    const { classes, cx } = SelectStyles({ size, orientation });

    return (
      <MantineSelect
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

Select.defaultProps = {
  size: 'sm',
  orientation: 'vertical',
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
};

export { Select };
