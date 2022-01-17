import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm, Controller } from 'react-hook-form';
import { Box } from '@mantine/core';
import { SetupCoursesStyles } from './SetupCourses.styles';
import { ContextContainer } from '../../../layout';
import { TextInput, Checkbox, NumberInput, Button, CheckBoxGroup, Select } from '../../../form/';
import { Text } from '../../../typography';
import { ChevRightIcon, ChevLeftIcon } from '@bubbles-ui/icons/outline';
import { isFunction } from 'lodash';

export const SETUP_COURSES_DEFAULT_PROPS = {};
export const SETUP_COURSES_PROP_TYPES = {
  labels: PropTypes.shape({
    title: PropTypes.string,
    oneCourseOnly: PropTypes.string,
    hiddenCourse: PropTypes.string,
    moreThanOneAcademicYear: PropTypes.string,
    numberOfCourses: PropTypes.string,
    creditsperCourse: PropTypes.string,
    courseSubstage: PropTypes.string,
    noSubstage: PropTypes.string,
    numberOfSubstages: PropTypes.string,
    buttonNext: PropTypes.string,
    buttonPrev: PropTypes.string,
    subtagesNames: PropTypes.string,
    nameAndAbbrev: PropTypes.string,
    maxAbbrevLength: PropTypes.string,
    onlyNumbers: PropTypes.string,
  }),
  placeholders: PropTypes.shape({
    frequency: PropTypes.string,
  }),
  errorMessages: PropTypes.shape({
    numberOfCourses: PropTypes.any,
    creditsperCourse: PropTypes.any,
    frequency: PropTypes.any,
    numberOfSubstages: PropTypes.any,
    maxAbbrevLength: PropTypes.any,
  }),
  onPrevious: PropTypes.func,
  onNext: PropTypes.func,
  sharedData: PropTypes.any,
  setSharedData: PropTypes.func,
};
const FREQUENCY_OPTIONS = [
  { label: 'Anual', value: 'Anual' },
  { label: 'Half-yearly(Semester)', value: 'Semester' },
  { label: 'Quarterly(Trimester/Quarter', value: 'Trimester' },
  { label: 'Four-month period', value: 'Four-month' },
  { label: 'Monthly', value: 'Monthly' },
  { label: 'Weekly', value: 'Weekly' },
  { label: 'Daily', value: 'Daily' },
];

const SetupCourses = ({
  labels,
  placeholders,
  errorMessages,
  onPrevious,
  onNext,
  sharedData,
  setSharedData,
  ...props
}) => {
  const { classes, cx } = SetupCoursesStyles({});

  const [onlyOneCourse, setOnlyOneCourse] = useState(false);
  const [noSubstages, setNoSubstages] = useState(false);
  const [useDefaultNameAndAbbrev, setUseDefaultNameAndAbbrev] = useState(false);
  const [maxAbbrevLength, setMaxAbbrevLength] = useState(0);
  const [onlyNumbers, setOnlyNumbers] = useState(false);

  const [frequency, setFrequency] = useState(null);
  const [numberOfSubstages, setNumberOfSubstages] = useState(0);

  const {
    control,
    handleSubmit,
    formState: { errors, ...formState },
  } = useForm();

  const getSubstageAbbr = (currentSubstage) => {
    let substageAbbr = `${currentSubstage}`;
    substageAbbr = substageAbbr.padStart(onlyNumbers ? maxAbbrevLength : maxAbbrevLength - 1, '0');
    substageAbbr = (onlyNumbers ? '' : frequency.charAt(0).toUpperCase()) + substageAbbr;

    return substageAbbr;
  };

  const getSubstages = () => {
    const substages = [];
    for (let currentSubstage = 0; currentSubstage < numberOfSubstages; currentSubstage++) {
      let defaultValue = !formState.isDirty ? getSubstageAbbr(currentSubstage + 1) : null;
      const substageName = `${frequency} ${currentSubstage + 1}:`;
      substages.push(
        <Box key={currentSubstage} className={classes.substageRow}>
          <Controller
            name={substageName}
            control={control}
            render={(field) => (
              <TextInput
                label={substageName}
                orientation="horizontal"
                name={`subtagesNames${currentSubstage}`}
                {...field}
              />
            )}
          />
          <Controller
            name={substageName + 'Abbrev'}
            control={control}
            render={({ field: { onChange, value, ...field } }) => (
              <TextInput
                label={'Abbr.'}
                headerStyle={{ marginLeft: '1rem' }}
                orientation="horizontal"
                name={`maxAbbrevLength${currentSubstage}`}
                value={value || defaultValue}
                onChange={onChange}
                maxLength={maxAbbrevLength}
                {...field}
              />
            )}
          />
        </Box>
      );
    }
    return substages;
  };

  const handleOnNext = (e) => {
    isFunction(setSharedData) && setSharedData({ sharedData, ...e });
    isFunction(onNext) && onNext(e);
  };

  return (
    <form onSubmit={handleSubmit(handleOnNext)}>
      <ContextContainer title={labels.title} {...props}>
        <Controller
          name="courseOptions"
          control={control}
          render={({ field: { onChange, value, ref, ...field } }) => (
            <CheckBoxGroup
              data={[
                {
                  label: labels.oneCourseOnly,
                  value: 'oneCourseOnly',
                  onChange: () => setOnlyOneCourse(!onlyOneCourse),
                },
                { label: labels.hiddenCourse, value: 'hiddenCourse' },
                { label: labels.moreThanOneAcademicYear, value: 'moreThanOneAcademicYear' },
              ]}
              direction={'column'}
              onChange={onChange}
              value={value}
              {...field}
            />
          )}
        />
        {!onlyOneCourse && (
          <Box className={classes.inputRow}>
            <Controller
              name="numberOfCourses"
              control={control}
              rules={{ required: errorMessages.numberOfCourses?.required }}
              render={({ field }) => (
                <NumberInput
                  label={labels.numberOfCourses}
                  defaultValue={0}
                  orientation={'horizontal'}
                  disabled={onlyOneCourse}
                  error={errors.numberOfCourses}
                  {...field}
                />
              )}
            />
            <Controller
              name="creditsperCourse"
              control={control}
              render={({ field }) => (
                <NumberInput
                  label={labels.creditsperCourse}
                  defaultValue={0}
                  orientation={'horizontal'}
                  {...field}
                />
              )}
            />
          </Box>
        )}
        <Text size={'md'}>{labels.courseSubstage}</Text>
        <Controller
          name="noSubstage"
          control={control}
          render={({ field: { onChange, value, ...field } }) => (
            <Checkbox
              {...field}
              label={labels.noSubstage}
              onChange={(e) => {
                onChange(e);
                setNoSubstages(!noSubstages);
              }}
              checked={value}
            />
          )}
        />
        {!noSubstages && (
          <>
            <Box className={classes.inputRow}>
              <Controller
                name="frequency"
                control={control}
                render={({ field: { onChange, value, ...field } }) => (
                  <Select
                    placeholder={placeholders.frequency}
                    data={FREQUENCY_OPTIONS}
                    onChange={(e) => {
                      onChange(e);
                      setFrequency(e);
                    }}
                    value={value}
                    {...field}
                  />
                )}
              />
              <Controller
                name="numberOfSubstages"
                control={control}
                render={({ field: { onChange, value, ...field } }) => (
                  <NumberInput
                    label={labels.numberOfSubstages}
                    orientation={'horizontal'}
                    defaultValue={0}
                    onChange={(e) => {
                      onChange(e);
                      setNumberOfSubstages(e);
                    }}
                    value={value}
                    {...field}
                  />
                )}
              />
            </Box>
            <Text size={'md'}>{labels.subtagesNames}</Text>
            <Controller
              name="nameAndAbbrev"
              control={control}
              render={({ field: { onChange, value, ...field } }) => (
                <Checkbox
                  label={labels.nameAndAbbrev}
                  {...field}
                  onChange={(e) => {
                    onChange(e);
                    setUseDefaultNameAndAbbrev(!useDefaultNameAndAbbrev);
                  }}
                  checked={value}
                />
              )}
            />
            {!useDefaultNameAndAbbrev && (
              <>
                <Controller
                  name="maxAbbrevLength"
                  control={control}
                  render={({ field: { onChange, value, ...field } }) => (
                    <Box>
                      <NumberInput
                        orientation="horizontal"
                        defaultValue={0}
                        label={labels.maxAbbrevLength}
                        onChange={(e) => {
                          onChange(e);
                          setMaxAbbrevLength(e);
                        }}
                        value={value}
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
                              onChange={(e) => {
                                onChange(e);
                                setOnlyNumbers(!onlyNumbers);
                              }}
                              checked={value}
                            />
                          </Box>
                        )}
                      />
                    </Box>
                  )}
                />
                {frequency && getSubstages()}
              </>
            )}
          </>
        )}
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

SetupCourses.defaultProps = SETUP_COURSES_DEFAULT_PROPS;
SetupCourses.propTypes = SETUP_COURSES_PROP_TYPES;

export { SetupCourses };
