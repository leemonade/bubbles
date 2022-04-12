import PropTypes from 'prop-types';

export const CALIFICATION_DEFAULT_PROPS = {
  label: 'Aprobado',
  grade: 0,
  minimumGrade: 0,
};
export const CALIFICATION_PROP_TYPES = {
  label: PropTypes.string,
  grade: PropTypes.number,
  minimumGrade: PropTypes.number,
};
