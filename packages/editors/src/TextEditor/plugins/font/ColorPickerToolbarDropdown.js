import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  getMark,
  getPluginType,
  isMarkActive,
  removeMark,
  setMarks,
  usePlateEditorRef,
  usePlateEditorState,
  withEditor,
} from '@udecode/plate-core';
import { ToolbarButton, ToolbarButtonProps, ToolbarDropdown } from '@udecode/plate-ui-toolbar';
import { ColorPicker, Popover, Box } from '@bubbles-ui/components';
import { Transforms } from 'slate';
import { ReactEditor } from 'slate-react';
import { MARK_COLOR } from './createFontColorPlugin';

const ColorPickerToolbarDropdown = withEditor(
  ({
    pluginKey,
    icon,
    selectedIcon,
    colors,
    customColors,
    closeOnSelect,
    classNames,
    buttonClassnames,
    ...props
  }) => {
    const [open, setOpen] = useState(false);
    const editor = usePlateEditorState();
    const editorRef = usePlateEditorRef();

    const type = getPluginType(editorRef, pluginKey);

    const color = editorRef && getMark(editorRef, type);

    const [selectedColor, setSelectedColor] = useState();

    const onToggle = useCallback(() => {
      setOpen(!open);
    }, [open, setOpen]);

    const updateColor = useCallback(
      (value) => {
        if (editorRef && editor && editor.selection) {
          setSelectedColor(value);

          Transforms.select(editorRef, editor.selection);
          ReactEditor.focus(editorRef);

          setMarks(editor, { [type]: value });
        }
      },
      [editor, editorRef, type]
    );

    const updateColorAndClose = useCallback(
      (value) => {
        updateColor(value);
        closeOnSelect && onToggle();
      },
      [closeOnSelect, onToggle, updateColor]
    );

    const clearColor = useCallback(() => {
      if (editorRef && editor && editor.selection) {
        Transforms.select(editorRef, editor.selection);
        ReactEditor.focus(editorRef);

        if (selectedColor) {
          removeMark(editor, { key: type });
        }

        closeOnSelect && onToggle();
      }
    }, [closeOnSelect, editor, editorRef, onToggle, selectedColor, type]);

    useEffect(() => {
      if (editor?.selection) {
        setSelectedColor(color);
      }
    }, [color, editor?.selection]);

    return (
      <Popover
        // control
        target={
          <Box onClick={onToggle}>
            <ToolbarButton
              active={!!editor?.selection && isMarkActive(editor, type)}
              icon={icon}
              classNames={buttonClassnames}
              {...props}
            />
          </Box>
        }
        opened={open}
        // open={open}
        // onOpen={onToggle}
        onClose={onToggle}
        // className={classNames.root}
        width={260}
        position="bottom-start"
      >
        <Box style={{ display: 'flex' }}>
          <ColorPicker
            color={selectedColor || color}
            compact
            onChange={setSelectedColor}
            {...props}
          />
        </Box>
        {/*
        <ColorPicker
          color={selectedColor || color}
          colors={colors}
          customColors={customColors}
          selectedIcon={selectedIcon}
          updateColor={updateColorAndClose}
          updateCustomColor={updateColor}
          clearColor={clearColor}
        />
        */}
      </Popover>
    );
  }
);

ColorPickerToolbarDropdown.defaultProps = {
  pluginKey: MARK_COLOR,
  closeOnSelect: false,
};

ColorPickerToolbarDropdown.propTypes = {
  pluginKey: PropTypes.string,
  icon: PropTypes.element,
  customColors: PropTypes.array,
  closeOnSelect: PropTypes.bool,
};

export { ColorPickerToolbarDropdown };
