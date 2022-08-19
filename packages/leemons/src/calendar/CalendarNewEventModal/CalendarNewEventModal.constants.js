import PropTypes from 'prop-types';

export const CALENDAR_NEW_EVENT_MODAL_DEFAULT_PROPS = {
  opened: false,
  labels: {
    periodName: '',
    schoolDays: '',
    nonSchoolDays: '',
    withoutOrdinaryDays: '',
    startDate: '',
    endDate: '',
    color: '',
    add: '',
  },
  values: {
    periodName: '',
    dayType: '',
    withoutOrdinaryDays: false,
    startDate: null,
    endDate: null,
    color: '',
  },
  placeholders: {
    periodName: '',
    startDate: '',
    endDate: '',
    color: '',
  },
  errorMessages: {
    periodName: '',
    dayType: '',
    startDate: '',
    endDate: '',
    color: '',
  },
  suggestions: [],
};
export const CALENDAR_NEW_EVENT_MODAL_PROP_TYPES = {
  opened: PropTypes.bool,
  values: PropTypes.shape({
    periodName: PropTypes.string,
    dayType: PropTypes.oneOf(['schoolDays', 'nonSchoolDays']),
    withoutOrdinaryDays: PropTypes.bool,
    startDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    endDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    color: PropTypes.string,
  }),
  labels: PropTypes.shape({
    periodName: PropTypes.string,
    schoolDays: PropTypes.string,
    nonSchoolDays: PropTypes.string,
    withoutOrdinaryDays: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    color: PropTypes.string,
    add: PropTypes.string,
  }),
  placeholders: PropTypes.shape({
    periodName: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    color: PropTypes.string,
  }),
  errorMessages: PropTypes.shape({
    periodName: PropTypes.string,
    dayType: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    color: PropTypes.string,
  }),
  suggestions: PropTypes.arrayOf(PropTypes.string),
};
