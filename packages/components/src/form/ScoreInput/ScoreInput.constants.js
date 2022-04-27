import PropTypes from 'prop-types';
import { INPUT_WRAPPER_PROP_TYPES, INPUT_WRAPPER_DEFAULT_PROPS } from '../InputWrapper';

export const SCORE_INPUT_DEFAULT_PROPS = {
  ...INPUT_WRAPPER_DEFAULT_PROPS,
  grades: [],
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
  onChange: PropTypes.func,
};
