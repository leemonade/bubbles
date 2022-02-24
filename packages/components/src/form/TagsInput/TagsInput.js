import React, { useState, useRef, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { isFunction, trim, uniq, isEmpty } from 'lodash';
import { AddCircleIcon } from '@bubbles-ui/icons/outline/';
import { useId, useMergedRef } from '@mantine/hooks';
import { Box, Stack } from '../../layout';
import { Badge } from '../../informative';
import { Autocomplete, Button } from '../../form';
import { TagsInputStyles } from './TagsInput.styles';
import {
  InputWrapper,
  INPUT_WRAPPER_DEFAULT_PROPS,
  INPUT_WRAPPER_PROP_TYPES,
} from '../InputWrapper';

export const TAGS_INPUT_DEFAULT_PROPS = {
  ...INPUT_WRAPPER_DEFAULT_PROPS,
  value: [],
  suggestions: [],
  labels: {
    addButton: '',
  },
  placeholder: '',
};
export const TAGS_INPUT_PROP_TYPES = {
  ...INPUT_WRAPPER_PROP_TYPES,
  labels: PropTypes.shape({
    addButton: PropTypes.string,
  }),
  placeholder: PropTypes.string,
  value: PropTypes.arrayOf(PropTypes.string),
  suggestions: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
};

const TagsInput = forwardRef(
  (
    {
      label,
      error,
      description,
      help,
      size,
      orientation,
      labels,
      value,
      required,
      suggestions,
      onChange,
      ...props
    },
    ref
  ) => {
    const [tags, setTags] = useState(value);
    const [inputValue, setInputValue] = useState('');
    const autoCompleteRef = useRef(null);
    const mergedRef = useMergedRef(ref, autoCompleteRef);
    const uuid = useId();

    const handleItemSubmit = (value) => {
      setInputValue(value.value);
    };

    const addTag = () => {
      if (!inputValue) {
        return;
      }
      const newTag = trim(inputValue);
      if (!tags.includes(newTag)) {
        const newTags = [...tags, newTag];
        isFunction(onChange) && onChange(newTags);
        setTags(newTags);
      }
      setInputValue('');
      autoCompleteRef.current.deleteValues();
    };

    const removeTag = (tag) => {
      const newTags = tags.filter((t) => t !== tag);

      setTags(newTags);
      isFunction(onChange) && onChange(newTags);
    };

    const handleKeyDown = (e) => {
      if (e.keyCode === 13) {
        addTag();
      }
    };

    const { classes, cx } = TagsInputStyles({ name: 'TagsInput' });

    return (
      <InputWrapper {...{ uuid, size, error, label, description, help, orientation, required }}>
        <Stack fullWidth spacing={2}>
          <Box>
            <Autocomplete
              {...props}
              ref={mergedRef}
              id={uuid}
              value={tags}
              data={uniq([...suggestions, ...tags])}
              onChange={setInputValue}
              onItemSubmit={handleItemSubmit}
              onKeyDown={handleKeyDown}
              error={error}
              ignoreWrapper
            />
          </Box>
          <Box skipFlex>
            <Button variant="light" size="sm" leftIcon={<AddCircleIcon />} onClick={addTag}>
              {labels.addButton}
            </Button>
          </Box>
        </Stack>
        {!isEmpty(tags) && (
          <Stack className={classes.tagsContainer} fullWidth spacing={2} wrap={'wrap'}>
            {tags.map((tag, index) => (
              <Badge
                label={tag}
                key={`${tag}${index}`}
                color={'stroke'}
                radius={'rounded'}
                onClose={() => removeTag(tag)}
                skipFlex
              />
            ))}
          </Stack>
        )}
      </InputWrapper>
    );
  }
);

TagsInput.defaultProps = TAGS_INPUT_DEFAULT_PROPS;
TagsInput.propTypes = TAGS_INPUT_PROP_TYPES;

export { TagsInput };
