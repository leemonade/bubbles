import React from 'react';
import { addDecorator } from '@storybook/react';
import { Container } from './Container';
import '!style-loader!css-loader!./global.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const globalTypes = {};

addDecorator((story, context) => {
  return (
    <Container id={`container-${story().type?.displayName}`} story={story} context={context} />
  );
});
