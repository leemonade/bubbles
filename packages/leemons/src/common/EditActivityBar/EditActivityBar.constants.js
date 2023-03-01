import PropTypes from 'prop-types';

export const EDIT_ACTIVITY_BAR_DEFAULT_PROPS = {
  labels: {
    noDeadline: '',
    deadline: '',
    deadlineExtraTime: '',
    closeTask: '',
    save: '',
    cancel: '',
    closedPeriod: '',
    liveSession: '',
  },
  closed: false,
  locale: 'en',
  deadline: null,
};
export const EDIT_ACTIVITY_BAR_PROP_TYPES = {
  labels: PropTypes.shape({
    deadline: PropTypes.string,
    deadlineExtraTime: PropTypes.string,
    closeTask: PropTypes.string,
    save: PropTypes.string,
    cancel: PropTypes.string,
    closedPeriod: PropTypes.string,
    liveSession: PropTypes.string,
  }),
  deadline: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  locale: PropTypes.string,
  closed: PropTypes.bool,
  archived: PropTypes.bool,
  disableClose: PropTypes.bool,
  disableArchive: PropTypes.bool,
  hideClose: PropTypes.bool,
  hideArchive: PropTypes.bool,
  onDeadlineChange: PropTypes.func,
  onCloseTask: PropTypes.func,
  onArchiveTask: PropTypes.func,
  isClosedPeriod: PropTypes.bool,
};
