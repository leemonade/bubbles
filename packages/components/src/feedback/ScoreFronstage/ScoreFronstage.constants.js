import PropTypes from 'prop-types';

export const SCORE_FRONSTAGE_DEFAULT_PROPS = {
  title: '',
  subtitle: '',
  image: '',
  icon: '',
  label: '',
  score: 5,
  minGrade: 5,
  maxGrade: 10,
  values: [],
  locale: '',
};
export const SCORE_FRONSTAGE_PROP_TYPES = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  label: PropTypes.string,
  score: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minGrade: PropTypes.number,
  maxGrade: PropTypes.number,
  values: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
      percentage: PropTypes.string,
      score: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
  locale: PropTypes.string,
};
