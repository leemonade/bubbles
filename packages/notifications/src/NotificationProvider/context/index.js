import { createContext } from 'react';

export const CONTEXT_TYPES = {
  DEFAULT: 'notification',
  CHAT: 'chat',
};

export const NotificationsContext = createContext(null);
export const ChatContext = createContext(null);
