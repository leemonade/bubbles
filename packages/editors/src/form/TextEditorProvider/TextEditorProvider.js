import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Editor } from '@tiptap/react';
import { isEmpty } from 'lodash';
import { TextEditorContext } from './context';

export const TEXT_EDITOR_PROVIDER_DEFAULT_PROPS = {
  library: <div></div>,
};

export const TEXT_EDITOR_PROVIDER_PROP_TYPES = {
  edit: PropTypes.instanceOf(Editor),
  library: PropTypes.element,
  libraryOnChange: PropTypes.func,
};

const TextEditorProvider = ({ editor, library, libraryOnChange, children }) => {
  const [linkModalOpened, setLinkModalOpened] = useState(false);
  const [link, setLink] = useState({ text: '', href: '', editing: false });

  const value = {
    editor,
    library,
    libraryOnChange,
    link,
    linkModalOpened,
    setLinkModalOpened,
    editLink: (text, href) => {
      setLink({ text, href, editing: href && !isEmpty(href) });
      setLinkModalOpened(true);
    },
    closeLinkModal: () => {
      setLink({ text: '', href: '', editing: false });
      setLinkModalOpened(false);
    },
  };

  return <TextEditorContext.Provider value={value}>{children}</TextEditorContext.Provider>;
};

TextEditorProvider.defaultProps = TEXT_EDITOR_PROVIDER_DEFAULT_PROPS;
TextEditorProvider.propTypes = TEXT_EDITOR_PROVIDER_PROP_TYPES;

export { TextEditorProvider };
