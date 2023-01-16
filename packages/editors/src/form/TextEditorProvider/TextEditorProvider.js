import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Editor } from '@tiptap/react';
import { isEmpty } from 'lodash';
import { TextEditorContext } from './context';

export const TEXT_EDITOR_PROVIDER_DEFAULT_PROPS = {
  readOnly: false,
};

export const TEXT_EDITOR_PROVIDER_PROP_TYPES = {
  editor: PropTypes.instanceOf(Editor),
  readOnly: PropTypes.bool,
};

const TextEditorProvider = ({ editor, children, readOnly }) => {
  const [toolModalOpen, setToolModalOpen] = useState(false);
  const [currentTool, setCurrentTool] = useState({
    type: null,
    data: {},
    editing: false,
    toolBubbleMenu: null,
    bubbleMenuOptions: {},
  });

  const value = {
    editor,
    readOnly,
    currentTool,
    toolModalOpen,
    editToolData: (type, data, editing = true) => {
      setCurrentTool({
        type,
        data,
        editing,
        toolBubbleMenu: currentTool.toolBubbleMenu,
        bubbleMenuOptions: currentTool.bubbleMenuOptions,
      });
      setToolModalOpen(true);
    },
    openBubbleMenu: (type, data, editing = true, toolBubbleMenu = null, bubbleMenuOptions = {}) => {
      setCurrentTool({ type, data, editing, toolBubbleMenu, bubbleMenuOptions });
    },
    closeToolModal: () => {
      setCurrentTool((prevCurrentTool) => ({
        type: null,
        data: {},
        editing: false,
        toolBubbleMenu: prevCurrentTool.toolBubbleMenu,
        bubbleMenuOptions: prevCurrentTool.bubbleMenuOptions,
      }));
      setToolModalOpen(false);
    },
  };

  return <TextEditorContext.Provider value={value}>{children}</TextEditorContext.Provider>;
};

TextEditorProvider.defaultProps = TEXT_EDITOR_PROVIDER_DEFAULT_PROPS;
TextEditorProvider.propTypes = TEXT_EDITOR_PROVIDER_PROP_TYPES;

export { TextEditorProvider };
