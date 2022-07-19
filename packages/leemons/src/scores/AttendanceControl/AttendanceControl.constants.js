import PropTypes from 'prop-types';

export const STUDENT_STATUSES = [0, 1, 2, 3];

export const ATTENDANCE_CONTROL_DEFAULT_PROPS = {
  labels: {
    saveButton: '',
    attendanceControl: '',
    allPresentSwitch: '',
  },
  students: [],
  attendance: [],
};
export const ATTENDANCE_CONTROL_PROP_TYPES = {
  labels: PropTypes.shape({
    backButton: PropTypes.string,
    saveButton: PropTypes.string,
    attendanceControl: PropTypes.string,
    allPresentSwitch: PropTypes.string,
  }),
  classTitle: PropTypes.string,
  students: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  attendance: PropTypes.arrayOf(
    PropTypes.shape({
      studentId: PropTypes.string,
      status: PropTypes.oneOf(STUDENT_STATUSES),
    })
  ),
  onSave: PropTypes.func,
};
