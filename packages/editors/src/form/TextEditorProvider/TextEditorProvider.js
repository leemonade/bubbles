import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Editor } from '@tiptap/react';
import { isEmpty } from 'lodash';
import { TextEditorContext } from './context';
import { LIBRARY_PLAYER_DEFAULT_PROPS } from '../../tool/LibraryTool';

export const TEXT_EDITOR_PROVIDER_DEFAULT_PROPS = {
  library: <div></div>,
};

export const TEXT_EDITOR_PROVIDER_PROP_TYPES = {
  edit: PropTypes.instanceOf(Editor),
  library: PropTypes.element,
  libraryLoadAsset: PropTypes.func,
};

const TextEditorProvider = ({ editor, library, libraryLoadAsset, children, readOnly }) => {
  const [linkModalOpened, setLinkModalOpened] = useState(false);
  const [libraryModalOpened, setLibraryModalOpened] = useState(false);
  const [link, setLink] = useState({ text: '', href: '', editing: false });
  const [libraryContent, setLibraryContent] = useState({
    ...LIBRARY_PLAYER_DEFAULT_PROPS.node.attrs,
    editing: false,
  });

  const value = {
    editor,
    libraryLoadAsset,
    libraryContent,
    libraryModalOpened,
    link,
    readOnly,
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
    editLibrary: ({ asset, ...rest }) => {
      setLibraryContent({ ...rest, asset, editing: asset && !isEmpty(asset) });
      setLibraryModalOpened(true);
    },
    closeLibraryModal: () => {
      setLibraryContent({ ...LIBRARY_PLAYER_DEFAULT_PROPS.node.attrs, editing: false });
      setLibraryModalOpened(false);
    },
  };

  return <TextEditorContext.Provider value={value}>{children}</TextEditorContext.Provider>;
};

TextEditorProvider.defaultProps = TEXT_EDITOR_PROVIDER_DEFAULT_PROPS;
TextEditorProvider.propTypes = TEXT_EDITOR_PROVIDER_PROP_TYPES;

export { TextEditorProvider };
