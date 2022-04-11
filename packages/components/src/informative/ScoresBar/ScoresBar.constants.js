import PropTypes from 'prop-types';

export const SCORES_BAR_VARIANTS = ['multicolor', 'onecolor'];

export const SCORES_BAR_DEFAULT_PROPS = {
  minimumGrade: 5,
  variant: 'multicolor',
  data: [],
  withMarker: false,
};
export const SCORES_BAR_PROP_TYPES = {
  minimumGrade: PropTypes.number,
  variant: PropTypes.oneOf(SCORES_BAR_VARIANTS),
  data: PropTypes.arrayOf(PropTypes.object),
  withMarker: PropTypes.bool,
};
