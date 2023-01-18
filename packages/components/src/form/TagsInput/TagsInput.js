import React, { forwardRef, useMemo, useRef, useState } from 'react';
import { isEmpty, isFunction, isString, trim, uniq } from 'lodash';
import { AddCircleIcon } from '@bubbles-ui/icons/outline/';
import { useId, useMergedRef } from '@mantine/hooks';
import { Box, Stack } from '../../layout';
import { Badge } from '../../informative';
import { Autocomplete, Button } from '../../form';
import { InputWrapper } from '../InputWrapper';
import { TagsInputStyles } from './TagsInput.styles';
import { TAGS_INPUT_DEFAULT_PROPS, TAGS_INPUT_PROP_TYPES } from './TagsInput.constants';

const OptionRenderer = forwardRef(({ label, value, ...props }, ref) => {
  return <Box sx={theme => ({ display: 'flex', alignItems: 'center', gap: theme.other.global.spacing.gap.sm })} ref={ref} {...props}>
    {value}
  </Box>
});

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
      onChange = () => { },
      onSearch,
      ...props
    },
    ref
  ) => {
    const [tags, setTags] = useState(value);
    const [inputValue, setInputValue] = useState('');
    const [selectedSuggestion, setSelectedSuggestion] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const autoCompleteRef = useRef(null);
    const mergedRef = useMergedRef(ref, autoCompleteRef);
    const uuid = useId();

    const parsedSuggestions = useMemo(() => {
      const suggestionsByValue = {}
      suggestions.forEach(suggestion => {
        if (isString(suggestion)) {
          suggestionsByValue[suggestion] = {
            value: suggestion,
            id: suggestion,
            original: suggestion,
          }
        } else {

          suggestionsByValue[suggestion.value] = {
            value: suggestion.label,
            id: suggestion.value,
            original: suggestion
          }
        }
      })

      return suggestionsByValue
    }, [suggestions])

    const tagsNotInSuggestions = useMemo(() => {
      return tags.filter(tag => {
        if (isString(tag)) {
          return !parsedSuggestions[tag]
        }

        return !parsedSuggestions[tag.id]
      })
    }, [parsedSuggestions, tags])

    React.useEffect(() => {
      setTags(value);
    }, [value]);

    const addTag = (_value) => {
      const value = _value || inputValue;

      if (!value) {
        return;
      }

      const valueIsSuggestion = selectedSuggestion && value === parsedSuggestions[selectedSuggestion].value;
      const newTag = valueIsSuggestion ? parsedSuggestions[selectedSuggestion].id : trim(value);

      if (!tags.includes(newTag)) {
        if (!valueIsSuggestion && !canAddNewSuggestions) {
          return;
        }

        const newTags = [...tags, newTag];
        isFunction(onChange) && onChange(newTags);
        setTags(newTags);
      }
      setInputValue('');
      if (isFunction(onSearch)) onSearch('');
      autoCompleteRef.current.deleteValues();
    };

    const removeTag = (tag) => {
      const newTags = tags.filter((t) => t !== tag);
      setTags(newTags);
      isFunction(onChange) && onChange(newTags);
    };

    // ················································································
    // HANDLERS

    const handleItemSubmit = (value) => {
      setSelectedSuggestion(value.id);
    };

    const handleKeyDown = (e) => {
      if (e.keyCode === 13) {
        e.stopPropagation();
        setTimeout(() => {
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
              value={inputValue}
              data={uniq([...Object.values(parsedSuggestions), ...tagsNotInSuggestions])}
              onChange={setInputValue}
              onItemSubmit={handleItemSubmit}
              onKeyDown={handleKeyDown}
              error={error}
              ignoreWrapper
              onDropdownOpen={() => setIsDropdownOpen(true)}
              onDropdownClose={() => setIsDropdownOpen(false)}
              itemComponent={OptionRenderer}
            />
          </Box>
          <Box skipFlex>
            <Button variant="light" size="sm" leftIcon={<AddCircleIcon />} onClick={() => addTag()}>
              {labels.addButton}
            </Button>
          </Box>
        </Stack>
        {!isEmpty(tags) && (
          <Stack className={classes.tagsContainer} fullWidth spacing={2} wrap={'wrap'}>
            {tags.map((tag, index) => (
              <Badge
                label={parsedSuggestions[tag]?.value ?? tag}
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
