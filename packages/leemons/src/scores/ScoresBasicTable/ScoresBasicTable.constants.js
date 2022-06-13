import PropTypes from 'prop-types';

export const SCORES_BASIC_TABLE_VALUE = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
  surname: PropTypes.string,
  image: PropTypes.string,
  activities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      score: PropTypes.number,
    })
  ),
});

export const SCORES_BASIC_TABLE_DEFAULT_PROPS = {
  labels: {
    students: '',
    noActivity: '',
    avgScore: '',
    gradingTasks: '',
    attendance: '',
  },
};
export const SCORES_BASIC_TABLE_PROP_TYPES = {
  grades: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.number,
      letter: PropTypes.string,
    })
  ),
  activities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      deadline: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
      expandable: PropTypes.bool,
    })
  ),
  value: PropTypes.arrayOf(SCORES_BASIC_TABLE_VALUE),
  expandedData: PropTypes.shape({
    activities: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        deadline: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
      })
    ),
    value: SCORES_BASIC_TABLE_VALUE,
  }),
  expandedColumn: PropTypes.number,
  labels: PropTypes.shape({
    students: PropTypes.string,
    noActivity: PropTypes.string,
    avgScore: PropTypes.string,
    gradingTasks: PropTypes.string,
    attendance: PropTypes.string,
  }),
  onChange: PropTypes.func,
  onDataChange: PropTypes.func,
  onColumnExpand: PropTypes.func,
};
