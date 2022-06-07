import PropTypes from 'prop-types';

export const SCORES_PERIOD_FORM_DEFAULT_PROPS = {
  labels: {
    startDate: '',
    endDate: '',

    submit: '',
  },
  errorMessages: {
    startDate: '',
    endDate: '',
  },
};
export const SCORES_PERIOD_FORM_PROP_TYPES = {
  value: PropTypes.shape({
    program: PropTypes.any,
    course: PropTypes.any,
    subject: PropTypes.any,
    startDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    endDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  }),
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      placeholder: PropTypes.string,
      data: PropTypes.arrayOf(PropTypes.string),
      required: PropTypes.string,
    })
  ),
  labels: PropTypes.shape({
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    submit: PropTypes.string,
  }),
  errorMessages: PropTypes.shape({
    startDate: PropTypes.string,
    endDate: PropTypes.string,
  }),
  onSubmit: PropTypes.func,
  onSave: PropTypes.func,
};
