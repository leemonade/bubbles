import React from 'react';
import PropTypes from 'prop-types';
import { MantineProvider } from '@mantine/core';
import { Helmet } from 'react-helmet';
import { COLORS, FONT_SIZES, SPACING, SHADOWS } from './theme.tokens';

const THEME_PROVIDER_PROP_TYPES = {
  theme: PropTypes.object,
};
const THEME_PROVIDER_DEFAULT_PROPS = {
  theme: {
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
    breakpoints: {},
    shadows: { ...SHADOWS },
    // TODO HACER PROPIEDAD FILTERS
    headings: {
      fontFamily: "'Lexend', sans-serif",
    },
    primaryColor: 'bubbles',
  },
};

const ThemeProvider = ({ children, theme }) => {
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
      <MantineProvider theme={theme}>{children}</MantineProvider>
    </>
  );
};

ThemeProvider.propTypes = THEME_PROVIDER_PROP_TYPES;
ThemeProvider.defaultProps = THEME_PROVIDER_DEFAULT_PROPS;

export { ThemeProvider };
