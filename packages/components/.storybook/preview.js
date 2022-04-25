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

export const globalTypes = {
  leemonsAuth: {
    name: 'Leemons authenticated',
    // Text that will be shown on icon hover
    description: 'Go to Leemons -> Login to authenticate',
    defaultValue: 'on',
    toolbar: {
      /**
       * You can check all available icons by this link:
       * https://storybook.js.org/docs/riot/workflows/faq#what-icons-are-available-for-my-toolbar-or-my-addon
       */
      icon: 'circlehollow',
      items: [],
      // Should "Container size" be shown, or just the "circlehollow" icon
      showName: false,
    },
  },
};

addDecorator((story, context) => {
  return (
    <Container id={`container-${story().type?.displayName}`} story={story} context={context} />
  );
});
