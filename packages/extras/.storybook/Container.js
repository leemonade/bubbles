import React from 'react';
import { ThemeProvider } from '@bubbles-ui/components';

export const Container = ({ story, id, context }) => {
  return (
    <React.StrictMode>
      <ThemeProvider>
        <div className={id.toLowerCase()} data-floating-menu-container role="main">
          {story()}
        </div>
      </ThemeProvider>
    </React.StrictMode>
  );
};
