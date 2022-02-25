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

// const validateDates = (start, end) => {
//   if (start && end) {
//     return start <= end;
//   }
//   return false;
// };

const EvaluationPeriodsForm = ({
  labels,
  placeholders,
  errorMessages,
  value,
  readOnly,
  onChange,
  ...props
}) => {
  console.log('render');
  const [periods, setPeriods] = useState(value);
  const [periodName, setPeriodName] = useState('');
  const [periodRange, setPeriodRange] = useState([null, null]);
  const [nameError, setNameError] = useState('');
  const [rangeError, setRangeError] = useState('');

  const [nosequeu, setNosequeu] = useState('');

  const validateInputs = (periodName, periodRange) => {
    let isValid = true;
    if (!periodName) {
      setNameError(errorMessages.periodName);
      isValid = false;
    } else {
      setNameError('');
    }
    if (!periodRange[0] || !periodRange[1]) {
      setRangeError(errorMessages.periodRange);
      isValid = false;
    } else {
      setRangeError('');
    }
    return isValid;
  };

  const onChangeHandler = (value) => {
    isFunction(onChange) && onChange(value);
  };

  const addPeriodHandler = () => {
    if (!validateInputs(periodName, periodRange)) return;

    const newPeriod = {
      name: periodName,
      start: periodRange[0],
      end: periodRange[1],
      periods: [],
    };
    setPeriodName('');
    setPeriodRange([null, null]);
    const newPeriods = [...periods, newPeriod];
    setPeriods(newPeriods);
    onChangeHandler(newPeriods);
  };

  const addSubPeriodHandler = () => {};

  const onPeriodNameChangeHandler = (e) => {
    setPeriodName(e);
  };

  const onPeriodRangeChangeHandler = (range) => {
    setPeriodRange(range);
  };

  const onPeriodNameEditHandler = (value, index) => {
    const newPeriods = [...periods];
    newPeriods[index].name = value;
    setPeriods(newPeriods);
    onChangeHandler(newPeriods);
  };

  const { classes, cx } = EvaluationPeriodsFormStyles({}, { name: 'EvaluationPeriodsForm' });
  return (
    <Box className={classes.root}>
      <Stack spacing={2} alignItems="start" fullWidth style={{ marginBottom: 16 }}>
        <Box className={classes.inputWrapper}>
          <TextInput
            label={labels.periodName}
            placeholder={placeholders.periodName}
            value={periodName}
            onChange={onPeriodNameChangeHandler}
            error={nameError}
            disabled={readOnly}
            required
          />
        </Box>
        <Box className={classes.inputWrapper}>
          <DatePicker
            label={labels.periodRange}
            placeholder={labels.periodRange}
            value={periodRange}
            useRange={true}
            onChange={onPeriodRangeChangeHandler}
            error={rangeError}
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
            <Paper key={`${period.name} ${index}`} className={classes.periodWrapper} skipFlex>
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
                    useRange={true}
                    minDate={period.start}
                    maxDate={period.end}
                    disabled={readOnly}
                  />
                </Box>
              </Stack>
              <Text size="lg" className={classes.subPeriodTitle}>
                {labels.subPeriodTitle}
              </Text>
              <Stack spacing={2} alignItems="start" fullWidth style={{ marginBottom: 16 }}>
                <Box className={classes.inputWrapper}>
                  <TextInput placeholder={placeholders.periodName} disabled={readOnly} />
                </Box>
                <Box className={classes.inputWrapper}>
                  <DatePicker
                    placeholder={labels.periodRange}
                    useRange={true}
                    minDate={period.start}
                    maxDate={period.end}
                    disabled={readOnly}
                  />
                </Box>
                {!readOnly && (
                  <Button
                    variant="light"
                    leftIcon={<AddCircleIcon height={16} width={16} />}
                    onClick={addSubPeriodHandler}
                  >
                    {labels.addSubPeriod}
                  </Button>
                )}
              </Stack>
              {period.periods.length > 0 && (
                <>
                  <Divider />
                  <Stack spacing={2} direction="column" fullWidth style={{ marginTop: 20 }}>
                    {period.periods.map((period, index) => (
                      <Stack
                        key={`${period.name} ${index}`}
                        spacing={2}
                        alignItems="start"
                        fullWidth
                      >
                        <Box className={classes.inputWrapper}>
                          <TextInput
                            value={period.name}
                            placeholder={placeholders.periodName}
                            disabled={readOnly}
                          />
                        </Box>
                        <Box className={classes.inputWrapper}>
                          <DatePicker
                            placeholder={labels.periodRange}
                            useRange={true}
                            minDate={period.start}
                            maxDate={period.end}
                            disabled={readOnly}
                          />
                        </Box>
                      </Stack>
                    ))}
                  </Stack>
                </>
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
