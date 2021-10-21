import React from 'react';
import { addDecorator } from '@storybook/react';
import { Container } from './Container';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator((story, i) => {
  return <Container id={`container-${story().type?.displayName}`} story={story} />;
});
