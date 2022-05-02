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
  scores: [],
  grades: [],
  withMarker: false,
  markerLegend: '',
  showLeftLegend: true,
  showBarPercentage: false,
};
export const SCORES_BAR_PROP_TYPES = {
  minimumGrade: PropTypes.number,
  variant: PropTypes.oneOf(SCORES_BAR_VARIANTS),
  scores: PropTypes.arrayOf(
    PropTypes.shape({
      student: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      score: PropTypes.number,
    })
  ),
  grades: PropTypes.arrayOf(
    PropTypes.shape({
      score: PropTypes.number,
      letter: PropTypes.string,
    })
  ),
  withMarker: PropTypes.bool,
  markerLegend: PropTypes.string,
  showLeftLegend: PropTypes.bool,
  showBarPercentage: PropTypes.bool,
  styles: PropTypes.object,
  className: PropTypes.string,
};
