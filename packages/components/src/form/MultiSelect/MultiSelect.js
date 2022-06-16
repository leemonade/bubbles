import React, { forwardRef, useMemo, useRef } from 'react';
import { MultiSelectStyles } from './MultiSelect.styles';
import { find, isArray, isEmpty, isFunction, isString } from 'lodash';
import { MultiSelect as MantineMultiSelect } from '@mantine/core';
import { ActionButton } from '../ActionButton';
import { ChevDownIcon, RemoveIcon } from '@bubbles-ui/icons/outline';
import { InputWrapper } from '../InputWrapper';
import { useUuid } from '@mantine/hooks';
import { Badge } from '../../informative';
import {
  MULTI_SELECT_PROP_TYPES,
  MULTI_SELECT_DEFAULT_PROPS,
  MULTI_SELECT_SIZES,
  MULTI_SELECT_ORIENTATIONS,
} from './MultiSelect.constants';
import { Box } from '../../layout';

const GetValueComponent = forwardRef(
  ({ others: { Component, classNames, onRemove, ...others } }, ref) => {
    return (
      <Box ref={ref} {...others}>
        <Component {...others} />
      </Box>
    );
  }
);

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
      readOnly,
      error,
      clearable,
      multiple,
      maxSelectedValues,
      valueComponent,
      onChange,
      ...props
    },
    ref
  ) => {
    const [show, setShow] = React.useState(true);
    const uuid = useUuid();
    const size = MULTI_SELECT_SIZES.includes(sizeProp) ? sizeProp : 'sm';
    const orientation = MULTI_SELECT_ORIENTATIONS.includes(orientationProp)
      ? orientationProp
      : 'vertical';
    const isClearable = useMemo(() => isString(clearable) && clearable !== '', [clearable]);
    const multiSelectRef = useRef();
    if (!multiple) maxSelectedValues = 3;

    // ······················································
    // HANDLERS
    const showClear = isArray(props.value) && props.value.length;

    const handleChange = (ev) => {
      if (!multiple && isFunction(onChange)) {
        const selectedValue = ev.pop();
        onChange(selectedValue ? [selectedValue] : []);
        multiSelectRef.current.blur();
        multiSelectRef.current.focus();
        return;
      }
      if (isFunction(onChange)) {
        onChange(ev);
      }
    };

    const handleClear = () => {
      handleChange([]);
    };

    // TODO: MEGATODO Por culpa de maxSelectedValues hemos tenido que repintar el MultiSelect de mantine.
    React.useEffect(() => {
      if (!props.value || !props.value.length) {
        setShow(false);
        setTimeout(() => {
          setShow(true);
        }, 1);
      }
    }, [JSON.stringify(props.value)]);

    // ······················································
    // STYLES

    const { classes, cx } = MultiSelectStyles(
      { size, rightEvents: isClearable && showClear, multiple },
      { name: 'MultiSelect' }
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
      >
        {readOnly ? (
          <>
            {props.value
              ? props.value.map((v) => {
                  const data = find(props.data, { value: v });
                  if (data) {
                    if (props.valueComponent) {
                      return <props.valueComponent {...data} />;
                    } else {
                      return <Badge label={data?.label} closable={false} />;
                    }
                  }
                  //
                  return null;
                })
              : null}
          </>
        ) : (
          <>
            {show ? (
              <MantineMultiSelect
                {...props}
                ref={multiSelectRef}
                size={size}
                autoComplete="off"
                onChange={handleChange}
                maxSelectedValues={maxSelectedValues}
                valueComponent={
                  valueComponent
                    ? (componentInfo) => (
                        <GetValueComponent
                          others={{ ...componentInfo, Component: valueComponent }}
                        />
                      )
                    : undefined
                }
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
            ) : null}
          </>
        )}
      </InputWrapper>
    );
  }
);

MultiSelect.defaultProps = MULTI_SELECT_DEFAULT_PROPS;
MultiSelect.propTypes = MULTI_SELECT_PROP_TYPES;

export { MultiSelect };
