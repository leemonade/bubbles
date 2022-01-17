import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm, Controller } from 'react-hook-form';
import { ContextContainer } from '../../../layout';
import { TextInput, Checkbox, NumberInput, Button, CheckBoxGroup, Select } from '../../../form/';
import { ChevRightIcon, ChevLeftIcon } from '@bubbles-ui/icons/outline';
import { Text } from '../../../typography';
import { Box } from '@mantine/core';
import { SetupSubjectsStyles } from './SetupSubjects.styles';
import { first } from 'lodash';

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
  numberOfCourses: PropTypes.number,
  onPrevious: PropTypes.func,
  onNext: PropTypes.func,
};

const FIRST_DIGIT_OPTIONS = ['Course Nº', 'None'];

const SetupSubjects = ({ labels, helps, numberOfCourses, onNext, onPrevious, ...props }) => {
  const { classes, cx } = SetupSubjectsStyles({});

  const [firstDigit, setFirstDigit] = useState(FIRST_DIGIT_OPTIONS[0]);
  const [digits, setDigits] = useState(0);
  const [allSubjectsSameDuration, setAllSubjectsSameDuration] = useState(false);

  const generateSubjectsID = (firstDigit, digits) => {
    if (!digits) return '';
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

  return (
    <form onSubmit={handleSubmit(onNext)}>
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
          <Box className={classes.inputRow}>
            <Controller
              name="numberOfSemesters"
              control={control}
              render={({ field: { onChange, value, ...field } }) => (
                <TextInput
                  headerStyle={{ width: 'auto' }}
                  label={labels.numberOfSemesters}
                  orientation="horizontal"
                  onChange={onChange}
                  value={value}
                  {...field}
                />
              )}
            />
            <Controller
              name="periodName"
              control={control}
              orientation="horizontal"
              render={({ field: { onChange, value, ...field } }) => (
                <TextInput
                  headerStyle={{ width: 'auto' }}
                  orientation="horizontal"
                  label={labels.periodName}
                  onChange={onChange}
                  value={value}
                  {...field}
                />
              )}
            />
          </Box>
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
