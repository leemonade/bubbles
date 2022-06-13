import React, { useEffect, useMemo, useState } from 'react';
import { ScoreCell } from './ScoreCell';
import { useSticky } from 'react-table-sticky';
import { ActivityHeader } from './ActivityHeader';
import { ScoresBasicTableStyles } from './ScoresBasicTable.styles';
import { useTable, useFlexLayout } from 'react-table';
import { Box, Text, UserDisplayItem, Badge, useElementSize } from '@bubbles-ui/components';
import {
  SCORES_BASIC_TABLE_DEFAULT_PROPS,
  SCORES_BASIC_TABLE_PROP_TYPES,
} from './ScoresBasicTable.constants';
import { isFunction } from 'lodash';
import { motion } from 'framer-motion';

const ScoresBasicTable = ({
  grades,
  activities,
  value: _value,
  labels,
  expandedData,
  expandedColumn: _expandedColumn,
  locale,
  onChange,
  onDataChange,
  onColumnExpand,
  ...props
}) => {
  const { ref: tableRef } = useElementSize(null);
  const [value, setValue] = useState(_value);
  const useNumbers = !grades.some((grade) => grade.letter);
  const [expandedColumn, setExpandedColumn] = useState(_expandedColumn);
  const [overFlowLeft, setOverFlowLeft] = useState(false);
  const [overFlowRight, setOverFlowRight] = useState(false);

  const { classes, cx } = ScoresBasicTableStyles(
    { overFlowLeft, overFlowRight },
    { name: 'ScoresBasicTable' }
  );

  const onColumnExpandHandler = (columnId) => {
    isFunction(onColumnExpand) && onColumnExpand(columnId);
    setExpandedColumn(columnId);
  };

  const onScrollHandler = () => {
    const { scrollWidth, clientWidth, scrollLeft } = tableRef.current;
    if (scrollLeft > 0) setOverFlowLeft(true);
    else setOverFlowLeft(false);
    if (scrollLeft + clientWidth === scrollWidth) setOverFlowRight(false);
    else setOverFlowRight(true);
  };

  const getCompletionPercentage = (activityId, isExpanded) => {
    const activities = isExpanded ? expandedData.value : value;
    const studentsWithActivity = activities.filter((student) => {
      return student.activities.find((activity) => activity?.id === activityId);
    });
    const completionPercentage = Math.trunc(
      (studentsWithActivity.length / activities.length) * 100
    );
    return `${completionPercentage}%`;
  };

  const findGradeLetter = (score) => grades.find(({ number }) => number === score)?.letter;

  const getActivities = (studentActivities, studentId) => {
    const activitiesObject = {};
    activities.forEach(({ id }) => {
      const activity = studentActivities.find((studentActivity) => studentActivity?.id === id);
      activitiesObject[id] = useNumbers ? activity?.score : findGradeLetter(activity?.score);
    });
    const expandedActivities = expandedData?.value.find(
      (student) => student.id === studentId
    )?.activities;
    expandedData?.activities?.forEach(({ id }) => {
      const activity = expandedActivities.find((expandedActivity) => expandedActivity?.id === id);
      activitiesObject[id] = useNumbers ? activity?.score : findGradeLetter(activity?.score);
    });
    return activitiesObject;
  };

  const getAvgScore = (studentActivities) => {
    const sumOfScores = studentActivities.reduce((acc, { score }) => acc + score, 0);
    const averageScore = (sumOfScores / activities.length).toFixed(2);
    return useNumbers ? averageScore : findGradeLetter(Math.round(averageScore));
  };

  const getSeverity = (studentAttendance) => {
    if (studentAttendance === 50) return 'warning';
    if (studentAttendance > 50) return 'success';
    return 'error';
  };

  const getActivitiesPeriod = () => {
    const earliestDeadline = activities.reduce((acc, { deadline }) => {
      return acc < deadline ? acc : deadline;
    }, activities[0].deadline);
    const latestDeadline = activities.reduce((acc, { deadline }) => {
      return acc > deadline ? acc : deadline;
    }, activities[0].deadline);
    return `${new Date(earliestDeadline).toLocaleDateString(locale)} - ${new Date(
      latestDeadline
    ).toLocaleDateString(locale)}`;
  };

  const getRightBodyContent = () => {
    return value.map(({ id, activities: studentActivities }) => {
      const studentAttendance = Math.trunc((studentActivities.length / activities.length) * 100);
      return (
        <Box key={id} className={classes.contentRow}>
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
            isExpandable={activity.expandable}
            isExpanded={expandedColumn === activity.id}
            onColumnExpand={onColumnExpandHandler}
          />
        ),
        Cell: ({ value, row, column }) => {
          return (
            <ScoreCell
              value={value}
              noActivity={labels.noActivity}
              grades={grades}
              row={row}
              column={column}
              setValue={setValue}
              onDataChange={onDataChange}
            />
          );
        },
      });
      if (activity.expandable && expandedColumn === activity.id) {
        columns.push(
          ...expandedData.activities.map((expandedActivity, index) => {
            const position =
              index === 0
                ? 'first'
                : index === expandedData.activities.length - 1
                ? 'last'
                : 'between';
            const completionPercentage = getCompletionPercentage(expandedActivity.id, true);
            return {
              accessor: expandedActivity.id,
              width: 148,
              Header: () => (
                <ActivityHeader
                  {...expandedActivity}
                  completionPercentage={completionPercentage}
                  locale={locale}
                  isExpanded={true}
                  position={position}
                />
              ),
              style:
                position === 'last'
                  ? { boxShadow: 'inset -10px 0px 6px -6px rgba(0,0,0,0.10)' }
                  : { boxShadow: 'none' },
              Cell: ({ value, row, column }) => {
                return (
                  <ScoreCell
                    value={value}
                    noActivity={labels.noActivity}
                    grades={grades}
                    row={row}
                    column={column}
                    isExpanded={true}
                    setValue={setValue}
                    onDataChange={onDataChange}
                    position={position}
                  />
                );
              },
            };
          })
        );
      }
    });
    return columns;
  };

  const getData = () => {
    const data = [];
    value.forEach(({ id, name, surname, image, activities }) => {
      data.push({
        student: { name, surname, image },
        id,
        ...getActivities(activities, id),
      });
    });
    return data;
  };

  const columns = useMemo(
    () => getColumns(),
    [value, activities, labels, locale, useNumbers, expandedData, expandedColumn]
  );
  const data = useMemo(
    () => getData(),
    [value, activities, labels, locale, useNumbers, expandedData, expandedColumn]
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
    },
    useFlexLayout,
    useSticky
  );

  useEffect(() => {
    setValue(_value);
  }, [..._value]);

  useEffect(() => {
    isFunction(onChange) && onChange(value);
  }, [value]);

  useEffect(() => {
    if (!tableRef.current) return;
    const isOverflowing = tableRef.current.scrollWidth > tableRef.current.clientWidth;
    if (isOverflowing && isOverflowing !== overFlowRight) {
      setOverFlowRight(true);
    } else if (isOverflowing !== overFlowRight) {
      setOverFlowRight(false);
    }
  }, [tableRef.current?.scrollWidth]);

  useEffect(() => {
    setExpandedColumn(_expandedColumn);
  }, [_expandedColumn]);

  const spring = {
    type: 'spring',
    stiffness: 100,
    damping: 18,
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.shadowBox} />
      <Box ref={tableRef} {...getTableProps()} className={classes.table} onScroll={onScrollHandler}>
        <Box style={{ flex: 1 }}>
          <Box className={classes.tableHeader}>
            {headerGroups.map((headerGroup) => (
              <Box {...headerGroup.getHeaderGroupProps()} className={classes.tableHeaderRow}>
                {headerGroup.headers.map((column) => (
                  <motion.div
                    layout
                    transition={spring}
                    {...column.getHeaderProps([{ style: column.style }])}
                    className={classes.tableHeaderCell}
                  >
                    {column.render('Header')}
                  </motion.div>
                ))}
              </Box>
            ))}
          </Box>
          <Box {...getTableBodyProps()} className={classes.tableBody}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <Box {...row.getRowProps()} className={classes.bodyRow}>
                  {row.cells.map((cell) => (
                    <motion.div
                      layout
                      transition={spring}
                      {...cell.getCellProps([
                        { style: { ...cell.column.style, background: 'white' } },
                      ])}
                      className={classes.bodyCell}
                    >
                      {cell.render('Cell')}
                    </motion.div>
                  ))}
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
