import PropTypes from 'prop-types';

export const CUSTOM_BAR_DEFAULT_PROPS = {};
export const CUSTOM_BAR_PROP_TYPES = {
  barData: PropTypes.shape({
    bar: PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number,
      x: PropTypes.number,
      y: PropTypes.number,
      index: PropTypes.number,
      data: PropTypes.shape({
        value: PropTypes.number,
      }),
    }),
    label: PropTypes.string,
  }),
  minimumGrade: PropTypes.number,
  isMultiColor: PropTypes.bool,
  showBarPercentage: PropTypes.bool,
  scoresLength: PropTypes.number,
};
