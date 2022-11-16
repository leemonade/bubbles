import React, { createContext, useContext } from 'react';

export const TextEditorContext = createContext(null);
export const useTextEditor = () => useContext(TextEditorContext);
