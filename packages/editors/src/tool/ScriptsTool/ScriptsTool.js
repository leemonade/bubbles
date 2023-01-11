import PropTypes from 'prop-types';
import { Button, ButtonGroup } from '../../form';
import { EditorSubscriptIcon, EditorSuperscriptIcon } from '@bubbles-ui/icons/solid';
import { Subscript } from '@tiptap/extension-subscript';
import { Superscript } from '@tiptap/extension-superscript';
import React, { useContext } from 'react';
import { TextEditorContext } from '../../form/TextEditorProvider';

export const SCRIPTS_TOOL_DEFAULT_PROPS = {
  superscript: true,
  subscript: true,
  labels: {
    superscript: 'Superscript',
    subscript: 'Subscript',
  },
};

export const SCRIPTS_TOOL_PROP_TYPES = {
  superscript: PropTypes.bool,
  subscript: PropTypes.bool,
  underline: PropTypes.bool,
  strike: PropTypes.bool,
  labels: PropTypes.shape({
    superscript: PropTypes.string,
    subscript: PropTypes.string,
  }),
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

const ScriptsTool = ({ superscript, subscript, labels, children }) => {
  const { editor } = useContext(TextEditorContext);

  const onClickHandler = (action) => {
    if (action === 'superscript') {
      if (editor.isActive('subscript')) {
        editor.chain().focus().unsetSubscript().run();
      }
      if (editor.isActive('superscript')) {
        editor.chain().focus().unsetSuperscript().run();
      } else {
        editor.chain().focus().setSuperscript().run();
      }
    } else {
      if (editor.isActive('superscript')) {
        editor.chain().focus().unsetSuperscript().run();
      }
      if (editor.isActive('subscript')) {
        editor.chain().focus().unsetSubscript().run();
      } else {
        editor.chain().focus().setSubscript().run();
      }
    }
  };

  return (
    <ButtonGroup>
      {superscript && (
        <Button
          label={labels.superscript}
          icon={<EditorSuperscriptIcon height={16} width={16} />}
          actived={editor?.isActive('superscript')}
          disabled={editor?.isActive('codeBlock')}
          onClick={() => onClickHandler('superscript')}
        ></Button>
      )}
      {subscript && (
        <Button
          label={labels.subscript}
          icon={<EditorSubscriptIcon height={16} width={16} />}
          actived={editor?.isActive('subscript')}
          disabled={editor?.isActive('codeBlock')}
          onClick={() => onClickHandler('subscript')}
        ></Button>
      )}
      {children}
    </ButtonGroup>
  );
};

ScriptsTool.defaultProps = SCRIPTS_TOOL_DEFAULT_PROPS;
ScriptsTool.propTypes = SCRIPTS_TOOL_PROP_TYPES;
ScriptsTool.extensions = [Superscript, Subscript];

export { ScriptsTool };
