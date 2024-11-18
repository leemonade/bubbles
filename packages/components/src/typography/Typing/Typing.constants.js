import PropTypes from 'prop-types';

export const TYPING_DEFAULT_PROPS = {
  strings: [],
  typeSpeed: 40,
  backSpeed: 50,
  loop: false,
  typedRef: null,
  startWhenVisible: true,
  showCursor: true,
  hideCursorOnComplete: true,
  onComplete: (self) => {},
};
export const TYPING_PROP_TYPES = {
  strings: PropTypes.arrayOf(PropTypes.string),
  typeSpeed: PropTypes.number,
  backSpeed: PropTypes.number,
  attr: PropTypes.string,
  loop: PropTypes.bool,
  typedRef: PropTypes.object,
  startWhenVisible: PropTypes.bool,
  showCursor: PropTypes.bool,
  hideCursorOnComplete: PropTypes.bool,
  onComplete: PropTypes.func,
};
