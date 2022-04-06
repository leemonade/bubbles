import PropTypes from 'prop-types';

export const HORIZONTAL_TIMELINE_COLORS = ['positive', 'negative'];

export const HORIZONTAL_TIMELINE_DEFAULT_PROPS = {
  data: [],
  color: 'positive',
};
export const HORIZONTAL_TIMELINE_PROP_TYPES = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    })
  ),
  color: PropTypes.oneOf(HORIZONTAL_TIMELINE_COLORS),
};
