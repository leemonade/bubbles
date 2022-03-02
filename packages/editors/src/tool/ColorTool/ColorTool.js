import { ExpandDiagonalIcon } from '@bubbles-ui/icons/outline';
import React, { useContext } from 'react';
import { TextEditorContext } from '../../form/TextEditorProvider';
import { ColorToolExtension } from './extension';
import { Button } from '../../form/Button/Button';
import { ColorToolStyles } from './ColorTool.styles';
import TextStyle from '@tiptap/extension-text-style';
import { Color } from '@tiptap/extension-color';
import { useEffect } from 'react';

const ColorTool = ({ ...props }) => {
  const { editor } = useContext(TextEditorContext);

  const onClickHandler = () => {};

  const { classes } = ColorToolStyles({});
  return (
    <Button
      {...props}
      icon={<ExpandDiagonalIcon />}
      actived={editor?.isActive('underline')}
      onClick={onClickHandler}
      classNames={classes}
    >
      <div className={classes.preview}></div>
    </Button>
  );
};

ColorTool.extensions = [ColorToolExtension, Color, TextStyle];

export { ColorTool };
