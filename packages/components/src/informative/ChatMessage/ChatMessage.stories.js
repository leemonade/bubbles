import React from 'react';
import { ChatMessage } from './ChatMessage';
import { CHAT_MESSAGE_DEFAULT_PROPS } from './ChatMessage.constants';
import mdx from './ChatMessage.mdx';

export default {
  title: 'Atoms/Informative/ChatMessage',
  parameters: {
    component: ChatMessage,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/SjAiYd128sqDIzjPRsyRDe/🍋-App-Opensource?node-id=4271%3A210962',
    },
  },
  argTypes: {},
};

const Template = ({ ...props }) => {
  return <ChatMessage {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  user: {
    name: 'Marcelina',
    surnames: 'Garcia Perez',
    avatar:
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80',
  },
  message: {
    type: 'text',
    date: new Date(),
    content:
      '¡Enhorabuena! Has hecho un gran trabajo con el video de explicación de tu cuadro. Demuestras un conocimiento excelente no solo sobre la obra sino también sobre su contextos histórico, me gusta como la has enmarcado en el estilo pictórico del movimiento al que pertenece el artista así como la enumeración que haces de las características del movimiento y su relación son el momento en que fue creada.',
  },
  ...CHAT_MESSAGE_DEFAULT_PROPS,
};
