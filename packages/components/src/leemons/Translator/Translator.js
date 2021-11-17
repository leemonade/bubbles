import React, { useState } from 'react';
import { TranslatorContext } from './TranslatorContext';
import TranslatorTrigger from './TranslatorTrigger';

export default function Translator({moduleTitle, ...args}) { 
  const [emptyTranslations, setEmptyTranslations] = useState(true);
  const [errorLang, setErrorLang] = useState('en');
  const contextValues = {
    hasError: emptyTranslations,
    setHasError: setEmptyTranslations,
    errorLang,
  };
   
  return (
    <TranslatorContext.Provider value={contextValues}>
        <TranslatorTrigger moduleTitle={moduleTitle} />
    </TranslatorContext.Provider>
  );
}
