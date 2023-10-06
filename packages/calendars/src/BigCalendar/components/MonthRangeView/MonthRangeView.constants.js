import PropTypes from 'prop-types';

export const MONTHRANGEVIEW_DEFAULT_PROPS = {
  events: [],
  onRangeChange: () => {},
};

export const MONTHRANGEVIEW_PROPTYPES = {
  events: PropTypes.arrayOf(PropTypes.object),
  dateMonthRange: PropTypes.shape({
    startYear: PropTypes.number,
    startMonth: PropTypes.number,
    endYear: PropTypes.number,
    endMonth: PropTypes.number,
  }),
  printMode: PropTypes.bool,
  onRangeChange: PropTypes.func,
};
