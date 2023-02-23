import PropTypes from 'prop-types';

export const TASK_HEADER_SIZES = ['sm', 'md'];

export const TASK_HEADER_DEFAULT_PROPS = {
  title: '',
  styles: {},
};
export const TASK_HEADER_PROP_TYPES = {
  title: PropTypes.string,
  icon: PropTypes.string,
  color: PropTypes.string,
  activityType: PropTypes.shape({
    type: PropTypes.string,
    icon: PropTypes.icon,
  }),
  activityEvaluation: PropTypes.string,
  activityDates: PropTypes.shape({
    startLabel: PropTypes.string,
    endLabel: PropTypes.string,
    hourLabel: PropTypes.string,
    startDate: PropTypes.oneOfType([PropTypes.string, PropTypes.date]),
    endDate: PropTypes.oneOfType([PropTypes.string, PropTypes.date]),
  }),
  styles: PropTypes.object,
  className: PropTypes.string,
};
