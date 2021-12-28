import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
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

const noop = (_) => _;

export const TAGIFY_TAG_REGEX = /(?:\[{2}\{).*?(?:\}\]{2})/g;
export const TAGIFY_SIZES = INPUT_WRAPPER_SIZES;
export const TAGIFY_ORIENTATIONS = INPUT_WRAPPER_ORIENTATION;

export const TAGIFY_DEFAULT_PROPS = {
  mixed: true,
  size: 'sm',
  orientation: 'vertical',
  required: true,
  autoFocus: false,
  readOnly: false,
  label: '',
  description: '',
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
          className={classes.root}
          id={uuid}
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
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  loading: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  onChange: PropTypes.func,
  readOnly: PropTypes.bool,
  settings: PropTypes.object,
  InputMode: PropTypes.string,
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  tagifyRef: PropTypes.object,
  whitelist: PropTypes.array,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  showDropdown: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  onInput: PropTypes.func,
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
  onEditInput: PropTypes.func,
  onEditBeforeUpdate: PropTypes.func,
  onEditUpdated: PropTypes.func,
  onEditStart: PropTypes.func,
  onEditKeydown: PropTypes.func,
  onInvalid: PropTypes.func,
  onClick: PropTypes.func,
  onKeydown: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onDropdownShow: PropTypes.func,
  onDropdownHide: PropTypes.func,
  onDropdownSelect: PropTypes.func,
  onDropdownScroll: PropTypes.func,
  onDropdownNoMatch: PropTypes.func,
  onDropdownUpdated: PropTypes.func,
};

export { TagifyInput };
