import PropTypes from 'prop-types';

export const SCORES_BAR_VARIANTS = ['multicolor', 'onecolor'];
export const SCORES_BAR_BOTTOM_AXIS = [
  [0, 0.5, 1, 1.5, 2, 2.5],
  [0, 1, 2, 3, 4, 5],
  [0, 2.5, 5, 7.5, 10],
];

export const SCORES_BAR_DEFAULT_PROPS = {
  minimumGrade: 5,
  variant: 'multicolor',
  data: [],
  withMarker: false,
  markerLegend: '',
};
export const SCORES_BAR_PROP_TYPES = {
  minimumGrade: PropTypes.number,
  variant: PropTypes.oneOf(SCORES_BAR_VARIANTS),
  data: PropTypes.arrayOf(PropTypes.object),
  withMarker: PropTypes.bool,
  markerLegend: PropTypes.string,
};
