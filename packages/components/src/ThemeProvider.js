import React from 'react';
import { MantineProvider } from '@mantine/core';
import { Helmet } from 'react-helmet';
import { COLORS, FONT_SIZES, SPACING } from './theme.tokens';

export const ThemeProvider = ({ children, theme }) => {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;400;600&family=Lexend:wght@100;400;600&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <MantineProvider
        theme={{
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
          },
          breakpoints: {},
          shadows: {},
          headings: {
            fontFamily: "'Lexend', sans-serif",
          },
        }}
      >
        {children}
      </MantineProvider>
    </>
  );
};
