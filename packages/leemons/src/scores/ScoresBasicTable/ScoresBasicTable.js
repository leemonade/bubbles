import React, { useCallback, useMemo } from 'react';
import { ScoreCell } from './ScoreCell';
import { useSticky } from 'react-table-sticky';
import { ActivityHeader } from './ActivityHeader';
import { ScoresBasicTableStyles } from './ScoresBasicTable.styles';
import { useTable, useFlexLayout } from 'react-table';
import { Box, Text, UserDisplayItem, Badge } from '@bubbles-ui/components';
import {
  SCORES_BASIC_TABLE_DEFAULT_PROPS,
  SCORES_BASIC_TABLE_PROP_TYPES,
} from './ScoresBasicTable.constants';

const ScoresBasicTable = ({
  grades,
  activities,
  value,
  labels,
  locale,
  onChange,
  onDataChange,
  ...props
}) => {
  const { classes, cx } = ScoresBasicTableStyles({}, { name: 'ScoresBasicTable' });

  const getCompletionPercentage = (activityId) => {
    const studentsWithActivity = value.filter((student) => {
      return student.activities.find((activity) => activity.id === activityId);
    });
    const completionPercentage = Math.trunc((studentsWithActivity.length / value.length) * 100);
    return `${completionPercentage}%`;
  };

  const getActivities = (studentActivities) => {
    const activitiesObject = {};
    activities.forEach(({ id, grade, score }) => {
      const activity = studentActivities.find((studentActivity) => studentActivity.id === id);
      activitiesObject[id] =
        activity?.grade || activity?.score !== undefined ? activity.score : labels.noActivity;
    });
    return activitiesObject;
  };

  const getAvgScore = (studentActivities) => {
    const sumOfScores = studentActivities.reduce((acc, { score }) => acc + score, 0);
    const averageScore = (sumOfScores / activities.length).toFixed(2);
    return averageScore;
  };

  const getSeverity = (studentAttendance) => {
    if (studentAttendance === 50) {
      return 'warning';
    }
    if (studentAttendance > 50) {
      return 'success';
    }
    return 'error';
  };

  const getActivitiesPeriod = useCallback(() => {
    const earliestDeadline = activities.reduce((acc, { deadline }) => {
      return acc < deadline ? acc : deadline;
    }, activities[0].deadline);
    const latestDeadline = activities.reduce((acc, { deadline }) => {
      return acc > deadline ? acc : deadline;
    }, activities[0].deadline);
    return `${new Date(earliestDeadline).toLocaleDateString(locale)} - ${new Date(
      latestDeadline
    ).toLocaleDateString(locale)}`;
  }, [activities, locale]);

  const getRightBodyContent = () => {
    return value.map(({ activities: studentActivities }) => {
      const studentAttendance = Math.trunc((studentActivities.length / activities.length) * 100);
      return (
        <Box className={classes.contentRow}>
          <Box className={classes.separator} />
          <Box className={classes.studentInfo}>
            <Text color="primary" role="productive">
              {getAvgScore(studentActivities)}
            </Text>
          </Box>
          <Box className={classes.studentInfo}>
            <Badge
              label={`${studentAttendance}%`}
              severity={getSeverity(studentAttendance)}
              closable={false}
              radius="default"
            />
          </Box>
        </Box>
      );
    });
  };

  const getColumns = () => {
    const columns = [];
    columns.push({
      accessor: 'student',
      width: 200,
      sticky: 'left',
      Header: (
        <Box className={classes.students}>
          <Text color="primary" role="productive" size="xs" stronger>
            {labels.students}
          </Text>
        </Box>
      ),
      Cell: ({ value }) => {
        return (
          <Box className={classes.studentsCells}>
            <UserDisplayItem name={value.name} surnames={value.surname} avatar={value.image} />
          </Box>
        );
      },
    });
    activities.forEach((activity) => {
      const completionPercentage = getCompletionPercentage(activity.id);
      columns.push({
        accessor: activity.id,
        width: 148,
        Header: () => (
          <ActivityHeader
            {...activity}
            completionPercentage={completionPercentage}
            locale={locale}
          />
        ),
        Cell: ({ value }) => {
          return <ScoreCell value={value} />;
        },
      });
    });
    return columns;
  };

  const getData = () => {
    const data = [];
    value.forEach(({ id, name, surname, image, activities }) => {
      data.push({
        student: { name, surname, image },
        ...getActivities(activities),
        gradingTasks: getAvgScore(activities),
      });
    });
    return data;
  };

  const columns = useMemo(() => getColumns(), [activities, labels, locale]);
  const data = useMemo(() => getData(), [activities, labels, locale]);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
    },
    useFlexLayout,
    useSticky
  );

  return (
    <Box className={classes.root}>
      <Box {...getTableProps()} className={classes.table}>
        <Box>
          <Box className={classes.tableHeader}>
            {headerGroups.map((headerGroup) => (
              <Box {...headerGroup.getHeaderGroupProps()} className={classes.tableHeaderRow}>
                {headerGroup.headers.map((column, index) => (
                  <Box {...column.getHeaderProps()} className={classes.tableHeaderCell}>
                    {column.render('Header')}
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
          <Box {...getTableBodyProps()} className={classes.tableBody}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <Box {...row.getRowProps()} className={classes.bodyRow}>
                  {row.cells.map((cell) => {
                    return (
                      <Box {...cell.getCellProps()} className={classes.bodyCell}>
                        {cell.render('Cell')}
                      </Box>
                    );
                  })}
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box className={classes.rightBody}>
          <Box className={classes.rightBodyHeader}>
            <Box className={classes.headerAvg}>
              <Text color="primary" role="productive" stronger transform="uppercase">
                {labels.avgScore}
              </Text>
              <Text color="primary" role="productive" size="xs">
                {getActivitiesPeriod()}
              </Text>
            </Box>
            <Box className={classes.columnHeader}>
              <Text color="primary" role="productive" stronger transform="uppercase" size="xs">
                {labels.gradingTasks}
              </Text>
            </Box>
            <Box className={classes.columnHeader}>
              <Text color="primary" role="productive" stronger transform="uppercase" size="xs">
                {labels.attendance}
              </Text>
            </Box>
          </Box>
          <Box className={classes.rightBodyContent}>{getRightBodyContent()}</Box>
        </Box>
      </Box>
    </Box>
  );
};

ScoresBasicTable.defaultProps = SCORES_BASIC_TABLE_DEFAULT_PROPS;
ScoresBasicTable.propTypes = SCORES_BASIC_TABLE_PROP_TYPES;

export { ScoresBasicTable };
