import PropTypes from 'prop-types';

export const ACTIVITY_ANSWERS_BAR_STATUSES = ['OK', 'KO', null];

export const ACTIVITY_ANSWERS_BAR_DEFAULT_PROPS = {};
export const ACTIVITY_ANSWERS_BAR_PROP_TYPES = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      category: PropTypes.string,
      level: PropTypes.string,
      status: PropTypes.oneOf(ACTIVITY_ANSWERS_BAR_STATUSES),
    })
  ),
  selectables: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  labels: PropTypes.shape({
    OK: PropTypes.string,
    KO: PropTypes.string,
    null: PropTypes.string,
  }),
  graphicHeight: PropTypes.number,
};
