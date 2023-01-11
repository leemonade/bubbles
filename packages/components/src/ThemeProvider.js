import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { MantineProvider } from '@mantine/core';
import { Helmet } from 'react-helmet';
import { COLORS, FONT_SIZES, SPACING, SHADOWS } from './theme.tokens';
import figmaTokens from '../tokens-compiled';
import { isEmpty, isObject } from 'lodash';

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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;400;500;600&family=Lexend:wght@300;400;500;600&display=swap"
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
