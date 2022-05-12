import PropTypes from 'prop-types';

export const SCORES_CELL_DEFAULT_PROPS = {};
export const SCORES_CELL_PROP_TYPES = {
  id: PropTypes.string,
  name: PropTypes.string,
  deadline: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  completionPercentage: PropTypes.number,
  locale: PropTypes.string,
};
