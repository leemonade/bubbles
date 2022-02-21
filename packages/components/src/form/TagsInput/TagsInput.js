import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { isFunction, trim, uniq } from 'lodash';
import { AddCircleIcon } from '@bubbles-ui/icons/outline/';
import { Box, Stack } from '../../layout/';
import { INPUT_WRAPPER_PROP_TYPES, InputError, Autocomplete, Button } from '../';
import { Badge } from '../../informative';
import { TagsInputStyles } from './TagsInput.styles';

export const TAGS_INPUT_DEFAULT_PROPS = {
  value: [],
  suggestions: [],
  labels: {
    autocomplete: '',
    addBadge: '',
  },
  placeholder: '',
};
export const TAGS_INPUT_PROP_TYPES = {
  labels: PropTypes.shape({
    addBadge: PropTypes.string,
    autocomplete: PropTypes.string,
  }),
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
  value: PropTypes.arrayOf(PropTypes.string),
  suggestions: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
  ...INPUT_WRAPPER_PROP_TYPES,
};

const TagsInput = ({
  labels,
  placeholder,
  errorMessage,
  value,
  suggestions,
  onChange,
  ...props
}) => {
  const [tags, setTags] = useState(value);
  const [inputValue, setInputValue] = useState('');
  const autoCompleteRef = useRef(null);
  const [error, setError] = useState(false);

  const handleItemSubmit = (value) => {
    setInputValue(value.value);
  };

  const addTag = () => {
    if (!inputValue) {
      setError(true);
      return;
    }
    setError(false);
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

  const { classes, cx } = TagsInputStyles({}, { name: 'TagsInput' });
  return (
    <Box className={classes.root}>
      <Stack className={classes.autocompleteWrapper} wrap={'wrap'} fullWidth spacing={2}>
        <Box>
          <Autocomplete
            {...props}
            label={labels.autocomplete}
            placeholder={placeholder}
            value={tags}
            data={uniq([...suggestions, ...tags])}
            onChange={setInputValue}
            onItemSubmit={handleItemSubmit}
            ref={autoCompleteRef}
            onKeyDown={handleKeyDown}
          />
        </Box>
        <Box skipFlex>
          <Button variant="light" size="sm" leftIcon={<AddCircleIcon />} onClick={addTag}>
            {labels.addBadge}
          </Button>
        </Box>
        {error && (
          <Box className={classes.errorWrapper} skipFlex>
            <InputError message={errorMessage} />
          </Box>
        )}
      </Stack>
      <Stack className={classes.tagsContainer} fullWidth spacing={2} wrap={'wrap'}>
        {tags.map((tag, index) => (
          <Badge
            label={tag}
            key={`${tag}${index}`}
            color={'stroke'}
            radius={'default'}
            onClose={() => removeTag(tag)}
            skipFlex
          />
        ))}
      </Stack>
    </Box>
  );
};

TagsInput.defaultProps = TAGS_INPUT_DEFAULT_PROPS;
TagsInput.propTypes = TAGS_INPUT_PROP_TYPES;

export { TagsInput };
