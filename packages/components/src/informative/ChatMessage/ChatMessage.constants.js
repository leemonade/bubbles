import PropTypes from 'prop-types';

export const MESSAGE_TYPES = ['text', 'img'];

export const CHAT_MESSAGE_DEFAULT_PROPS = {
  isOwn: false,
  isOnline: false,
};
export const CHAT_MESSAGE_PROP_TYPES = {
  message: PropTypes.shape({
    date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    type: PropTypes.oneOf(MESSAGE_TYPES),
    content: PropTypes.string,
  }),
  user: PropTypes.shape({
    name: PropTypes.string,
    surnames: PropTypes.string,
    avatar: PropTypes.string,
  }),
  isOwn: PropTypes.bool,
  isOnline: PropTypes.bool,
  locale: PropTypes.string,
};
