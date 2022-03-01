import React, { useState, useRef, useEffect } from 'react';
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
import isEqual from 'lodash/isEqual';

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
  const [periodsInputs, setPeriodsInputs] = useState([]);
  const [nameInput, setNameInput] = useState({
    value: '',
    error: '',
  });
  const [rangeInput, setRangeInput] = useState({
    value: '',
    error: '',
  });
  const isMounted = useRef(false);

  const validateInputs = (name, range, periodInputs) => {
    let isValid = true;
    if (!periodInputs) {
      if (!name.value) {
        setNameInput({
          value: name.value,
          error: errorMessages.periodName,
        });
        isValid = false;
      }
      if (!range.value[0] || !range.value[1]) {
        setRangeInput({
          value: range.value,
          error: errorMessages.periodRange,
        });
        isValid = false;
      }
    } else {
      if (!name) {
        periodInputs.nameError = errorMessages.periodName;
        isValid = false;
      }
      if (!range[0] || !range[1]) {
        periodInputs.rangeError = errorMessages.periodRange;
        isValid = false;
      }
      setPeriodsInputs([...periodsInputs]);
    }

    return isValid;
  };

  const onChangeHandler = () => {
    isFunction(onChange) && onChange(periods);
  };

  const addPeriodHandler = (name, range, period, periodInputs) => {
    if (!validateInputs(name, range, periodInputs)) return;
    const newPeriod = {
      name: period ? name : name.value,
      start: period ? range[0] : range.value[0],
      end: period ? range[1] : range.value[1],
      periods: [],
    };
    setNameInput({ value: '', error: '' });
    setRangeInput({ value: [null, null], error: '' });
    if (period) {
      period.periods.push(newPeriod);
      periodInputs.name = '';
      periodInputs.range = [null, null];
      periodInputs.nameError = '';
      periodInputs.rangeError = '';
      setPeriodsInputs([...periodsInputs]);
      setPeriods([...periods]);
    } else {
      setPeriods([...periods, newPeriod]);
    }
  };

  const onChangeNameHandler = (value, period) => {
    const newPeriod = period;
    newPeriod.name = value;
    setPeriods([...periods]);
  };

  const onChangeRangeHandler = (value, period) => {
    const newPeriod = period;
    newPeriod.start = value[0];
    newPeriod.end = value[1];
    setPeriods([...periods]);
  };

  const generateInputStates = (periods) => {
    const newPeriodsInputs = [];
    periods.forEach((period, index) => {
      newPeriodsInputs.push({
        name: '',
        range: [null, null],
        nameError: '',
        rangeError: '',
        periodInputs: generateInputStates(period.periods),
      });
    });
    return newPeriodsInputs;
  };

  useEffect(() => {
    const newPeriodsInputs = generateInputStates(periods);
    !isEqual(newPeriodsInputs, periodsInputs) && setPeriodsInputs(newPeriodsInputs);
    if (!isMounted.current) return;
    onChangeHandler();
  }, [periods]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  const renderPeriod = (key, period, periodInputs) => {
    return (
      <Paper key={key} className={classes.periodWrapper}>
        <Stack spacing={2} alignItems="start" fullWidth className={classes.inputRow}>
          <Box className={classes.inputWrapper}>
            <TextInput
              label={labels.periodName}
              placeholder={placeholders.periodName}
              disabled={readOnly}
              required
              value={period.name}
              onChange={(value) => onChangeNameHandler(value, period)}
            />
          </Box>
          <Box className={classes.inputWrapper}>
            <DatePicker
              label={labels.periodRange}
              placeholder={labels.periodRange}
              useRange={true}
              disabled={readOnly}
              required
              value={[period.start, period.end]}
              onChange={(value) => onChangeRangeHandler(value, period)}
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
              value={periodInputs?.name}
              error={periodInputs?.nameError}
              onChange={(value) => {
                const newPeriodInputs = periodInputs;
                newPeriodInputs.name = value;
                newPeriodInputs.nameError = '';
                setPeriodsInputs([...periodsInputs]);
              }}
            />
          </Box>
          <Box className={classes.inputWrapper}>
            <DatePicker
              placeholder={labels.periodRange}
              useRange={true}
              disabled={readOnly}
              value={periodInputs?.range}
              error={periodInputs?.rangeError}
              onChange={(value) => {
                const newPeriodInputs = periodInputs;
                newPeriodInputs.range = value;
                newPeriodInputs.rangeError = '';
                setPeriodsInputs([...periodsInputs]);
              }}
              minDate={period.start}
              maxDate={period.end}
            />
          </Box>
          {!readOnly && (
            <Button
              variant="light"
              leftIcon={<AddCircleIcon height={16} width={16} />}
              onClick={() => {
                addPeriodHandler(periodInputs?.name, periodInputs?.range, period, periodInputs);
              }}
            >
              {labels.addSubPeriod}
            </Button>
          )}
        </Stack>
        {period.periods.length > 0 && <Divider />}
        {period.periods.map((subPeriod, subIndex) => {
          return renderPeriod(
            `${key}-${subIndex}`,
            subPeriod,
            periodInputs?.periodInputs[subIndex]
          );
        })}
      </Paper>
    );
  };

  const { classes, cx } = EvaluationPeriodsFormStyles({}, { name: 'EvaluationPeriodsForm' });
  return (
    <Box className={classes.root}>
      <Stack spacing={2} alignItems="start" fullWidth style={{ marginBottom: 16 }}>
        <Box className={classes.inputWrapper}>
          <TextInput
            label={labels.periodName}
            placeholder={placeholders.periodName}
            disabled={readOnly}
            required
            value={nameInput.value}
            onChange={(value) => setNameInput({ value, error: '' })}
            error={nameInput.error}
          />
        </Box>
        <Box className={classes.inputWrapper}>
          <DatePicker
            label={labels.periodRange}
            placeholder={labels.periodRange}
            useRange={true}
            disabled={readOnly}
            required
            value={rangeInput.value}
            onChange={(value) => setRangeInput({ value, error: '' })}
            error={rangeInput.error}
          />
        </Box>
        {!readOnly && (
          <Button
            variant="light"
            leftIcon={<AddCircleIcon height={16} width={16} />}
            style={{ marginTop: 22 }}
            onClick={() => addPeriodHandler(nameInput, rangeInput)}
          >
            {labels.addPeriod}
          </Button>
        )}
      </Stack>
      <Stack direction="column" spacing={3} fullWidth>
        {periods.map((period, index) => {
          return renderPeriod(index, period, periodsInputs[index]);
        })}
      </Stack>
    </Box>
  );
};

EvaluationPeriodsForm.defaultProps = EVALUATION_PERIODS_FORM_DEFAULT_PROPS;
EvaluationPeriodsForm.propTypes = EVALUATION_PERIODS_FORM_PROP_TYPES;

export { EvaluationPeriodsForm };
