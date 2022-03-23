import { TextEditorContext } from './context';
import PropTypes from 'prop-types';
import { Editor } from '@tiptap/react';

export const TEXT_EDITOR_PROVIDER_DEFAULT_PROPS = {
  library: <div></div>,
};

export const TEXT_EDITOR_PROVIDER_PROP_TYPES = {
  edit: PropTypes.instanceOf(Editor),
  library: PropTypes.element,
  libraryOnChange: PropTypes.func,
};

const TextEditorProvider = ({ editor, library, libraryOnChange, children }) => {
  return (
    <TextEditorContext.Provider value={{ editor, library, libraryOnChange }}>
      {children}
    </TextEditorContext.Provider>
  );
};

TextEditorProvider.defaultProps = TEXT_EDITOR_PROVIDER_DEFAULT_PROPS;
TextEditorProvider.propTypes = TEXT_EDITOR_PROVIDER_PROP_TYPES;

export { TextEditorProvider };
