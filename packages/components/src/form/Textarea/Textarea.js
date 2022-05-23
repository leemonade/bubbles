import React, { useEffect, forwardRef, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { useId } from '@mantine/hooks';
import { Textarea as MantineTextarea } from '@mantine/core';
import { isEmpty, isFunction, isNumber, isNil } from 'lodash';
import { Box } from '../../layout';
import { INPUT_WRAPPER_ORIENTATIONS, INPUT_WRAPPER_SIZES, InputWrapper } from '../InputWrapper';
import { TextareaStyles } from './Textarea.styles';
import { TEXT_INPUT_DEFAULT_PROPS, TEXT_INPUT_PROP_TYPES } from '../TextInput';
import { Paragraph } from '../../typography';
import { InputHelp } from '../InputHelp';

export const TEXTAREA_SIZES = INPUT_WRAPPER_SIZES;
export const TEXTAREA_ORIENTATIONS = INPUT_WRAPPER_ORIENTATIONS;
export const TEXTAREA_COUNTERS = ['char', 'word'];

export const TEXTAREA_DEFAULT_PROPS = {
  ...TEXT_INPUT_DEFAULT_PROPS,
  minRows: 2,
  autosize: true,
  showCounter: false,
  maxLength: false,
  counter: TEXTAREA_COUNTERS[0],
  counterLabels: null,
};

export const TEXTAREA_PROP_TYPES = {
  ...TEXT_INPUT_PROP_TYPES,
  autosize: PropTypes.bool,
  minRows: PropTypes.number,
  showCounter: PropTypes.bool,
  maxLength: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  counter: PropTypes.oneOf(TEXTAREA_COUNTERS),
  counterLabels: PropTypes.object,
};

const Textarea = forwardRef(
  (
    {
      radius, // Just to pick it up to not pass to props
      placeholder,
      error,
      size,
      autosize,
      minRows,
      name,
      onBlur,
      onChange,
      value,
      disabled,
      readOnly,
      showCounter,
      maxLength,
      counter,
      counterLabels,
      autoComplete,
      ...props
    },
    ref
  ) => {
    const [labels, setLabels] = useState(counterLabels);
    const uuid = useId();

    const { classes, cx } = TextareaStyles({ size }, { name: 'Textarea' });

    // ·············································································
    // LABELS

    useEffect(() => {
      if (isNil(counterLabels)) {
        setLabels({ single: counter, plural: `${counter}s` });
      } else {
        setLabels(counterLabels);
      }
    }, [counterLabels, counter]);

    const counterValue = useMemo(() => {
      let count = 0;
      let result = '';

      if (value && !isEmpty(value)) {
        if (counter === 'word') {
          count = value.match(/\S+/g).length;
        } else {
          count = value.length;
        }
      }

      let maxLabel = '';
      if (isNumber(maxLength) && maxLength > 0) {
        maxLabel = `/${maxLength}`;
      }

      if (count === 1) {
        result = `${count}${maxLabel} ${labels?.single || ''}`;
      } else {
        result = `${count}${maxLabel} ${labels?.plural || ''}`;
      }

      return result;
    }, [counter, value, labels, maxLength]);

    // ·············································································
    // HANDLERS

    const handleOnChange = (e) => {
      let canChange = true;

      if (e.nativeEvent.inputType === 'insertText') {
        let wordCount = 0;
        if (!isEmpty(value) && counter === 'word' && isNumber(maxLength)) {
          wordCount = value.match(/\S+/g).length;
          canChange = wordCount < maxLength;
        }
      }

      if (canChange && isFunction(onChange)) onChange(e.currentTarget.value);
    };

    return (
      <InputWrapper
        {...props}
        uuid={uuid}
        size={size}
        error={error}
        style={{ paddingBottom: showCounter && isEmpty(props.help) && isEmpty(error) && 20 }}
      >
        {readOnly ? (
          <Paragraph clean>{value || ''}</Paragraph>
        ) : (
          <Box className={classes.wrapper}>
            <MantineTextarea
              id={uuid}
              ref={ref}
              size={size}
              autosize={autosize}
              minRows={minRows}
              placeholder={placeholder}
              name={name}
              disabled={disabled}
              onBlur={onBlur}
              onChange={handleOnChange}
              value={value || ''}
              autoComplete={autoComplete}
              classNames={classes}
              maxLength={isNumber(maxLength) && counter === 'char' ? maxLength : null}
              error={!isEmpty(error)}
            />
            {showCounter && (
              <Box className={classes.counter}>
                <InputHelp message={counterValue} />
              </Box>
            )}
          </Box>
        )}
      </InputWrapper>
    );
  }
);

Textarea.defaultProps = TEXTAREA_DEFAULT_PROPS;
Textarea.propTypes = TEXTAREA_PROP_TYPES;

export { Textarea };
