import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { MantineProvider } from '@mantine/core';
import { Helmet } from 'react-helmet';
import { isEmpty, isObject } from 'lodash';
import { COLORS, FONT_SIZES, SPACING, SHADOWS } from './theme.tokens';
import figmaTokens from './tokens.compiled';

export const BUBBLES_THEME = {
  colorScheme: 'light',
  colors: {
    ...COLORS,
  },
  spacing: {
    ...SPACING,
  },
  fontSizes: {
    ...FONT_SIZES,
  },
  radius: {
    xs: '3px',
    sm: '4px',
  },
  shadows: { ...SHADOWS },
  // TODO HACER PROPIEDAD FILTERS
  headings: {
    fontFamily: "'Lexend', sans-serif",
  },
  primaryColor: 'bubbles',
  other: figmaTokens,
};

const THEME_PROVIDER_PROP_TYPES = {
  theme: PropTypes.object,
};
const THEME_PROVIDER_DEFAULT_PROPS = {
  theme: BUBBLES_THEME,
};

const parseTheme = (theme) => {
  if (isEmpty(theme.other)) return theme;
  recursiveParse(theme.other);
  return theme;
};

const recursiveParse = (object) => {
  if (!isObject(object)) return;
  for (const property in object) {
    if (object[property].value) {
      object[property] = object[property].value;
    } else {
      recursiveParse(object[property]);
    }
  }
};

const ThemeProvider = ({ children, theme }) => {
  const [parsedTheme, setParsedTheme] = useState(parseTheme(theme));

  useEffect(() => {
    if (JSON.stringify(theme) !== JSON.stringify(parsedTheme)) {
      setParsedTheme(parseTheme(theme));
    }
  }, [JSON.stringify(theme)]);

  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.bunny.net/css?family=albert-sans:100,300,400,500,600"
          rel="stylesheet"
        />
      </Helmet>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={parsedTheme}>
        {children}
      </MantineProvider>
    </>
  );
};

ThemeProvider.propTypes = THEME_PROVIDER_PROP_TYPES;
ThemeProvider.defaultProps = THEME_PROVIDER_DEFAULT_PROPS;

export { ThemeProvider };
