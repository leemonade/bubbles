import PropTypes from 'prop-types';

export const CALENDAR_NEW_EVENT_MODAL_DEFAULT_PROPS = {
  opened: false,
  labels: {
    periodName: '',
    schoolDays: '',
    nonSchoolDays: '',
    withoutOrdinaryDays: '',
    periodRange: '',
    color: '',
    add: '',
  },
  placeholders: {
    periodName: '',
    periodRange: '',
    color: '',
  },
  suggestions: [],
};
export const CALENDAR_NEW_EVENT_MODAL_PROP_TYPES = {
  opened: PropTypes.bool,
  labels: PropTypes.shape({
    periodName: PropTypes.string,
    schoolDays: PropTypes.string,
    nonSchoolDays: PropTypes.string,
    withoutOrdinaryDays: PropTypes.string,
    periodRange: PropTypes.string,
    color: PropTypes.string,
    add: PropTypes.string,
  }),
  placeholders: PropTypes.shape({
    periodName: PropTypes.string,
    periodRange: PropTypes.string,
    color: PropTypes.string,
  }),
  errorMessages: PropTypes.shape({
    periodName: PropTypes.string,
    dayType: PropTypes.string,
    periodRange: PropTypes.string,
    color: PropTypes.string,
  }),
  suggestions: PropTypes.arrayOf(PropTypes.string),
};
