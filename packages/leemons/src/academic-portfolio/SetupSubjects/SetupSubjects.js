import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { isFunction, find } from 'lodash';
import { useForm, Controller } from 'react-hook-form';
import {
  Box,
  Stack,
  ContextContainer,
  Divider,
  TextInput,
  Checkbox,
  NumberInput,
  Button,
  Select,
  TableInput,
  Switch,
  Text,
} from '@bubbles-ui/components';
import { ChevRightIcon, ChevLeftIcon } from '@bubbles-ui/icons/outline';
import { SetupSubjectsStyles } from './SetupSubjects.styles';

export const SETUP_SUBJECTS_DEFAULT_PROPS = {
  sharedData: {},
  errorMessages: {},
  firstDigitOptions: [],
  frequencyOptions: [],
};
export const SETUP_SUBJECTS_PROP_TYPES = {
  labels: PropTypes.object,
  helps: PropTypes.object,
  errorMessages: PropTypes.object,
  onPrevious: PropTypes.func,
  onNext: PropTypes.func,
  sharedData: PropTypes.any,
  setSharedData: PropTypes.func,
  firstDigitOptions: PropTypes.array,
  frequencyOptions: PropTypes.array,
  editable: PropTypes.bool,
};

const SetupSubjects = ({
  labels,
  helps,
  errorMessages,
  onNext,
  onPrevious,
  sharedData,
  setSharedData,
  firstDigitOptions,
  frequencyOptions,
  editable,
  ...props
}) => {
  const defaultValues = {
    allSubjectsSameDuration: false,
    haveKnowledge: false,
    maxKnowledgeAbbreviation: 0,
    maxKnowledgeAbbreviationIsOnlyNumbers: false,
    subjectsFirstDigit: firstDigitOptions[0]?.value,
    subjectsDigits: 0,
    customSubstages: [],
    ...sharedData,
  };

  const [subjectsFirstDigit, setSubjectsFirstDigit] = useState(defaultValues.subjectsFirstDigit);
  const [subjectsDigits, setSubjectsDigits] = useState(defaultValues.subjectsDigits);
  const [allSubjectsSameDuration, setAllSubjectsSameDuration] = useState(
    defaultValues.allSubjectsSameDuration
  );
  const [haveKnowledge, setHaveKnowledge] = useState(defaultValues.haveKnowledge);
  const [customSubstages, setCustomSubstages] = useState(defaultValues.customSubstages);

  const { classes, cx } = SetupSubjectsStyles({});

  const generateSubjectsID = useCallback(() => {
    if (!subjectsDigits) return '';
    const subjectsID = [];
    const numberOfCourses = sharedData?.maxNumberOfCourses;

    for (let currentNumber = 1; currentNumber <= numberOfCourses; currentNumber++) {
      const firstNumber = subjectsFirstDigit === firstDigitOptions[0]?.value ? currentNumber : '';
      subjectsID.push(
        <Box key={`k-${currentNumber}`} className={classes.subjectID}>
          <Text size="md">{`${firstNumber}${'0'.repeat(
            subjectsDigits - 1
          )}1-${firstNumber}${'9'.repeat(subjectsDigits)}`}</Text>
        </Box>
      );
      if (currentNumber < numberOfCourses) {
        subjectsID.push(<Divider key={`d-${currentNumber}`} orientation="vertical" />);
      }
    }
    return subjectsID;
  }, [subjectsFirstDigit, subjectsDigits, sharedData, firstDigitOptions]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const handleOnNext = (e) => {
    const data = { ...sharedData, ...e, customSubstages };
    isFunction(setSharedData) && setSharedData(data);
    isFunction(onNext) && onNext(data);
  };

  return (
    <form onSubmit={handleSubmit(handleOnNext)}>
      <ContextContainer {...props} divided>
        <ContextContainer title={labels.title} subtitle={labels.standardDuration}>
          <Controller
            name="allSubjectsSameDuration"
            control={control}
            render={({ field: { onChange, value, ref, ...field } }) => (
              <Switch
                label={labels.allSubjectsSameDuration}
                help={helps.allSubjectsSameDuration}
                onChange={(e) => {
                  setAllSubjectsSameDuration(!allSubjectsSameDuration);
                  onChange(e);
                }}
                checked={value || false}
                disabled={!editable}
                {...field}
              />
            )}
          />
          {!allSubjectsSameDuration && (
            <TableInput
              sortable={false}
              disabled={!editable}
              columns={[
                {
                  Header: labels.periodName,
                  accessor: 'name',
                  input: {
                    node: <TextInput />,
                    rules: { required: errorMessages?.periodName?.required || 'Required field' },
                  },
                },
                {
                  Header: labels.numOfPeriods,
                  accessor: 'number',
                  input: {
                    node: <NumberInput />,
                    rules: { required: errorMessages?.numOfPeriods?.required || 'Required field' },
                  },
                },
                {
                  Header: labels.substagesFrequency,
                  accessor: 'frequency',
                  input: {
                    node: <Select />,
                    rules: {
                      required: errorMessages?.substagesFrequency?.required || 'Required field',
                    },
                    data: frequencyOptions,
                  },
                  valueRender: (value) => find(frequencyOptions, { value })['label'],
                },
              ]}
              data={customSubstages}
              labels={{
                add: labels.buttonAdd,
                remove: labels.buttonRemove,
              }}
              onChangeData={(val) => setCustomSubstages(val)}
            />
          )}
        </ContextContainer>
        <ContextContainer title={labels.knowledgeAreas}>
          <Controller
            name="haveKnowledge"
            control={control}
            render={({ field: { onChange, value, ref, ...field } }) => (
              <Switch
                label={labels.haveKnowledge}
                help={helps.haveKnowledge}
                onChange={(e) => {
                  setHaveKnowledge(!haveKnowledge);
                  onChange(e);
                }}
                checked={value || false}
                disabled={!editable}
                {...field}
              />
            )}
          />
          {haveKnowledge && (
            <Controller
              name="maxKnowledgeAbbreviation"
              control={control}
              render={({ field }) => (
                <ContextContainer direction="row" alignItems="center">
                  <NumberInput
                    label={labels.maxKnowledgeAbbreviation}
                    help={helps.maxKnowledgeAbbreviation}
                    min={0}
                    disabled={!editable}
                    {...field}
                  />
                  <Controller
                    name="maxKnowledgeAbbreviationIsOnlyNumbers"
                    control={control}
                    render={({ field: { onChange, value, ...field } }) => (
                      <Checkbox
                        label={labels.maxKnowledgeAbbreviationIsOnlyNumbers}
                        onChange={onChange}
                        checked={value}
                        disabled={!editable}
                        {...field}
                      />
                    )}
                  />
                </ContextContainer>
              )}
            />
          )}
        </ContextContainer>
        <ContextContainer title={labels.subjectsIDConfig}>
          <ContextContainer direction="row" alignItems="center">
            <Controller
              name="subjectsFirstDigit"
              control={control}
              render={({ field: { onChange, ...field } }) => (
                <Select
                  data={firstDigitOptions}
                  label={labels.subjectsFirstDigit}
                  onChange={(e) => {
                    onChange(e);
                    setSubjectsFirstDigit(e);
                  }}
                  disabled={!editable}
                  {...field}
                />
              )}
            />
            <Box className={classes.mathSymbol}>
              <Text color={'primary'} size={'xl'}>
                +
              </Text>
            </Box>
            <Controller
              name="subjectsDigits"
              control={control}
              render={({ field: { onChange, ...field } }) => (
                <NumberInput
                  label={labels.subjectsDigits}
                  min={0}
                  disabled={!editable}
                  onChange={(e) => {
                    onChange(e);
                    setSubjectsDigits(e);
                  }}
                  {...field}
                />
              )}
            />
            <Box className={classes.mathSymbol}>
              <Text color={'primary'} size={'xl'}>
                =
              </Text>
            </Box>
            <Box className={classes.subjectsID}>{generateSubjectsID()}</Box>
          </ContextContainer>
        </ContextContainer>
        <Stack justifyContent="space-between" fullWidth>
          <Button
            compact
            variant="light"
            leftIcon={<ChevLeftIcon height={20} width={20} />}
            onClick={onPrevious}
          >
            {labels.buttonPrev}
          </Button>

          <Button type="submit">{labels.buttonNext}</Button>
        </Stack>
      </ContextContainer>
    </form>
  );
};

SetupSubjects.defaultProps = SETUP_SUBJECTS_DEFAULT_PROPS;
SetupSubjects.propTypes = SETUP_SUBJECTS_PROP_TYPES;

export { SetupSubjects };
