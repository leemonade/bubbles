import PropTypes from 'prop-types';

export const TASK_DEADLINE_HEADER_DEFAULT_PROPS = {
  labels: {
    deadline: '',
    deadlineExtraTime: '',
    closeTask: '',
    save: '',
    cancel: '',
  },
  title: '',
  subtitle: '',
  closed: false,
  locale: 'en-GB',
};
export const TASK_DEADLINE_HEADER_PROP_TYPES = {
  labels: PropTypes.shape({
    deadline: PropTypes.string,
    deadlineExtraTime: PropTypes.string,
    closeTask: PropTypes.string,
    save: PropTypes.string,
    cancel: PropTypes.string,
  }),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  icon: PropTypes.string,
  color: PropTypes.string,
  deadline: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  locale: PropTypes.string,
  closed: PropTypes.bool,
  onDeadlineChange: PropTypes.func,
  onCloseTask: PropTypes.func,
};
