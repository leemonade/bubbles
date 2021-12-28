import React, { useEffect } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { WysiwygStyles } from './Wysiwyg.styles';
import draftToHtml from 'draftjs-to-html';
import { ContentState, convertFromHTML, convertToRaw, EditorState } from 'draft-js';

export const WYSIWYG_DEFAULT_PROPS = {};
export const WYSIWYG_PROP_TYPES = {};

const Wysiwyg = ({ value, onChange = () => {}, ...props }) => {
  const [state, setState] = React.useState(EditorState.createEmpty());

  const { classes, cx } = WysiwygStyles({});

  useEffect(() => {
    if (draftToHtml(convertToRaw(state.getCurrentContent())) !== value) {
      const blocksFromHTML = convertFromHTML(value);
      setState(
        EditorState.createWithContent(
          ContentState.createFromBlockArray(blocksFromHTML.contentBlocks, blocksFromHTML.entityMap)
        )
      );
    }
  }, [value]);

  return (
    <Editor
      editorState={state}
      onEditorStateChange={(e) => {
        setState(e);
        onChange(draftToHtml(convertToRaw(e.getCurrentContent())));
      }}
      className={classes.root}
      {...props}
    />
  );
};

Wysiwyg.defaultProps = WYSIWYG_DEFAULT_PROPS;

Wysiwyg.propTypes = WYSIWYG_PROP_TYPES;

export { Wysiwyg };
