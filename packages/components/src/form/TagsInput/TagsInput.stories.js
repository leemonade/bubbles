import React, { useState } from 'react';
import { TagsInput } from './TagsInput';
import { TAGS_INPUT_DEFAULT_PROPS } from './TagsInput.constants';
import mdx from './TagsInput.mdx';

export default {
  title: 'BB1/TagsInput',
  parameters: {
    component: TagsInput,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    onChange: { action: 'onChange' },
    onSearch: { action: 'onSearch' },
  },
};

/*
// Let's simulate a large dataset on the server (outside of our component)
const totalCount = 10000;
const serverData = makeData(totalCount);

function getTags({ search, limit }) {
  // Should comes from Server
  const items = serverData.filter((item) => item.indexOf(search) === 0).slice(0, limit);

  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(items);
    }, 500)
  );
}

 */

const Template = ({ suggestions: suggestionsProp, onSearch, ...props }) => {
  const [suggestions, setSuggestions] = useState(suggestionsProp);

  /*
  useEffect(() => setSuggestions(suggestionsProp), [suggestionsProp]);

  // ·······················································
  // DATA LOAD

  const loadTags = async (search, limit = 100) => {
    const tags = await getTags({ search, limit });
    setSuggestions(tags);
  };

  useEffect(() => {
    loadTags('');
  }, []);

  // ·······················································
  // HANDLERS

  const handleOnSearch = async (search) => {
    onSearch(search);
    loadTags(search);
  };

   */

  return <TagsInput {...props} suggestions={suggestions} />;
};

export const Playground = Template.bind({});

Playground.args = {
  ...TAGS_INPUT_DEFAULT_PROPS,
  labels: {
    addButton: 'Add tag',
  },
  label: 'Tags',
  placeholder: 'Name of tag',
  suggestions: [],
  value: ['Fish', 'Dog'],
  error: 'Please enter a tag',
};
