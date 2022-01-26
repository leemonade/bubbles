import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { isArray, isFunction, capitalize } from 'lodash';
import { useForm, Controller } from 'react-hook-form';
import {
  Box,
  Stack,
  ContextContainer,
  TextInput,
  Checkbox,
  NumberInput,
  Button,
  Select,
  Switch,
} from '@bubbles-ui/components';
import { ChevRightIcon, ChevLeftIcon } from '@bubbles-ui/icons/outline';
import { SetupCoursesStyles } from './SetupCourses.styles';

export const SETUP_COURSES_DEFAULT_PROPS = {
  sharedData: {},
  frequencyOptions: [],
};
export const SETUP_COURSES_PROP_TYPES = {
  labels: PropTypes.object,
  placeholders: PropTypes.object,
  errorMessages: PropTypes.object,
  onPrevious: PropTypes.func,
  onNext: PropTypes.func,
  sharedData: PropTypes.any,
  setSharedData: PropTypes.func,
  frequencyOptions: PropTypes.array,
};

const SetupCourses = ({
  labels,
  placeholders,
  errorMessages,
  onPrevious,
  onNext,
  sharedData,
  setSharedData,
  frequencyOptions,
  ...props
}) => {
  const defaultValues = {
    maxNumberOfCourses: 0,
    courseCredits: 0,
    haveSubstagesPerCourse: false,
    substagesFrequency: frequencyOptions[0]?.value,
    numberOfSubstages: 0,
    useDefaultSubstagesName: false,
    maxSubstageAbbreviation: 0,
    maxSubstageAbbreviationIsOnlyNumbers: false,
    hideCoursesInTree: false,
    moreThanOneAcademicYear: false,
    ...sharedData,
  };

  const [onlyOneCourse, setOnlyOneCourse] = useState(defaultValues.maxNumberOfCourses === 1);
  const [haveSubstagesPerCourse, setHaveSubstagesPerCourse] = useState(
    defaultValues.haveSubstagesPerCourse
  );
  const [useDefaultSubstagesName, setUseDefaultSubstagesName] = useState(
    defaultValues.useDefaultSubstagesName
  );
  const [maxSubstageAbbreviation, setMaxSubstageAbbreviation] = useState(
    defaultValues.maxSubstageAbbreviation
  );
  const [maxSubstageAbbreviationIsOnlyNumbers, setMaxSubstageAbbreviationIsOnlyNumbers] = useState(
    defaultValues.maxSubstageAbbreviationIsOnlyNumbers
  );
  const [substagesFrequency, setSubstagesFrequency] = useState(defaultValues.substagesFrequency);
  const [numberOfSubstages, setNumberOfSubstages] = useState(defaultValues.numberOfSubstages);

  const { classes, cx } = SetupCoursesStyles({ onlyOneCourse }, { name: 'SetupCourses' });

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ defaultValues });

  useEffect(() => console.log(errors), [errors]);

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
      // const substageName = `${capitalize(substagesFrequency)} ${currentSubstage + 1}`;
      const substageKey = `substages.${currentSubstage}`;
      const substageName = `substages.${currentSubstage}.name`;
      const substageAbbrev = `substages.${currentSubstage}.abbreviation`;

      substages.push(
        <ContextContainer key={substageKey} direction="row">
          <Controller
            name={substageName}
            control={control}
            rules={{
              required: errorMessages.useDefaultSubstagesName?.required || 'Required Field',
            }}
            render={({ field }) => (
              <TextInput
                label={`${capitalize(substagesFrequency)}`}
                error={isArray(errors.substages) ? errors.substages[currentSubstage].name : null}
                required
                {...field}
              />
            )}
          />
          <Controller
            name={substageAbbrev}
            control={control}
            rules={{
              // required: errorMessages.maxSubstageAbbreviation?.required || 'Required Field',
              maxLength: maxSubstageAbbreviation,
            }}
            render={({ field: { onChange, value, ...field }, fieldState }) => (
              <TextInput
                label={labels.abbreviation}
                value={fieldState.isDirty ? value : defaultValue}
                onChange={onChange}
                error={
                  isArray(errors.substages) ? errors.substages[currentSubstage].abbreviation : null
                }
                required
                {...field}
              />
            )}
          />
        </ContextContainer>
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
      <ContextContainer {...props} divided>
        <ContextContainer title={labels.title}>
          <Stack direction="column" className={classes.checkboxGroup}>
            <Checkbox
              label={labels.oneCourseOnly}
              checked={onlyOneCourse}
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
          </Stack>

          {!onlyOneCourse && (
            <ContextContainer direction="row">
              <Controller
                name="maxNumberOfCourses"
                control={control}
                rules={{ required: errorMessages.maxNumberOfCourses?.required }}
                render={({ field }) => (
                  <NumberInput
                    label={labels.maxNumberOfCourses}
                    // defaultValue={0}
                    min={0}
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
                    // defaultValue={0}
                    min={0}
                    {...field}
                  />
                )}
              />
            </ContextContainer>
          )}
        </ContextContainer>
        <ContextContainer title={labels.courseSubstage}>
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
            <ContextContainer>
              <ContextContainer direction="row">
                <Controller
                  name="substagesFrequency"
                  control={control}
                  rules={{ required: errorMessages.substagesFrequency?.required }}
                  render={({ field: { onChange, value, ...field } }) => (
                    <Select
                      label={labels.substagesFrequency}
                      placeholder={placeholders.substagesFrequency}
                      data={frequencyOptions}
                      onChange={(e) => {
                        onChange(e);
                        setSubstagesFrequency(e);
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
                      // defaultValue={0}
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
              </ContextContainer>
              <ContextContainer subtitle={labels.subtagesNames}>
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
                        <ContextContainer direction="row" alignItems="end">
                          <NumberInput
                            // defaultValue={0}
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
                            )}
                          />
                        </ContextContainer>
                      )}
                    />
                    {substagesFrequency && getSubstages()}
                  </>
                )}
              </ContextContainer>
            </ContextContainer>
          )}
        </ContextContainer>
        <Stack fullWidth justifyContent="space-between">
          <Box>
            <Button
              compact
              variant="light"
              leftIcon={<ChevLeftIcon height={20} width={20} />}
              onClick={onPrevious}
            >
              {labels.buttonPrev}
            </Button>
          </Box>
          <Box>
            <Button type="submit" rightIcon={<ChevRightIcon height={20} width={20} />}>
              {labels.buttonNext}
            </Button>
          </Box>
        </Stack>
      </ContextContainer>
    </form>
  );
};

SetupCourses.defaultProps = SETUP_COURSES_DEFAULT_PROPS;
SetupCourses.propTypes = SETUP_COURSES_PROP_TYPES;

export { SetupCourses };
