import PropTypes from 'prop-types';

export const SCHEDULE_PROPS = PropTypes.shape({
  id: PropTypes.string,
  day: PropTypes.string,
  dayWeek: PropTypes.number,
  duration: PropTypes.number,
  end: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  start: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
});

export const TEACHER_PROPS = PropTypes.shape({
  name: PropTypes.string,
  surnames: PropTypes.string,
  avatar: PropTypes.string,
});

export const CLASSROOM_HEADER_BAR_DEFAULT_PROPS = {
  labels: {
    virtualClassroom: '',
    schedule: '',
  },
  classRoom: {},
  locale: 'en',
  onChat: null,
  showChat: false,
};
export const CLASSROOM_HEADER_BAR_PROP_TYPES = {
  classRoom: PropTypes.shape({
    schedule: PropTypes.arrayOf(SCHEDULE_PROPS),
    address: PropTypes.string,
    virtual_classroom: PropTypes.string,
    teacher: TEACHER_PROPS,
  }),
  labels: PropTypes.shape({
    virtualClassroom: PropTypes.string,
    schedule: PropTypes.string,
  }),
  locale: PropTypes.string,
  onChat: PropTypes.func,
  showChat: PropTypes.bool,
};
