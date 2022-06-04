import React, { forwardRef, useRef, useState } from 'react';
import { isEmpty, isFunction, trim, uniq } from 'lodash';
import { AddCircleIcon } from '@bubbles-ui/icons/outline/';
import { useId, useMergedRef } from '@mantine/hooks';
import { Box, Stack } from '../../layout';
import { Badge } from '../../informative';
import { Autocomplete, Button } from '../../form';
import { InputWrapper } from '../InputWrapper';
import { TagsInputStyles } from './TagsInput.styles';
import { TAGS_INPUT_DEFAULT_PROPS, TAGS_INPUT_PROP_TYPES } from './TagsInput.constants';

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
      canAddNewSuggestions = true,
      onChange = () => {},
      ...props
    },
    ref
  ) => {
    const [tags, setTags] = useState(value);
    const [inputValue, setInputValue] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const autoCompleteRef = useRef(null);
    const mergedRef = useMergedRef(ref, autoCompleteRef);
    const uuid = useId();

    React.useEffect(() => {
      setTags(value);
    }, [value]);

    const addTag = (val) => {
      let value = inputValue;
      if (val) {
        value = val;
      }
      if (!value) {
        return;
      }
      const newTag = trim(value);
      if (!tags.includes(newTag) && canAddNewSuggestions) {
        const newTags = [...tags, newTag];
        isFunction(onChange) && onChange(newTags);
        setTags(newTags);
      }
      setInputValue('');
      if (isFunction(props.onSearch)) props.onSearch('');
      autoCompleteRef.current.deleteValues();
    };

    const removeTag = (tag) => {
      const newTags = tags.filter((t) => t !== tag);

      setTags(newTags);
      isFunction(onChange) && onChange(newTags);
    };

    // ················································································
    // HANDLERS

    const handleItemSubmit = (value, e) => {
      setInputValue(value.value);
    };

    const handleKeyDown = (e) => {
      if (e.keyCode === 13) {
        e.stopPropagation();
        setTimeout(() => {
          console.log(e.target.value);
          addTag(e.target.value);
        }, 50);
      }
    };

    // ················································································
    // STYLES

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
              onDropdownOpen={() => setIsDropdownOpen(true)}
              onDropdownClose={() => setIsDropdownOpen(false)}
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
