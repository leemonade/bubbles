import PropTypes from 'prop-types';
import { STUDENT_STATUSES } from '../AttendanceControl/AttendanceControl.constants';

export const ATTENDANCE_CONTROL_DRAWER_DEFAULT_PROPS = {
  labels: {
    backButton: '',
    saveButton: '',
    attendanceControl: '',
    allPresentSwitch: '',
  },
  students: [],
  attendance: [],
};
export const ATTENDANCE_CONTROL_DRAWER_PROP_TYPES = {
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
