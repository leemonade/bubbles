import PropTypes from 'prop-types';
import { INPUT_WRAPPER_PROP_TYPES, INPUT_WRAPPER_DEFAULT_PROPS } from '../InputWrapper';

export const SCORE_INPUT_DEFAULT_PROPS = {
  ...INPUT_WRAPPER_DEFAULT_PROPS,
  grades: [],
  tags: [],
  showLetters: false,
  placeholder: '',
  value: {},
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
  tags: PropTypes.arrayOf(PropTypes.string),
  placeholder: PropTypes.string,
  showLetters: PropTypes.bool,
  onChange: PropTypes.func,
};
