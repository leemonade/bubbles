import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { isArray, isNil, isString, findIndex, isFunction } from 'lodash';
import { StarIcon } from '@heroicons/react/solid';
import { Tabs, Tab } from '../../../navigation';

export const TRANSLATOR_TABS_DEFAULT_PROPS = {
  locales: [],
  errors: [],
  warnings: [],
  defaultLocale: null,
};
export const TRANSLATOR_TABS_PROP_TYPES = {
  children: PropTypes.element,
  locales: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, code: PropTypes.string, config: PropTypes.any })
  ),
  // Array of locale codes
  errors: PropTypes.arrayOf(PropTypes.string),
  // Array of locale codes
  warnings: PropTypes.arrayOf(PropTypes.string),
  // Default Locale code
  defaultLocale: PropTypes.string,
  onLocaleChange: PropTypes.func,
};

const TranslatorTabs = ({ children, locales, errors, warnings, defaultLocale, onLocaleChange }) => {
  const [langs, setLangs] = useState([]);

  useEffect(() => {
    if (isArray(locales) && isString(defaultLocale)) {
      const data = [...locales];
      const langIndex = findIndex(locales, { code: defaultLocale });
      if (langIndex > -1) {
        data.unshift(...data.splice(langIndex, 1));
        setLangs(data);
      }
    }
  }, [locales, defaultLocale]);

  const handleLocaleChange = (code) => {
    code = code.replace('.$', '');
    if (isFunction(onLocaleChange)) onLocaleChange(code);
  };

  return isArray(langs) && langs.length > 0 ? (
    <Tabs onTabClick={handleLocaleChange}>
      {langs.map((locale, i) => (
        <Tab
          key={locale.code}
          label={locale.label}
          hasError={errors.includes(locale.code)}
          hasWarning={warnings.includes(locale.code)}
          rightIcon={
            defaultLocale === locale.code ? (
              <StarIcon style={{ width: 14, color: '#B9BEC4' }} />
            ) : null
          }
        >
          {!isNil(children) && React.isValidElement(children)
            ? React.cloneElement(children, { localeConfig: locale.config })
            : null}
        </Tab>
      ))}
    </Tabs>
  ) : null;
};

TranslatorTabs.defaultProps = TRANSLATOR_TABS_DEFAULT_PROPS;
TranslatorTabs.propTypes = TRANSLATOR_TABS_PROP_TYPES;

export { TranslatorTabs };
