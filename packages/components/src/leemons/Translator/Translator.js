import React, { useState, useEffect } from 'react';
import { TranslatorContext } from './TranslatorContext';
import TranslatorTrigger from './TranslatorTrigger';

export default function Translator({moduleTitle, lang, ...args}) { 
  const [errorLang, setErrorLang] = useState(lang);
  const contextValues = {
    errorLang,
  };

  useEffect(() => {
    setErrorLang(lang)
  }, [lang])

  return (
    <TranslatorContext.Provider value={contextValues}>
        <TranslatorTrigger moduleTitle={moduleTitle} />
    </TranslatorContext.Provider>
  );
}
