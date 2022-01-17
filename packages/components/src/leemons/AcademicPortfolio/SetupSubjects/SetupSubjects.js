import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm, Controller } from 'react-hook-form';
import { ContextContainer } from '../../../layout';
import { TextInput, Checkbox, NumberInput, Button, Select, TableInput } from '../../../form/';
import { ChevRightIcon, ChevLeftIcon } from '@bubbles-ui/icons/outline';
import { Text } from '../../../typography';
import { Box } from '@mantine/core';
import { isFunction } from 'lodash';
import { SetupSubjectsStyles } from './SetupSubjects.styles';

export const SETUP_SUBJECTS_DEFAULT_PROPS = {};
export const SETUP_SUBJECTS_PROP_TYPES = {
  labels: PropTypes.shape({
    title: PropTypes.string,
    standardDuration: PropTypes.string,
    allSubjectsSameDuration: PropTypes.string,
    numberOfSemesters: PropTypes.string,
    periodName: PropTypes.string,
    knowledgeAreas: PropTypes.string,
    maxAbbrevLength: PropTypes.string,
    onlyNumbers: PropTypes.string,
    subjectsIDConfig: PropTypes.string,
    firstDigit: PropTypes.string,
    digits: PropTypes.string,
    buttonNext: PropTypes.string,
    buttonPrev: PropTypes.string,
  }),
  helps: PropTypes.shape({
    maxAbbrevLength: PropTypes.string,
  }),
  onPrevious: PropTypes.func,
  onNext: PropTypes.func,
  sharedData: PropTypes.any,
  setSharedData: PropTypes.func,
};

const FIRST_DIGIT_OPTIONS = ['Course Nº', 'None'];

const FREQUENCY_OPTIONS = [
  { label: 'Anual', value: 'Anual' },
  { label: 'Half-yearly(Semester)', value: 'Half-yearly' },
  { label: 'Quarterly(Trimester/Quarter', value: 'Quarterly' },
  { label: 'Four-month period', value: 'Four-month' },
  { label: 'Monthly', value: 'Monthly' },
  { label: 'Weekly', value: 'Weekly' },
  { label: 'Daily', value: 'Daily' },
];

const SetupSubjects = ({
  labels,
  helps,
  onNext,
  onPrevious,
  sharedData,
  setSharedData,
  ...props
}) => {
  const { classes, cx } = SetupSubjectsStyles({});

  const [firstDigit, setFirstDigit] = useState(FIRST_DIGIT_OPTIONS[0]);
  const [digits, setDigits] = useState(0);
  const [allSubjectsSameDuration, setAllSubjectsSameDuration] = useState(false);
  const numberOfCourses = sharedData?.numberOfCourses;

  const generateSubjectsID = (firstDigit, digits) => {
    if (!digits || !numberOfCourses) return '';
    let subjectsID = '';
    for (let currentNumber = 1; currentNumber <= numberOfCourses; currentNumber++) {
      let firstNumber = firstDigit === FIRST_DIGIT_OPTIONS[0] ? currentNumber : '';
      subjectsID += `${firstNumber}${'0'.repeat(digits - 1)}1-${firstNumber}${'9'.repeat(
        digits
      )} | `;
    }
    return subjectsID;
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleOnNext = (e) => {
    isFunction(setSharedData) && setSharedData({ sharedData, ...e });
    isFunction(onNext) && onNext(e);
  };

  return (
    <form onSubmit={handleSubmit(handleOnNext)}>
      <ContextContainer title={labels.title} {...props}>
        <Text size={'md'}>{labels.standardDuration}</Text>
        <Controller
          name="allSubjectsSameDuration"
          control={control}
          render={({ field: { onChange, value, ...field } }) => (
            <Checkbox
              label={labels.allSubjectsSameDuration}
              help={helps.allSubjectsSameDuration}
              onChange={(e) => {
                setAllSubjectsSameDuration(!allSubjectsSameDuration);
                onChange(e);
              }}
              checked={value}
              {...field}
            />
          )}
        />
        {!allSubjectsSameDuration && (
          <TableInput
            columns={[
              {
                Header: 'Period name',
                accessor: 'name',
                input: {
                  node: <TextInput />,
                  rules: { required: 'Required field' },
                },
              },
              {
                Header: 'Number of periods',
                accessor: 'amount',
                input: {
                  node: <NumberInput />,
                  rules: { required: 'Required field' },
                },
              },
              {
                Header: 'Period type',
                accessor: 'type',
                input: {
                  node: <Select />,
                  rules: { required: 'Required field' },
                  data: FREQUENCY_OPTIONS,
                },
                valueRender: (value) => find(FREQUENCY_OPTIONS, { value })['label'],
              },
            ]}
            data={[]}
            labels={{
              add: 'Add',
              remove: 'Remove',
            }}
          />
        )}
        <Text size={'md'}>{labels.knowledgeAreas}</Text>
        <Controller
          name="maxAbbrevLength"
          control={control}
          render={({ field }) => (
            <Box>
              <NumberInput
                orientation="horizontal"
                label={labels.maxAbbrevLength}
                help={helps.maxAbbrevLength}
                {...field}
              />
              <Controller
                name="onlyNumbers"
                control={control}
                render={({ field: { onChange, value, ...field } }) => (
                  <Box style={{ textAlign: 'right' }}>
                    <Checkbox
                      label={labels.onlyNumbers}
                      {...field}
                      onChange={onChange}
                      checked={value}
                    />
                  </Box>
                )}
              />
            </Box>
          )}
        />
        <Text size={'md'}>{labels.subjectsIDConfig}</Text>
        <Box className={classes.subjectsIDConfig}>
          <Controller
            name="firstDigit"
            control={control}
            render={({ field: { onChange, value, ...field } }) => (
              <Select
                data={FIRST_DIGIT_OPTIONS}
                defaultValue={FIRST_DIGIT_OPTIONS[0]}
                value={value}
                label={labels.firstDigit}
                onChange={(e) => {
                  onChange(e);
                  setFirstDigit(e);
                }}
                {...field}
              />
            )}
          />
          <Text color={'primary'} size={'xl'}>
            +
          </Text>
          <Controller
            name="digits"
            control={control}
            render={({ field: { onChange, value, ...field } }) => (
              <NumberInput
                label={labels.digits}
                defaultValue={0}
                onChange={(e) => {
                  onChange(e);
                  setDigits(e);
                }}
                value={value}
                {...field}
              />
            )}
          />
          <Text color={'primary'} size={'xl'}>
            =
          </Text>
          <Text size={'xl'}>{generateSubjectsID(firstDigit, digits)}</Text>
        </Box>
        <Box className={classes.buttonRow}>
          <Box>
            <Button
              variant={'outline'}
              leftIcon={<ChevLeftIcon height={20} width={20} />}
              onClick={onPrevious}
            >
              {labels.buttonPrev}
            </Button>
          </Box>
          <Box>
            <Button
              variant={'outline'}
              type="submit"
              rightIcon={<ChevRightIcon height={20} width={20} />}
            >
              {labels.buttonNext}
            </Button>
          </Box>
        </Box>
      </ContextContainer>
    </form>
  );
};

SetupSubjects.defaultProps = SETUP_SUBJECTS_DEFAULT_PROPS;
SetupSubjects.propTypes = SETUP_SUBJECTS_PROP_TYPES;

export { SetupSubjects };
