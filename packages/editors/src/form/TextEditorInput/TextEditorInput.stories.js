import React, { useState, useEffect } from 'react';
import { Button } from '@bubbles-ui/components';
import { isEqual } from 'lodash';
import { TextEditorInput } from './TextEditorInput';
import { TEXT_EDITOR_INPUT_DEFAULT_PROPS, DEFAULT_TOOLBARS } from './TextEditorInput.constants';
import mdx from './TextEditorInput.mdx';
import { IMAGE_ASSET } from '../../tool/LibraryTool/mock/data';

export default {
  title: 'Organism/Form/TextEditorInput',
  parameters: {
    component: TextEditorInput,
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
  },
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

const Template = ({ ...props }) => {
  const [value, setValue] = useState(
    '<p style="margin-left: 0px!important;"><strong>Hola Mundo</strong></p><library asset="{&quot;id&quot;:&quot;620bbb607129df59430f3329&quot;,&quot;color&quot;:&quot;#DC5571&quot;,&quot;name&quot;:&quot;El ritmo de la guerra&quot;,&quot;fileType&quot;:&quot;image&quot;,&quot;created&quot;:&quot;2022-02-04T16:26:31.485Z&quot;,&quot;description&quot;:&quot;This is a very large description of the book Rythim of War, the fourth book in The Stormlight Archive.&quot;,&quot;tagline&quot;:&quot;&quot;,&quot;metadata&quot;:[{&quot;label&quot;:&quot;Size&quot;,&quot;value&quot;:&quot;128kb&quot;}],&quot;tags&quot;:[&quot;Adventure&quot;],&quot;cover&quot;:&quot;https://images.unsplash.com/photo-1627552245715-77d79bbf6fe2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=640&amp;q=80&quot;}" width="300" display="card" align="left"></library>'
  );

  return (
    <TextEditorInput
      {...props}
      library={<AssetPicker />}
      value={value}
      onChange={(v) => {
        props.onChange(v);
        setValue(v);
      }}
    />
  );
};

export const Playground = Template.bind({});

Playground.args = {
  ...TEXT_EDITOR_INPUT_DEFAULT_PROPS,
  label: 'Label for text editor',
  description: 'Optional descriptive text for this text editor ',
  placeholder: 'Placeholder',
  help: 'Help text for text editor',
  error: 'Descriptive text for error ',
  useJSON: true,
  toolbars: { ...DEFAULT_TOOLBARS, library: true },
};
