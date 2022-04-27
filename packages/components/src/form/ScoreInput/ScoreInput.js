import React, { useState, useEffect } from 'react';
import { Box } from '../../layout';
import { InputWrapper, TextInput, NumberInput } from '../';
import { Text } from '../../typography';
import { ScoreInputStyles } from './ScoreInput.styles';
import { SCORE_INPUT_DEFAULT_PROPS, SCORE_INPUT_PROP_TYPES } from './ScoreInput.constants';
import { isFunction } from 'lodash';
import { ChevLeftIcon, ChevRightIcon } from '@bubbles-ui/icons/outline';
import { useElementSize } from '@mantine/hooks';

const ScoreInput = ({ grades, acceptCustom, value, onChange, error, ...props }) => {
  const [grade, setGrade] = useState(value);
  const [inputType, setInputType] = useState(acceptCustom);
  const [inputMaxWidth, setInputMaxWidth] = useState(10000);
  const { ref: parentRef, width: parentWidth } = useElementSize();
  const { ref: inputRef, width: inputWidth } = useElementSize();
  const maxGrades = Math.floor(inputWidth / 40);
  const hiddenGrades = grades.length - (maxGrades - 1);
  const isOverflowing = grades.length >= maxGrades;

  if (inputWidth !== 0 && isOverflowing) {
    // console.log(parentWidth > (maxGrades + 1) * 40 + 2);
    if (parentWidth > (maxGrades + 1) * 40 + 2) {
      if (inputMaxWidth != (maxGrades + 1) * 40 + 2) setInputMaxWidth((maxGrades + 1) * 40 + 2);
    } else {
      if (inputMaxWidth != maxGrades * 40 + 2) setInputMaxWidth(maxGrades * 40 + 2);
    }
  }

  const onChangeHandler = () => {
    isFunction(onChange) && onChange(value);
  };

  const renderCustomInput = () => {
    if (inputType === 'text') {
      return <TextInput contentClassName={classes.heightStyles} />;
    }
    if (inputType === 'number') {
      return <NumberInput contentClassName={classes.heightStyles} hideControls />;
    }
  };

  const renderGrades = () => {
    const sortedGrades = grades.sort((a, b) => b?.score - a?.score);
    const gradesToReturn = [];
    sortedGrades.forEach((grade, index) => {
      if (index < maxGrades - 1) {
        gradesToReturn.push(
          <Box key={grade.score} className={classes.scoreBox} onClick={() => setGrade(grade)}>
            <Text role="productive" className={classes.grade}>
              {grade.letter || grade.score}
            </Text>
          </Box>
        );
      }
      if (index === maxGrades - 1) {
        gradesToReturn.push(
          <Box key={`${index}control`} className={classes.control}>
            <ChevRightIcon height={32} width={32} />
          </Box>
        );
        gradesToReturn.push(
          <Box
            key={grade.score}
            className={cx(classes.scoreBox, classes.hiddenScoreBox)}
            onClick={() => setGrade(grade)}
          >
            <Text role="productive" className={classes.grade}>
              {grade.letter || grade.score}
            </Text>
          </Box>
        );
      }
      if (index > maxGrades - 1) {
        gradesToReturn.push(
          <Box
            key={grade.score}
            className={cx(classes.scoreBox, classes.hiddenScoreBox)}
            onClick={() => setGrade(grade)}
          >
            <Text role="productive" className={classes.grade}>
              {grade.letter || grade.score}
            </Text>
          </Box>
        );
      }
    });
    return gradesToReturn;
  };

  useEffect(() => {
    if (!value?.score) {
      setGrade({});
      return;
    }
    if (acceptCustom) {
      if (inputType !== acceptCustom) setInputType(acceptCustom);
    } else {
      if (!grades.find((grade) => grade?.score === value?.score)) {
        if (value.score) setInputType(value.letter ? 'text' : 'number');
      } else {
        setInputType('');
      }
    }
    if (value.score !== grade?.score || value.letter !== grade?.letter || !value.score)
      setGrade(value);
  }, [value, acceptCustom]);

  const { classes, cx } = ScoreInputStyles({ error }, { name: 'ScoreInput' });
  return (
    <Box className={classes.root}>
      <InputWrapper {...props} error={error}>
        <Box className={classes.inputWrapper}>
          {inputType && <Box className={classes.customInput}>{renderCustomInput()}</Box>}
          <Box ref={parentRef} style={{ width: '100%' }}>
            <Box ref={inputRef} className={classes.input} style={{ maxWidth: inputMaxWidth }}>
              {/* <Box className={classes.control}>
              <ChevLeftIcon height={32} width={32} />
            </Box> */}
              {renderGrades()}
            </Box>
          </Box>
        </Box>
      </InputWrapper>
      {/* <Box>Max grades: {maxGrades} </Box>
      <Box>Hidden grades: {hiddenGrades} </Box>
      <Box>Overflow: {isOverflowing ? 'isOverflowing' : 'isNotOverflowing'}</Box>
      <Box>InputWidth: {inputWidth}</Box> */}
    </Box>
  );
};

ScoreInput.defaultProps = SCORE_INPUT_DEFAULT_PROPS;
ScoreInput.propTypes = SCORE_INPUT_PROP_TYPES;

export { ScoreInput };
