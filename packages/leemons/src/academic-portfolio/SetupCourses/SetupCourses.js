import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { capitalize, forEach, isArray, isFunction } from 'lodash';
import { Controller, useForm } from 'react-hook-form';
import {
  Box,
  Button,
  Checkbox,
  ContextContainer,
  NumberInput,
  Select,
  Stack,
  Switch,
  TextInput,
} from '@bubbles-ui/components';
import { ChevLeftIcon, ChevRightIcon } from '@bubbles-ui/icons/outline';
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
  editable: PropTypes.bool,
};

const resets = {
  haveSubstagesPerCourse: [
    'substagesFrequency',
    'numberOfSubstages',
    'useDefaultSubstagesName',
    'maxSubstageAbbreviation',
    'maxSubstageAbbreviationIsOnlyNumbers',
    'customSubstages',
    'substages',
  ],
  useDefaultSubstagesName: [
    'maxSubstageAbbreviation',
    'maxSubstageAbbreviationIsOnlyNumbers',
    'substages',
  ],
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
  editable,
  ...props
}) => {
  const defaultValues = {
    maxNumberOfCourses: 0,
    courseCredits: 0,
    haveSubstagesPerCourse: true,
    substagesFrequency: frequencyOptions[0]?.value,
    substages: [],
    numberOfSubstages: 0,
    useDefaultSubstagesName: false,
    maxSubstageAbbreviation: 0,
    maxSubstageAbbreviationIsOnlyNumbers: false,
    hideCoursesInTree: false,
    moreThanOneAcademicYear: false,
    ...sharedData,
  };

  const [onlyOneCourse, setOnlyOneCourse] = useState(defaultValues.maxNumberOfCourses === 0);

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
    watch,
    control,
    register,
    unregister,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm({ defaultValues });

  const haveSubstagesPerCourse = watch('haveSubstagesPerCourse');

  useEffect(() => {
    const subscription = watch((formData, event) => {
      if (event.name === 'haveSubstagesPerCourse' && !formData.haveSubstagesPerCourse) {
        forEach(resets.haveSubstagesPerCourse, (reset) => {
          unregister(reset);
        });
      }
      if (event.name === 'useDefaultSubstagesName' && formData.useDefaultSubstagesName) {
        forEach(resets.useDefaultSubstagesName, (reset) => {
          unregister(reset);
        });
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  // useEffect(() => console.log(errors), [errors]);

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

      const val = getValues(substageAbbrev);
      if (!val) {
        setValue(substageAbbrev, defaultValue);
      }

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
                error={isArray(errors.substages) ? errors.substages[currentSubstage]?.name : null}
                required
                disabled={!editable}
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
                value={value}
                onChange={onChange}
                error={
                  isArray(errors.substages) ? errors.substages[currentSubstage]?.abbreviation : null
                }
                required
                disabled={!editable}
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
    const data = { ...sharedData, ...e };
    if (!data.haveSubstagesPerCourse) {
      forEach(resets.haveSubstagesPerCourse, (reset) => {
        delete data[reset];
      });
    }
    if (data.useDefaultSubstagesName) {
      forEach(resets.useDefaultSubstagesName, (reset) => {
        delete data[reset];
      });
    }

    isFunction(setSharedData) && setSharedData(data);
    isFunction(onNext) && onNext(data);
  };

  return (
    <form onSubmit={handleSubmit(handleOnNext)} autoComplete="off">
      <ContextContainer {...props} divided>
        <ContextContainer title={labels.title}>
          <Stack direction="column" className={classes.checkboxGroup}>
            <Checkbox
              label={labels.oneCourseOnly}
              checked={onlyOneCourse}
              disabled={!editable}
              onChange={(e) => {
                setOnlyOneCourse(e);
                setValue('maxNumberOfCourses', e ? 1 : 0);
                setValue('courseCredits', 0);
                setValue('moreThanOneAcademicYear', false);
              }}
            />
            {/*
           <Controller
              name="hideCoursesInTree"
              control={control}
              render={({ field: { value, ...field } }) => (
                <Checkbox
                  label={labels.hideCoursesInTree}
                  checked={value}
                  disabled={!editable}
                  {...field}
                />
              )}
            />
            */}
            {!onlyOneCourse ? (
              <Controller
                name="moreThanOneAcademicYear"
                control={control}
                render={({ field: { value, ...field } }) => (
                  <Checkbox
                    label={labels.moreThanOneAcademicYear}
                    checked={value}
                    disabled={!editable}
                    {...field}
                  />
                )}
              />
            ) : null}
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
                    disabled={!editable}
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
                    disabled={!editable}
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
            render={({ field }) => (
              <Switch
                {...field}
                onChange={() => {
                  field.onChange(!field.value);
                }}
                label={labels.haveSubstagesPerCourse}
                checked={!field.value || false}
                disabled={!editable}
              />
            )}
          />
          {haveSubstagesPerCourse && (
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
                      disabled={!editable}
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
                      disabled={!editable}
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
                      disabled={!editable}
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
                            disabled={!editable}
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
                                disabled={!editable}
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
