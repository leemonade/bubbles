import PropTypes from 'prop-types';
import { INPUT_WRAPPER_PROP_TYPES, INPUT_WRAPPER_DEFAULT_PROPS } from '../InputWrapper';

export const SCORE_INPUT_DIRECTION = ['ltr', 'rtl'];
export const SCORE_INPUT_SEPARATORS = ['dot', 'comma'];

export const SCORE_INPUT_DEFAULT_PROPS = {
  ...INPUT_WRAPPER_DEFAULT_PROPS,
  grades: [],
  tags: [],
  showLetters: false,
  placeholder: '',
  value: {},
  decimalPrecision: 0,
  direction: 'ltr',
  customLabel: 'Enter custom score value',
  moveRightLabel: 'Move right',
  moveLeftLabel: 'Move left',
  useAria: true,
};

export const SCORE_INPUT_PROP_TYPES = {
  ...INPUT_WRAPPER_PROP_TYPES,
  grades: PropTypes.arrayOf(
    PropTypes.shape({
      score: PropTypes.number,
      letter: PropTypes.string,
    })
  ),
  acceptCustom: PropTypes.oneOf(['text', 'number']),
  value: PropTypes.shape({
    score: PropTypes.number,
    letter: PropTypes.string,
  }),
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      letter: PropTypes.string,
      score: PropTypes.number,
    })
  ),
  placeholder: PropTypes.string,
  showLetters: PropTypes.bool,
  decimalPrecision: PropTypes.number,
  decimalSeparator: PropTypes.oneOf(SCORE_INPUT_SEPARATORS),
  direction: PropTypes.oneOf(SCORE_INPUT_DIRECTION),
  onChange: PropTypes.func,
  customLabel: PropTypes.string,
  useAria: PropTypes.bool,
};
