import React, { useState } from 'react';
import { TranslatorContext } from './TranslatorContext';
import TranslatorTrigger from './TranslatorTrigger';

export default function Translator({moduleTitle, lang, ...args}) { 
  const [emptyTranslations, setEmptyTranslations] = useState(true);
  const [errorLang, setErrorLang] = useState(`${lang}`);
  const contextValues = {
    hasError: emptyTranslations,
    setHasError: setEmptyTranslations,
    errorLang,
  };
   console.log(lang)
  return (
    <TranslatorContext.Provider value={contextValues}>
        <TranslatorTrigger moduleTitle={moduleTitle} />
    </TranslatorContext.Provider>
  );
}
