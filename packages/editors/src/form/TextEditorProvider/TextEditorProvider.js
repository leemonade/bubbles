import { TextEditorContext } from './context';
import PropTypes from 'prop-types';
import { Editor } from '@tiptap/react';
import { useState } from 'react';

export const TEXT_EDITOR_PROVIDER_DEFAULT_PROPS = {
  library: <div></div>,
};

export const TEXT_EDITOR_PROVIDER_PROP_TYPES = {
  edit: PropTypes.instanceOf(Editor),
  library: PropTypes.element,
  libraryOnChange: PropTypes.func,
};

const TextEditorProvider = ({ editor, library, libraryOnChange, children }) => {
  const [isOpenedLink, setIsOpenedLink] = useState(false);

  return (
    <TextEditorContext.Provider
      value={{ editor, library, libraryOnChange, isOpenedLink, setIsOpenedLink }}
    >
      {children}
    </TextEditorContext.Provider>
  );
};

TextEditorProvider.defaultProps = TEXT_EDITOR_PROVIDER_DEFAULT_PROPS;
TextEditorProvider.propTypes = TEXT_EDITOR_PROVIDER_PROP_TYPES;

export { TextEditorProvider };
