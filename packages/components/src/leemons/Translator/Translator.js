import React, { useState, useEffect } from 'react';
import { TranslatorContext } from './TranslatorContext';
import TranslatorTrigger from './TranslatorTrigger';

export default function Translator({moduleTitle, lang, ...args}) { 
  const [errorLang, setErrorLang] = useState(lang);
  const contextValues = {
    errorLang,
  };

  useEffect(() => {
    console.log('El idioma ha cambiado');
    setErrorLang(lang)
  }, [lang])
   console.log('Algo ha cambiado', lang, errorLang)
  return (
    <TranslatorContext.Provider value={contextValues}>
        <TranslatorTrigger moduleTitle={moduleTitle} />
    </TranslatorContext.Provider>
  );
}
