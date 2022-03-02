import { TextEditorContext } from './context';
import PropTypes from 'prop-types';
import { Editor } from '@tiptap/react';

export const TEXT_EDITOR_PROVIDER_PROP_TYPES = {
  edit: PropTypes.instanceOf(Editor),
};

const TextEditorProvider = ({ editor, children }) => {
  return <TextEditorContext.Provider value={{ editor }}>{children}</TextEditorContext.Provider>;
};

TextEditorProvider.propTypes = TEXT_EDITOR_PROVIDER_PROP_TYPES;

export { TextEditorProvider };
