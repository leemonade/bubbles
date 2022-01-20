import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm, Controller } from 'react-hook-form';
import { Box } from '@mantine/core';
import { SetupCoursesStyles } from './SetupCourses.styles';
import { ContextContainer } from '../../../layout';
import { TextInput, Checkbox, NumberInput, Button, Select, Switch } from '../../../form/';
import { Text } from '../../../typography';
import { ChevRightIcon, ChevLeftIcon } from '@bubbles-ui/icons/outline';
import { capitalize } from 'lodash';
import { isFunction } from 'lodash';

export const SETUP_COURSES_DEFAULT_PROPS = {};
export const SETUP_COURSES_PROP_TYPES = {
  labels: PropTypes.shape({
    title: PropTypes.string,
    oneCourseOnly: PropTypes.string,
    hideCoursesInTree: PropTypes.string,
    moreThanOneAcademicYear: PropTypes.string,
    maxNumberOfCourses: PropTypes.string,
    courseCredits: PropTypes.string,
    courseSubstage: PropTypes.string,
    haveSubstagesPerCourse: PropTypes.string,
    numberOfSubstages: PropTypes.string,
    subtagesNames: PropTypes.string,
    useDefaultSubstagesName: PropTypes.string,
    maxSubstageAbbreviation: PropTypes.string,
    maxSubstageAbbreviationIsOnlyNumbers: PropTypes.string,
    buttonNext: PropTypes.string,
    buttonPrev: PropTypes.string,
  }),
  placeholders: PropTypes.shape({
    substagesFrequency: PropTypes.string,
  }),
  errorMessages: PropTypes.shape({
    maxNumberOfCourses: PropTypes.any,
    courseCredits: PropTypes.any,
    substagesFrequency: PropTypes.any,
    numberOfSubstages: PropTypes.any,
    maxSubstageAbbreviation: PropTypes.any,
  }),
  onPrevious: PropTypes.func,
  onNext: PropTypes.func,
  sharedData: PropTypes.any,
  setSharedData: PropTypes.func,
};

const FREQUENCY_OPTIONS = [
  { label: 'Anual', value: 'year' },
  { label: 'Half-yearly(Semester)', value: 'semester' },
  { label: 'Trimester', value: 'trimester' },
  { label: 'Four-month period', value: 'quarter' },
  { label: 'Monthly', value: 'month' },
  { label: 'Weekly', value: 'week' },
  { label: 'Daily', value: 'day' },
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
  const [onlyOneCourse, setOnlyOneCourse] = useState(false);
  const [haveSubstagesPerCourse, setHaveSubstagesPerCourse] = useState(false);
  const [useDefaultSubstagesName, setUseDefaultSubstagesName] = useState(false);
  const [maxSubstageAbbreviation, setMaxSubstageAbbreviation] = useState(0);
  const [maxSubstageAbbreviationIsOnlyNumbers, setMaxSubstageAbbreviationIsOnlyNumbers] =
    useState(false);
  const [substagesFrequency, setsubstagesFrequency] = useState(null);
  const [numberOfSubstages, setNumberOfSubstages] = useState(0);

  const { classes, cx } = SetupCoursesStyles({ onlyOneCourse }, { name: 'SetupCourses' });

  const defaultValues = {
    maxNumberOfCourses: 0,
    courseCredits: 0,
    haveSubstagesPerCourse: false,
    substagesFrequency: FREQUENCY_OPTIONS[0].value,
    numberOfSubstages: 0,
    useDefaultSubstagesName: false,
    maxSubstageAbbreviation: 0,
    maxSubstageAbbreviationIsOnlyNumbers: false,
    hideCoursesInTree: false,
    moreThanOneAcademicYear: false,
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ defaultValues });

  const getSubstageAbbr = (currentSubstage) => {
    let substageAbbr = `${currentSubstage}`;
    substageAbbr = substageAbbr.padStart(
      maxSubstageAbbreviationIsOnlyNumbers ? maxSubstageAbbreviation : maxSubstageAbbreviation - 1,
      '0'
    );
    substageAbbr =
      (maxSubstageAbbreviationIsOnlyNumbers ? '' : substagesFrequency.charAt(0).toUpperCase()) +
      substageAbbr;

    return substageAbbr;
  };

  const getSubstages = () => {
    const substages = [];
    for (let currentSubstage = 0; currentSubstage < numberOfSubstages; currentSubstage++) {
      const defaultValue = getSubstageAbbr(currentSubstage + 1);
      const substageName = `${capitalize(substagesFrequency)} ${currentSubstage + 1}`;

      substages.push(
        <Box key={currentSubstage} className={classes.substageRow}>
          <Controller
            name={substageName}
            control={control}
            render={({ field }) => (
              <TextInput label={substageName + ':'} orientation="horizontal" required {...field} />
            )}
          />
          <Controller
            name={substageName + ' Abbrev'}
            control={control}
            rules={{ maxLength: maxSubstageAbbreviation }}
            render={({ field: { onChange, value, ...field }, fieldState }) => (
              <TextInput
                label={'Abbreviation:'}
                headerStyle={{ marginLeft: '1rem' }}
                orientation="horizontal"
                value={fieldState.isDirty ? value : defaultValue}
                onChange={onChange}
                required
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
    isFunction(setSharedData) && setSharedData({ ...sharedData, ...e });
    isFunction(onNext) && onNext(e);
  };

  return (
    <form onSubmit={handleSubmit(handleOnNext)}>
      <ContextContainer title={labels.title} {...props}>
        <Box className={classes.checkboxGroup}>
          <Checkbox
            label={labels.oneCourseOnly}
            onChange={(e) => {
              setOnlyOneCourse(e);
              setValue('maxNumberOfCourses', e ? 1 : 0);
              setValue('courseCredits', 0);
            }}
          />
          <Controller
            name="hideCoursesInTree"
            control={control}
            render={({ field: { value, ...field } }) => (
              <Checkbox label={labels.hideCoursesInTree} checked={value} {...field} />
            )}
          />
          <Controller
            name="moreThanOneAcademicYear"
            control={control}
            render={({ field: { value, ...field } }) => (
              <Checkbox label={labels.moreThanOneAcademicYear} checked={value} {...field} />
            )}
          />
        </Box>

        <Box className={classes.onlyOneCourse}>
          <Box className={classes.inputRow}>
            <Controller
              name="maxNumberOfCourses"
              control={control}
              rules={{ required: errorMessages.maxNumberOfCourses?.required }}
              render={({ field }) => (
                <NumberInput
                  label={labels.maxNumberOfCourses}
                  defaultValue={0}
                  min={0}
                  orientation={'horizontal'}
                  error={errors.maxNumberOfCourses}
                  {...field}
                />
              )}
            />
            <Controller
              name="courseCredits"
              control={control}
              render={({ field }) => (
                <NumberInput
                  label={labels.courseCredits}
                  defaultValue={0}
                  min={0}
                  orientation={'horizontal'}
                  {...field}
                />
              )}
            />
          </Box>
        </Box>

        <Text size={'md'}>{labels.courseSubstage}</Text>
        <Controller
          name="haveSubstagesPerCourse"
          control={control}
          render={({ field: { onChange, value, ref, ...field } }) => (
            <Switch
              {...field}
              label={labels.haveSubstagesPerCourse}
              onChange={(e) => {
                onChange(e);
                setHaveSubstagesPerCourse(!haveSubstagesPerCourse);
              }}
              checked={value || false}
            />
          )}
        />
        {!haveSubstagesPerCourse && (
          <>
            <Box className={classes.inputRow}>
              <Controller
                name="substagesFrequency"
                control={control}
                rules={{ required: errorMessages.substagesFrequency?.required }}
                render={({ field: { onChange, value, ...field } }) => (
                  <Select
                    placeholder={placeholders.substagesFrequency}
                    data={FREQUENCY_OPTIONS}
                    onChange={(e) => {
                      onChange(e);
                      setsubstagesFrequency(e);
                    }}
                    required
                    value={value}
                    {...field}
                  />
                )}
              />
              <Controller
                name="numberOfSubstages"
                control={control}
                rules={{ required: errorMessages.numberOfSubstages?.required }}
                render={({ field: { onChange, value, ...field } }) => (
                  <NumberInput
                    label={labels.numberOfSubstages}
                    orientation={'horizontal'}
                    defaultValue={0}
                    min={0}
                    onChange={(e) => {
                      onChange(e);
                      setNumberOfSubstages(e);
                    }}
                    required
                    value={value}
                    {...field}
                  />
                )}
              />
            </Box>
            <Text size={'md'}>{labels.subtagesNames}</Text>
            <Controller
              name="useDefaultSubstagesName"
              control={control}
              render={({ field: { onChange, value, ref, ...field } }) => (
                <Switch
                  label={labels.useDefaultSubstagesName}
                  {...field}
                  onChange={(e) => {
                    onChange(e);
                    setUseDefaultSubstagesName(!useDefaultSubstagesName);
                  }}
                  checked={value || false}
                />
              )}
            />
            {!useDefaultSubstagesName && (
              <>
                <Controller
                  name="maxSubstageAbbreviation"
                  control={control}
                  render={({ field: { onChange, value, ...field } }) => (
                    <Box>
                      <NumberInput
                        orientation="horizontal"
                        defaultValue={0}
                        min={0}
                        label={labels.maxSubstageAbbreviation}
                        onChange={(e) => {
                          onChange(e);
                          setMaxSubstageAbbreviation(e);
                        }}
                        value={value}
                        {...field}
                      />
                      <Controller
                        name="maxSubstageAbbreviationIsOnlyNumbers"
                        control={control}
                        render={({ field: { onChange, value, ...field } }) => (
                          <Box style={{ textAlign: 'right' }}>
                            <Checkbox
                              label={labels.maxSubstageAbbreviationIsOnlyNumbers}
                              {...field}
                              onChange={(e) => {
                                onChange(e);
                                setMaxSubstageAbbreviationIsOnlyNumbers(
                                  !maxSubstageAbbreviationIsOnlyNumbers
                                );
                              }}
                              checked={value}
                            />
                          </Box>
                        )}
                      />
                    </Box>
                  )}
                />
                {substagesFrequency && getSubstages()}
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
