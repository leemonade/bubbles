import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Text,
  TextInput,
  DatePicker,
  Stack,
  Paper,
  Button,
  Divider,
} from '@bubbles-ui/components';
import { AddCircleIcon } from '@bubbles-ui/icons/outline';
import { EvaluationPeriodsFormStyles } from './EvaluationPeriodsForm.styles';
import isFunction from 'lodash/isFunction';
import { useEffect } from 'react';
import { isEqual } from 'lodash';

const EVALUATION_PERIODS_FORM_PERIOD = {
  name: PropTypes.string,
  start: PropTypes.instanceOf(Date),
  end: PropTypes.instanceOf(Date),
};

export const EVALUATION_PERIODS_FORM_DEFAULT_PROPS = {
  labels: {
    periodName: '',
    periodRange: '',
    addPeriod: '',
    subPeriodTitle: '',
    addSubPeriod: '',
  },
  placeholders: {
    periodName: '',
    periodRange: '',
  },
  errorMessages: {
    periodName: '',
    periodRange: '',
  },
  value: [],
  readOnly: false,
};
export const EVALUATION_PERIODS_FORM_PROP_TYPES = {
  labels: PropTypes.shape({
    periodName: PropTypes.string,
    periodRange: PropTypes.string,
    addPeriod: PropTypes.string,
    subPeriodTitle: PropTypes.string,
    addSubPeriod: PropTypes.string,
  }),
  placeholders: PropTypes.shape({
    periodName: PropTypes.string,
    periodRange: PropTypes.string,
  }),
  errorMessages: PropTypes.shape({
    periodName: PropTypes.string,
    periodRange: PropTypes.string,
  }),
  value: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      start: PropTypes.instanceOf(Date),
      end: PropTypes.instanceOf(Date),
      periods: PropTypes.arrayOf(PropTypes.shape(EVALUATION_PERIODS_FORM_PERIOD)),
    })
  ),
  readOnly: PropTypes.bool,
  onChange: PropTypes.func,
};

const EvaluationPeriodsForm = ({
  labels,
  placeholders,
  errorMessages,
  value,
  readOnly,
  onChange,
  ...props
}) => {
  const [periods, setPeriods] = useState(value);
  const [periodNameInput, setPeriodNameInput] = useState('');
  const [periodRangeInput, setPeriodRangeInput] = useState([null, null]);
  const [subPeriodNameInputs, setSubPeriodNameInputs] = useState([]);
  const [subPeriodRangeInputs, setSubPeriodRangeInputs] = useState([[null, null]]);
  const [nameError, setNameError] = useState({ index: 0, error: '' });
  const [rangeError, setRangeError] = useState({ index: 0, error: '' });

  const validateInputs = (periodName, periodRange, index) => {
    let isValid = true;
    if (!periodName) {
      setNameError({ index: index, error: errorMessages.periodName });
      isValid = false;
    } else {
      setNameError({ index: index, error: '' });
    }
    if (!periodRange[0] || !periodRange[1]) {
      setRangeError({ index: index, error: errorMessages.periodRange });
      isValid = false;
    } else {
      setRangeError({ index: index, error: '' });
    }
    return isValid;
  };

  const onChangeHandler = (value) => {
    isFunction(onChange) && onChange(value);
  };

  const addPeriodHandler = () => {
    if (!validateInputs(periodNameInput, periodRangeInput, -1)) return;
    const newPeriod = {
      name: periodNameInput,
      start: periodRangeInput[0],
      end: periodRangeInput[1],
      periods: [],
    };
    setPeriodNameInput('');
    setPeriodRangeInput([null, null]);
    const newPeriods = [...periods, newPeriod];
    setPeriods(newPeriods);
    onChangeHandler(newPeriods);
  };

  const onPeriodNameEditHandler = (value, index) => {
    const newPeriods = [...periods];
    newPeriods[index].name = value;
    setPeriods(newPeriods);
    onChangeHandler(newPeriods);
  };

  const onPeriodRangeEditHandler = (value, index) => {
    const newPeriods = [...periods];
    newPeriods[index].start = value[0];
    newPeriods[index].end = value[1];
    setPeriods(newPeriods);
    onChangeHandler(newPeriods);
  };

  const addSubPeriodHandler = (periodName, periodRange, period, index) => {
    if (!validateInputs(periodName, periodRange, index)) return;
    const newPeriods = [...periods];
    newPeriods[index].periods.push({
      name: periodName,
      start: periodRange[0],
      end: periodRange[1],
    });
    const newSubPeriodNameInputs = [...subPeriodNameInputs];
    const newSubPeriodRangeInputs = [...subPeriodRangeInputs];
    newSubPeriodNameInputs[index] = '';
    newSubPeriodRangeInputs[index] = [null, null];
    setSubPeriodNameInputs(newSubPeriodNameInputs);
    setSubPeriodRangeInputs(newSubPeriodRangeInputs);
    setPeriods(newPeriods);
    onChangeHandler(newPeriods);
  };

  const onSubPeriodNameEditHandler = (value, index, subIndex) => {
    const newPeriods = [...periods];
    newPeriods[index].periods[subIndex].name = value;
    setPeriods(newPeriods);
    onChangeHandler(newPeriods);
  };

  const onSubPeriodRangeEditHandler = (value, index, subIndex) => {
    const newPeriods = [...periods];
    newPeriods[index].periods[subIndex].start = value[0];
    newPeriods[index].periods[subIndex].end = value[1];
    setPeriods(newPeriods);
    onChangeHandler(newPeriods);
  };

  useEffect(() => {
    const newSubPeriodNameInputs = [];
    const newSubPeriodRangeInputs = [];
    periods.forEach((period, index) => {
      subPeriodNameInputs[index] === undefined
        ? newSubPeriodNameInputs.push('')
        : newSubPeriodNameInputs.push(subPeriodNameInputs[index]);
      subPeriodRangeInputs[index] === undefined
        ? newSubPeriodRangeInputs.push([null, null])
        : newSubPeriodRangeInputs.push(subPeriodRangeInputs[index]);
    });
    if (!isEqual(newSubPeriodNameInputs, subPeriodNameInputs)) {
      setSubPeriodNameInputs(newSubPeriodNameInputs);
    }
    if (!isEqual(newSubPeriodRangeInputs, subPeriodRangeInputs)) {
      setSubPeriodRangeInputs(newSubPeriodRangeInputs);
    }
  }, [periods]);

  const { classes, cx } = EvaluationPeriodsFormStyles({}, { name: 'EvaluationPeriodsForm' });
  return (
    <Box className={classes.root}>
      <Stack spacing={2} alignItems="start" fullWidth style={{ marginBottom: 16 }}>
        <Box className={classes.inputWrapper}>
          <TextInput
            label={labels.periodName}
            placeholder={placeholders.periodName}
            value={periodNameInput}
            onChange={setPeriodNameInput}
            error={nameError.index === -1 ? nameError.error : ''}
            disabled={readOnly}
            required
          />
        </Box>
        <Box className={classes.inputWrapper}>
          <DatePicker
            label={labels.periodRange}
            placeholder={labels.periodRange}
            value={periodRangeInput}
            useRange={true}
            onChange={setPeriodRangeInput}
            error={rangeError.index === -1 ? rangeError.error : ''}
            disabled={readOnly}
            required
          />
        </Box>
        {!readOnly && (
          <Button
            variant="light"
            leftIcon={<AddCircleIcon height={16} width={16} />}
            style={{ marginTop: 22 }}
            onClick={addPeriodHandler}
          >
            {labels.addPeriod}
          </Button>
        )}
      </Stack>
      {periods.length > 0 && (
        <Stack direction="column" spacing={3} fullWidth>
          {periods.map((period, index) => (
            <Paper key={`$period ${index}`} className={classes.periodWrapper} skipFlex>
              <Stack spacing={2} alignItems="start" fullWidth className={classes.inputRow}>
                <Box className={classes.inputWrapper}>
                  <TextInput
                    label={labels.periodName}
                    value={period.name}
                    onChange={(value) => onPeriodNameEditHandler(value, index)}
                    placeholder={placeholders.periodName}
                    disabled={readOnly}
                  />
                </Box>
                <Box className={classes.inputWrapper}>
                  <DatePicker
                    label={labels.periodRange}
                    placeholder={labels.periodRange}
                    value={[period.start, period.end]}
                    onChange={(value) => {
                      onPeriodRangeEditHandler(value, index);
                    }}
                    useRange={true}
                    disabled={readOnly}
                  />
                </Box>
              </Stack>
              <Text size="lg" className={classes.subPeriodTitle}>
                {labels.subPeriodTitle}
              </Text>
              <Stack spacing={2} alignItems="start" fullWidth style={{ marginBottom: 16 }}>
                <Box className={classes.inputWrapper}>
                  <TextInput
                    placeholder={placeholders.periodName}
                    disabled={readOnly}
                    value={subPeriodNameInputs[index]}
                    onChange={(value) => {
                      const newSubPeriodNameInputs = [...subPeriodNameInputs];
                      newSubPeriodNameInputs[index] = value;
                      setSubPeriodNameInputs(newSubPeriodNameInputs);
                    }}
                    error={nameError.index === index ? nameError.error : ''}
                  />
                </Box>
                <Box className={classes.inputWrapper}>
                  <DatePicker
                    placeholder={labels.periodRange}
                    useRange={true}
                    disabled={readOnly}
                    value={subPeriodRangeInputs[index]}
                    onChange={(value) => {
                      const newSubPeriodRangeInputs = [...subPeriodRangeInputs];
                      newSubPeriodRangeInputs[index] = value;
                      setSubPeriodRangeInputs(newSubPeriodRangeInputs);
                    }}
                    minDate={period.start}
                    maxDate={period.end}
                    error={rangeError.index === index ? rangeError.error : ''}
                  />
                </Box>
                {!readOnly && (
                  <Button
                    variant="light"
                    leftIcon={<AddCircleIcon height={16} width={16} />}
                    onClick={() =>
                      addSubPeriodHandler(
                        subPeriodNameInputs[index],
                        subPeriodRangeInputs[index],
                        period,
                        index
                      )
                    }
                  >
                    {labels.addSubPeriod}
                  </Button>
                )}
              </Stack>
              {period.periods.length > 0 && <Divider />}
              {period.periods.length > 0 && (
                <Stack spacing={2} direction="column" fullWidth style={{ marginTop: 20 }}>
                  {period.periods.map((subPeriod, subIndex) => (
                    <Stack key={`subperiod ${subIndex}`} spacing={2} alignItems="start" fullWidth>
                      <Box className={classes.inputWrapper}>
                        <TextInput
                          placeholder={placeholders.periodName}
                          value={subPeriod.name}
                          onChange={(value) => onSubPeriodNameEditHandler(value, index, subIndex)}
                          disabled={readOnly}
                        />
                      </Box>
                      <Box className={classes.inputWrapper}>
                        <DatePicker
                          placeholder={labels.periodRange}
                          useRange={true}
                          value={[subPeriod.start, subPeriod.end]}
                          onChange={(value) => onSubPeriodRangeEditHandler(value, index, subIndex)}
                          disabled={readOnly}
                          minDate={period.start}
                          maxDate={period.end}
                        />
                      </Box>
                    </Stack>
                  ))}
                </Stack>
              )}
            </Paper>
          ))}
        </Stack>
      )}
    </Box>
  );
};

EvaluationPeriodsForm.defaultProps = EVALUATION_PERIODS_FORM_DEFAULT_PROPS;
EvaluationPeriodsForm.propTypes = EVALUATION_PERIODS_FORM_PROP_TYPES;

export { EvaluationPeriodsForm };
