import React, { forwardRef } from 'react';
import { useId } from '@mantine/hooks';
import {
  INPUT_WRAPPER_ORIENTATION,
  INPUT_WRAPPER_PROP_TYPES,
  INPUT_WRAPPER_SIZES,
  InputWrapper,
} from '../InputWrapper';
import { TagifyInputStyles } from './TagifyInput.styles';
import { MixedTags } from './tagify/react.tagify'; // React-wrapper file
import './tagify/tagify.css';
import { array, bool, func, object, oneOfType, string } from 'prop-types'; // Tagify CSS

const noop = (_) => _;

export const TAGIFY_SIZES = INPUT_WRAPPER_SIZES;
export const TAGIFY_ORIENTATIONS = INPUT_WRAPPER_ORIENTATION;

export const TAGIFY_DEFAULT_PROPS = {
  mixed: true,
  size: 'sm',
  orientation: 'vertical',
  label: '',
  description: '',
  required: true,
  autoFocus: false,
  readOnly: false,
  error: '',
  help: '',
  settings: {},
};

const TagifyInput = forwardRef(
  (
    {
      name,
      value,
      loading = false,
      onInput = noop,
      onAdd = noop,
      onRemove = noop,
      onEditInput = noop,
      onEditBeforeUpdate = noop,
      onEditUpdated = noop,
      onEditStart = noop,
      onEditKeydown = noop,
      onInvalid = noop,
      onClick = noop,
      onKeydown = noop,
      onFocus = noop,
      onBlur = noop,
      onChange = noop,
      onDropdownShow = noop,
      onDropdownHide = noop,
      onDropdownSelect = noop,
      onDropdownScroll = noop,
      onDropdownNoMatch = noop,
      onDropdownUpdated = noop,
      readOnly,
      disabled,
      children,
      settings = {},
      InputMode = 'input',
      autoFocus,
      whitelist,
      tagifyRef,
      placeholder = '',
      defaultValue,
      showDropdown,
      mixed,
      error,
      size,
      ...props
    },
    ref
  ) => {
    const uuid = useId();
    const { classes, cx } = TagifyInputStyles({ size, error });

    return (
      <InputWrapper {...props} uuid={uuid} size={size} error={error}>
        <MixedTags
          name={name}
          value={value}
          loading={loading}
          onInput={onInput}
          onAdd={onAdd}
          onRemove={onRemove}
          onEditInput={onEditInput}
          onEditBeforeUpdate={onEditBeforeUpdate}
          onEditUpdated={onEditUpdated}
          onEditStart={onEditStart}
          onEditKeydown={onEditKeydown}
          onInvalid={onInvalid}
          onClick={onClick}
          onKeydown={onKeydown}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
          onDropdownShow={onDropdownShow}
          onDropdownHide={onDropdownHide}
          onDropdownSelect={onDropdownSelect}
          onDropdownScroll={onDropdownScroll}
          onDropdownNoMatch={onDropdownNoMatch}
          onDropdownUpdated={onDropdownUpdated}
          readOnly={readOnly}
          disabled={disabled}
          children={children}
          settings={settings}
          InputMode={InputMode}
          autoFocus={autoFocus}
          className={classes.root}
          whitelist={whitelist}
          tagifyRef={ref}
          placeholder={placeholder}
          defaultValue={defaultValue}
          showDropdown={showDropdown}
        />
      </InputWrapper>
    );
  }
);

TagifyInput.defaultProps = TAGIFY_DEFAULT_PROPS;

TagifyInput.propTypes = {
  ...INPUT_WRAPPER_PROP_TYPES,
  name: string,
  value: oneOfType([string, array]),
  loading: bool,
  children: oneOfType([string, array]),
  onChange: func,
  readOnly: bool,
  settings: object,
  InputMode: string,
  autoFocus: bool,
  className: string,
  tagifyRef: object,
  whitelist: array,
  placeholder: string,
  defaultValue: oneOfType([string, array]),
  showDropdown: oneOfType([string, bool]),
  onInput: func,
  onAdd: func,
  onRemove: func,
  onEditInput: func,
  onEditBeforeUpdate: func,
  onEditUpdated: func,
  onEditStart: func,
  onEditKeydown: func,
  onInvalid: func,
  onClick: func,
  onKeydown: func,
  onFocus: func,
  onBlur: func,
  onDropdownShow: func,
  onDropdownHide: func,
  onDropdownSelect: func,
  onDropdownScroll: func,
  onDropdownNoMatch: func,
  onDropdownUpdated: func,
};

export { TagifyInput };
