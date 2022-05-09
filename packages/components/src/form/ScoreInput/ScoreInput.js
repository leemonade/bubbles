import React, { useState, useEffect, useMemo } from 'react';
import { Box } from '../../layout';
import { Text } from '../../typography';
import { isFunction } from 'lodash';
import { useElementSize } from '@mantine/hooks';
import { ScoreInputStyles } from './ScoreInput.styles';
import { ChevLeftIcon, ChevRightIcon } from '@bubbles-ui/icons/outline';
import { InputWrapper, TextInput, NumberInput, Select } from '../';
import { SCORE_INPUT_DEFAULT_PROPS, SCORE_INPUT_PROP_TYPES } from './ScoreInput.constants';

const ScoreInput = ({
  grades,
  tags,
  acceptCustom,
  value,
  onChange,
  placeholder,
  error,
  showLetters,
  ...props
}) => {
  const [grade, setGrade] = useState(value);
  const [inputMaxWidth, setInputMaxWidth] = useState(10000);
  const [displacedGrades, setDisplacedGrades] = useState(0);
  const [selectValue, setSelectValue] = useState('');
  const { ref: parentRef, width: parentWidth } = useElementSize();
  const { ref: inputRef, width: inputWidth } = useElementSize();
  const maxGrades = Math.floor((inputWidth + 2) / 40);
  const hiddenGrades = useMemo(
    () => grades.length - (maxGrades - 1) - displacedGrades,
    [maxGrades, displacedGrades]
  );
  const isOverflowing = grades.length > maxGrades - 1;
  const selectedGradeIndex = grades.findIndex(({ score }) => score === grade.score);
  const gradeWidth = inputRef?.current?.lastChild?.getBoundingClientRect().width;

  if (!acceptCustom && value?.score && !grades.find(({ score }) => score === value?.score)) {
    acceptCustom = value?.letter ? 'text' : 'number';
  }

  const onChangeHandler = (grade) => {
    setGrade(grade);
    isFunction(onChange) && onChange(grade);
  };

  const renderCustomInput = () => {
    if (acceptCustom === 'text') {
      return (
        <TextInput
          contentClassName={classes.heightStyles}
          value={grade?.letter}
          onChange={(value) =>
            onChangeHandler({
              score: grades.find(({ letter }) => letter?.toLowerCase() === value.toLowerCase())
                ?.score,
              letter: value.toUpperCase(),
            })
          }
        />
      );
    }
    if (acceptCustom === 'number') {
      return (
        <NumberInput
          contentClassName={classes.heightStyles}
          hideControls
          value={grade?.score}
          onChange={(value) =>
            onChangeHandler({
              score: value,
              letter: grades.find(({ score }) => score === value)?.letter || selectValue,
            })
          }
        />
      );
    }
  };

  const handleInputResize = () => {
    if (inputWidth === 0) return;
    const widthWithSpace = (maxGrades + 1) * 40 + 2;
    const widthWithoutSpace = maxGrades * 40 + 2;

    if (isOverflowing) {
      if (parentWidth >= widthWithSpace) {
        if (inputMaxWidth !== widthWithSpace) setInputMaxWidth(widthWithSpace);
        if (hiddenGrades <= 0) setDisplacedGrades(displacedGrades + hiddenGrades - 1);
      } else {
        if (inputMaxWidth !== widthWithoutSpace) setInputMaxWidth(widthWithoutSpace);
      }
    } else {
      if (inputMaxWidth !== 10000) setInputMaxWidth(10000);
    }
  };

  const handleDisplaceToLeftGrades = () => {
    if (hiddenGrades < maxGrades) {
      setDisplacedGrades(displacedGrades + hiddenGrades);
    } else {
      setDisplacedGrades(displacedGrades + maxGrades - (displacedGrades === 0 ? 1 : 2));
    }
  };

  const handleDisplaceToRight = () => {
    if (displacedGrades < maxGrades) {
      setDisplacedGrades(0);
    } else {
      setDisplacedGrades((displacedGrades) => displacedGrades - maxGrades + 2);
    }
  };

  const renderGrades = () => {
    const sortedGrades = grades.sort((a, b) => b?.score - a?.score);
    const gradesToReturn = sortedGrades.map((arrayGrade) => {
      const isSelected = arrayGrade.score === grade.score;
      return (
        <Box
          key={arrayGrade.score}
          className={classes.scoreBox}
          onClick={() => onChangeHandler(arrayGrade)}
        >
          <Text
            role="productive"
            color={isSelected ? 'primary' : undefined}
            className={classes.grade}
          >
            {showLetters ? arrayGrade.letter || arrayGrade.score : arrayGrade.score}
          </Text>
        </Box>
      );
    });
    if (displacedGrades !== 0) {
      gradesToReturn.splice(
        displacedGrades,
        0,
        <Box key={'leftcontrol'} className={classes.control} onClick={handleDisplaceToRight}>
          <ChevLeftIcon height={32} width={32} />
        </Box>
      );
    }
    if (hiddenGrades > 0) {
      gradesToReturn.splice(
        maxGrades - 1 + displacedGrades,
        0,
        <Box key={'rightcontrol'} className={classes.control} onClick={handleDisplaceToLeftGrades}>
          <ChevRightIcon height={32} width={32} />
        </Box>
      );
    }
    return gradesToReturn;
  };

  useEffect(() => {
    handleInputResize();
  }, [inputWidth, parentWidth, inputMaxWidth]);

  const { classes, cx } = ScoreInputStyles(
    { error, gradeWidth, selectedGradeIndex, displacedGrades, gradesLength: grades.length },
    { name: 'ScoreInput' }
  );
  return (
    <Box className={classes.root}>
      <InputWrapper {...props} error={error}>
        <Box className={classes.inputWrapper}>
          {acceptCustom && (
            <Box className={classes.customInput}>
              {renderCustomInput()}
              {acceptCustom === 'number' && tags.length > 0 && (
                <Box className={classes.select}>
                  <Select
                    data={tags}
                    placeholder={placeholder}
                    value={selectValue}
                    onChange={(value) => {
                      onChangeHandler({ score: grade?.score, letter: value });
                      setSelectValue(value);
                    }}
                  />
                </Box>
              )}
            </Box>
          )}
          <Box ref={parentRef} style={{ width: acceptCustom ? 'calc(100% - 128px)' : '100%' }}>
            <Box className={classes.parentInput} style={{ maxWidth: inputMaxWidth }}>
              <Box ref={inputRef} className={classes.input}>
                {selectedGradeIndex >= 0 && <Box className={classes.selectedGradeBox} />}
                {renderGrades()}
              </Box>
            </Box>
          </Box>
        </Box>
      </InputWrapper>
    </Box>
  );
};

ScoreInput.defaultProps = SCORE_INPUT_DEFAULT_PROPS;
ScoreInput.propTypes = SCORE_INPUT_PROP_TYPES;

export { ScoreInput };