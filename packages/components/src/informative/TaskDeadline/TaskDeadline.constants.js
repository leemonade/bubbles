import PropTypes from 'prop-types';

export const TASK_DEADLINE_SIZES = ['sm', 'md'];

export const TASK_DEADLINE_DEFAULT_PROPS = {
  label: '',
  size: 'md',
  alertDays: 5,
  locale: 'en-gb',
};
export const TASK_DEADLINE_PROP_TYPES = {
  label: PropTypes.string,
  size: PropTypes.string,
  deadline: PropTypes.instanceOf(Date),
  alertDays: PropTypes.number,
  locale: PropTypes.string,
};
