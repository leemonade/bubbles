import PropTypes from 'prop-types';

export const ITEM_DEFAULT_PROPS = {
  title: '',
  date: '',
  percentage: '',
  score: 0,
  minGrade: 0,
};
export const ITEM_PROP_TYPES = {
  title: PropTypes.string,
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  percentage: PropTypes.string,
  score: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minGrade: PropTypes.number,
  locale: PropTypes.string,
};
