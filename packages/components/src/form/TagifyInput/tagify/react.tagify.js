import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { array, bool, func, object, oneOfType, string, number } from 'prop-types';
import { Box } from '../../../layout';
import { Badge } from '../../../informative';
import { isFunction } from 'lodash';
import Tagify from './tagify';

const noop = (_) => _;

const isSameDeep = (a, b) => {
  const trans = (x) => (typeof x == 'string' ? x : JSON.stringify(x));
  return trans(a) == trans(b);
};

// if a template is a React component, it should be outputed as a String (and not as a React component)
function templatesToString(templates) {
  if (templates) {
    for (let templateName in templates) {
      let Template = templates[templateName];
      let isReactComp = String(Template).includes('jsxRuntime');
      if (isReactComp) {
        templates[templateName] = (...props) => renderToStaticMarkup(<Template props={props} />);
      }
    }
  }
}

const TagifyWrapper = ({
  name,
  value,
  loading = false,
  onInput = noop,
  onAdd,
  onRemove,
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
  className,
  whitelist,
  tagifyRef,
  placeholder = '',
  defaultValue,
  showDropdown,
  ariaLabel,
  withSuggestions,
  amountOfDuplicates,
}) => {
  const mountedRef = useRef();
  const inputElmRef = useRef();
  const tagify = useRef();
  const _value = defaultValue || value;
  const [tagifyLoaded, setTagifyLoaded] = useState(false);
  const [triggerRender, setTriggerRender] = useState({});

  const inputAttrs = useMemo(
    () => ({
      ref: inputElmRef,
      name,
      defaultValue: children || typeof _value == 'string' ? _value : JSON.stringify(_value),
      className,
      readOnly,
      disabled,
      autoFocus,
      placeholder,
    }),
    []
  );

  const setFocus = useCallback(() => {
    autoFocus && tagify.current && tagify.current.DOM.input.focus();
  }, [tagify]);

  const onAddHandler = () => {
    isFunction(onAdd) && onAdd();
    setTriggerRender({ ...triggerRender });
  };

  const onRemoveHandler = () => {
    isFunction(onAdd) && onRemove();
    setTriggerRender({ ...triggerRender });
  };

  const addSuggestion = (suggestion) => {
    if (tagify.current.isTagDuplicate(suggestion.value) >= amountOfDuplicates) return;

    const suggestionValue = suggestion.value;
    tagify.current.addMixTags([suggestion]);
    const nodes = Array.from(tagify.current.DOM.input.childNodes);
    let lastTagSuggestedIndex = 0;
    nodes.forEach((node, index) => {
      if (node && node?.__tagifyTagData?.value === suggestionValue)
        lastTagSuggestedIndex = index + 1;
    });
    tagify.current.DOM.input.focus();
    tagify.current.placeCaretAfterNode(nodes[lastTagSuggestedIndex]);
    onAddHandler();
  };

  const renderSuggestions = () => {
    const suggestions = settings.whitelist;
    const filteredSuggestions = suggestions.filter(
      (suggestion) => tagify.current?.isTagDuplicate(suggestion.value) < amountOfDuplicates
    );
    return filteredSuggestions.map((suggestion, index) => (
      <Badge
        key={`${index} ${suggestion.value}`}
        label={suggestion.value}
        closable={false}
        onClick={() => addSuggestion(suggestion)}
      />
    ));
  };

  useEffect(() => {
    templatesToString(settings.templates);

    if (InputMode == 'textarea') settings.mode = 'mix';

    // "whitelist" prop takes precedence
    if (whitelist && whitelist.length) settings.whitelist = whitelist;

    const t = new Tagify(inputElmRef.current, settings);

    t.on('input', onInput)
      .on('add', onAddHandler)
      .on('remove', onRemoveHandler)
      .on('invalid', onInvalid)
      .on('keydown', onKeydown)
      .on('focus', onFocus)
      .on('blur', onBlur)
      .on('click', onClick)
      .on('change', onChange)

      .on('edit:input', onEditInput)
      .on('edit:beforeUpdate', onEditBeforeUpdate)
      .on('edit:updated', onEditUpdated)
      .on('edit:start', onEditStart)
      .on('edit:keydown', onEditKeydown)

      .on('dropdown:show', onDropdownShow)
      .on('dropdown:hide', onDropdownHide)
      .on('dropdown:select', onDropdownSelect)
      .on('dropdown:scroll', onDropdownScroll)
      .on('dropdown:noMatch', onDropdownNoMatch)
      .on('dropdown:updated', onDropdownUpdated);

    t.DOM.input.ariaLabel = ariaLabel;

    // Bridge Tagify instance with parent component
    if (tagifyRef) {
      tagifyRef.current = t;
    }

    tagify.current = t;

    setFocus();

    // cleanup
    return () => {
      t.destroy();
    };
  }, []);

  useEffect(() => {
    setFocus();
  }, [autoFocus]);

  useEffect(() => {
    if (mountedRef.current) {
      tagify.current.settings.whitelist.length = 0;

      // replace whitelist array items
      whitelist && whitelist.length && tagify.current.settings.whitelist.push(...whitelist);
    }
  }, [whitelist]);

  useEffect(() => {
    const currentValue = tagify.current.getInputValue();

    if (mountedRef.current && !isSameDeep(value, currentValue)) {
      tagify.current.loadOriginalValues(value);
    }
  }, [value]);

  useEffect(() => {
    if (mountedRef.current) {
      tagify.current.toggleClass(className);
    }
  }, [className]);

  useEffect(() => {
    if (mountedRef.current) {
      tagify.current.loading(loading);
    }
  }, [loading]);

  useEffect(() => {
    if (mountedRef.current) {
      tagify.current.setReadonly(readOnly || disabled);
    }
  }, [readOnly, disabled]);

  useEffect(() => {
    const t = tagify.current;

    if (mountedRef.current) {
      if (showDropdown) {
        t.dropdown.show.call(t, showDropdown);
        t.toggleFocusClass(true);
      } else {
        t.dropdown.hide.call(t);
      }
    }
  }, [showDropdown]);

  useEffect(() => {
    mountedRef.current = true;
  }, []);

  useEffect(() => {
    if (tagify.current && !tagifyLoaded) setTagifyLoaded(true);
  }, [tagify.current]);

  return (
    // a wrapper must be used because Tagify will appened inside it it's component,
    // keeping the virtual-DOM out of the way
    <div className="tags-input">
      <InputMode {...inputAttrs} aria-label={ariaLabel} />
      {tagifyLoaded && settings?.whitelist?.length > 1 && withSuggestions && (
        <Box style={{ display: 'flex', gap: 8, marginTop: 8, marginBottom: 4, flexWrap: 'wrap' }}>
          {renderSuggestions()}
        </Box>
      )}
    </div>
  );
};

TagifyWrapper.propTypes = {
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
  withSuggestions: bool,
  amountOfDuplicates: number,
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

const Tags = React.memo(TagifyWrapper);
Tags.displayName = 'Tags';

export const MixedTags = ({ children, ariaLabel, ...rest }) => (
  <Tags InputMode="textarea" {...rest} ariaLabel={ariaLabel}>
    {children}
  </Tags>
);
export default Tags;
