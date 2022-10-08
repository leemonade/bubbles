import React, { useState, useEffect } from 'react';
import { Button } from '@bubbles-ui/components';
import { isEqual } from 'lodash';
import { TextEditor } from '../../form/TextEditor/TextEditor';
import { LibraryTool } from './LibraryTool';
import { VIDEO_ASSET, IMAGE_ASSET } from './mock/data';
import mdx from './LibraryTool.mdx';

export default {
  title: 'Atom/Tool/LibraryTool',
  parameters: {
    component: LibraryTool,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {},
};

const AssetPicker = ({ value = null, onChange = () => {} }) => {
  const [asset, setAsset] = useState(value);

  useEffect(() => {
    if (!isEqual(value, asset)) {
      setAsset(value);
    }
  }, [value]);

  const onClick = () => {
    // setAsset(VIDEO_ASSET);
    onChange(IMAGE_ASSET);
  };

  const onRemove = () => {
    // setAsset(null);
    onChange(null);
  };

  return !asset ? (
    <Button onClick={onClick}>Añadir</Button>
  ) : (
    <Button onClick={onRemove}>Borrar {asset.name}</Button>
  );
};

const Template = ({ content, ...props }) => {
  return (
    <TextEditor content={content} library={<AssetPicker />}>
      <LibraryTool {...props}></LibraryTool>
    </TextEditor>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  content:
    '<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>',
};
