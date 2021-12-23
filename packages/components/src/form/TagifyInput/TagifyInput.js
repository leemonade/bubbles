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
import './tagify/tagify.css'; // Tagify CSS

export const TAGIFY_SIZES = INPUT_WRAPPER_SIZES;
export const TAGIFY_ORIENTATIONS = INPUT_WRAPPER_ORIENTATION;

export const TAGIFY_DEFAULT_PROPS = {
  mixed: true,
  size: 'sm',
  orientation: 'vertical',
  label: 'Tag input',
  description: 'Write your tags',
  required: true,
  autoFocus: false,
  readOnly: false,
  error: '',
  help: 'Some help',
  settings: {},
};

const TagifyInput = forwardRef(
  ({ mixed, error, size, value, onChange, settings, autoFocus, readOnly, ...props }, ref) => {
    const uuid = useId();
    const { classes, cx } = TagifyInputStyles({ size, error });

    return (
      <InputWrapper {...props} uuid={uuid} size={size} error={error}>
        <MixedTags
          id={uuid}
          className={classes.root}
          tagifyRef={ref}
          settings={settings}
          autoFocus={autoFocus}
          readOnly={readOnly}
          value={value}
          onChange={onChange}
        />
      </InputWrapper>
    );

    if (mixed) return <MixedTags className={classes.root} tagifyRef={ref} {...props} />;
    return <MixedTags className={classes.root} tagifyRef={ref} {...props} />;
  }
);

TagifyInput.defaultProps = TAGIFY_DEFAULT_PROPS;

TagifyInput.propTypes = { ...INPUT_WRAPPER_PROP_TYPES };

export { TagifyInput };
