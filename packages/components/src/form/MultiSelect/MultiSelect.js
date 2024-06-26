import React, { forwardRef, useEffect, useMemo, useRef } from 'react';
import Proptypes from 'prop-types';
import { find, isArray, isEmpty, isFunction, isString } from 'lodash';
import { MultiSelect as MantineMultiSelect } from '@mantine/core';
import { ChevDownIcon, RemoveIcon } from '@bubbles-ui/icons/outline';
import { useId } from '@mantine/hooks';
import { ActionButton } from '../ActionButton';
import { InputWrapper } from '../InputWrapper';
import { Badge } from '../../informative/Badge';
import { Box } from '../../layout/Box';
import { Dropdown, Item } from '../../overlay/Dropdown';
import { MultiSelectStyles } from './MultiSelect.styles';
import {
  MULTI_SELECT_DEFAULT_PROPS,
  MULTI_SELECT_ORIENTATIONS,
  MULTI_SELECT_PROP_TYPES,
  MULTI_SELECT_SIZES,
} from './MultiSelect.constants';

const GetValueComponent = forwardRef(
  ({ others: { Component, classNames, onRemove, ...others } }, ref) => (
    <Box ref={ref} {...others}>
      <Component {...others} onRemove={onRemove} />
    </Box>
  ),
);

GetValueComponent.displayName = 'GetValueComponent';
GetValueComponent.propTypes = {
  others: Proptypes.any,
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
      placeholder,
      value,
      icon,
      readOnly,
      error,
      clearable,
      searchable,
      multiple,
      maxSelectedValues,
      dropdownComponent,
      itemComponent,
      valueComponent: ValueComponent,
      onChange,
      useAria,
      disabled,
      autoSelectOneOption,
      ariaLabel,
      style,
      ...props
    },
    ref,
  ) => {
    const hasIcon = !!icon;
    const [show, setShow] = React.useState(true);
    const uuid = useId();
    const size = MULTI_SELECT_SIZES.includes(sizeProp) ? sizeProp : 'md';
    const orientation = MULTI_SELECT_ORIENTATIONS.includes(orientationProp)
      ? orientationProp
      : 'vertical';
    const isClearable = useMemo(() => isString(clearable) && clearable !== '', [clearable]);
    const multiSelectRef = useRef();
    const autoSelectOneOptionMode = autoSelectOneOption && props.data.length === 1;
    if (!multiple) maxSelectedValues = 2;

    const isDisabled = disabled || autoSelectOneOptionMode;

    // ······················································
    // HANDLERS
    const showClear = multiple ? isArray(value) && !!value.length : !!value;

    const handleChange = (ev) => {
      if (!multiple && isFunction(onChange)) {
        const selectedValue = ev?.pop();
        onChange(selectedValue ? [selectedValue] : undefined);
        multiSelectRef.current.blur();
        // multiSelectRef.current.focus();
        return;
      }
      if (isFunction(onChange)) {
        onChange(ev);
      }
    };

    const handleClear = () => {
      handleChange(undefined);
    };

    // TODO: MEGATODO Por culpa de maxSelectedValues hemos tenido que repintar el MultiSelect de mantine.
    React.useEffect(() => {
      if (!value?.length) {
        setShow(false);
        setTimeout(() => {
          setShow(true);
        }, 1);
      }
    }, [JSON.stringify(value)]);

    // ······················································
    // useEffects

    useEffect(() => {
      if (!autoSelectOneOptionMode) return;
      if (props.data[0].value && props.data[0].value !== value?.[0])
        handleChange([props.data[0].value]);
    }, [autoSelectOneOption, props.data]);

    // ······················································
    // STYLES

    const { classes } = MultiSelectStyles(
      { size, multiple, rightEvents: isClearable && showClear, hasIcon },
      { name: 'MultiSelect' },
    );

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
        style={style}
      >
        {readOnly ? (
          <>
            {value
              ? value.map((v) => {
                  const data = find(props.data, { value: v });
                  if (data) {
                    if (ValueComponent) {
                      return <ValueComponent key={v} {...data} />;
                    }
                    return <Badge key={v} label={data?.label} closable={false} />;
                  }
                  //
                  return null;
                })
              : null}
          </>
        ) : (
          <>
            {show && (
              <MantineMultiSelect
                ref={multiSelectRef}
                // size={size}
                value={value}
                autoComplete="off"
                onChange={handleChange}
                disabled={isDisabled}
                maxSelectedValues={maxSelectedValues}
                placeholder={placeholder}
                searchable={searchable}
                dropdownPosition={dropdownPosition}
                icon={icon}
                dropdownComponent={Dropdown}
                itemComponent={itemComponent || Item}
                valueComponent={
                  ValueComponent
                    ? (componentInfo) => (
                        <GetValueComponent
                          others={{ ...componentInfo, Component: ValueComponent }}
                        />
                      )
                    : undefined
                }
                rightSection={
                  isClearable && showClear && !isDisabled ? (
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
                clearButtonLabel={clearable}
                zIndex={299}
                error={!isEmpty(error)}
                classNames={classes}
                role={useAria ? 'textbox' : undefined}
                aria-label={label || ariaLabel}
                {...props}
              />
            )}
          </>
        )}
      </InputWrapper>
    );
  },
);

MultiSelect.displayName = 'MultiSelect';
MultiSelect.defaultProps = MULTI_SELECT_DEFAULT_PROPS;
MultiSelect.propTypes = MULTI_SELECT_PROP_TYPES;

export { MultiSelect };
