import React, { useEffect, useState } from 'react';
import { Box, Text, Select, useClickOutside } from '@bubbles-ui/components';
import { ScoreCellStyles } from './ScoreCell.styles';
import { SCORES_CELL_DEFAULT_PROPS, SCORES_CELL_PROP_TYPES } from './ScoreCell.constants';
import { isFunction } from 'lodash';

const ScoreCell = ({ value, noActivity, grades, row, column, setValue, onDataChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const isGrade = value !== undefined;
  const useNumbers = !grades.some((grade) => grade.letter);
  const selectRef = useClickOutside(() => setIsEditing(false));

  const onClickHandler = () => {
    if (!isEditing) setIsEditing(true);
  };

  const onChangeHandler = (score) => {
    const rowId = row.original.id;
    const columnId = column.id;

    setValue((oldValue) => {
      const newValue = oldValue.map((student) => {
        if (student.id !== rowId) return student;
        const newStudentActivities = student.activities.map((activity) => {
          if (activity.id !== columnId) return activity;
          activity.score = useNumbers
            ? parseInt(score)
            : grades.find(({ letter }) => letter === score)?.number;
          return activity;
        });
        return { ...student, activities: newStudentActivities };
      });
      return newValue;
    });
    isFunction(onDataChange) && onDataChange({ rowId, columnId, value: score });
  };

  const renderInputCell = () => {
    if (!isGrade)
      return (
        <Text color="primary" role="productive">
          {noActivity}
        </Text>
      );

    const data = grades.map(({ letter, number }) => letter || number.toString());

    return (
      <Box className={classes.inputContainer} onClick={onClickHandler}>
        {!isEditing ? (
          <Text color="primary" role="productive">
            {value}
          </Text>
        ) : (
          <Select
            value={value}
            data={data}
            onChange={onChangeHandler}
            onDropdownClose={() => setIsEditing(false)}
            ref={selectRef}
          />
        )}
      </Box>
    );
  };

  useEffect(() => {
    if (selectRef.current) selectRef.current.click();
  }, [isEditing]);

  const { classes, cx } = ScoreCellStyles({ isEditing }, { name: 'ScoreCell' });
  return <Box className={classes.root}>{renderInputCell()}</Box>;
};

ScoreCell.defaultProps = SCORES_CELL_DEFAULT_PROPS;
ScoreCell.propTypes = SCORES_CELL_PROP_TYPES;

export { ScoreCell };
