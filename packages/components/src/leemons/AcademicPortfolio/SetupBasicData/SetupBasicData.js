import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { isFunction, isEmpty } from 'lodash';
import { useForm, Controller } from 'react-hook-form';
import { SetupBasicDataStyles } from './SetupBasicData.styles';
import { Box, Stack, ContextContainer } from '../../../layout';
import { TextInput, Checkbox, NumberInput, Button, Switch } from '../../../form';
import { Paragraph } from '../../../typography';
import { ChevRightIcon } from '@bubbles-ui/icons/outline';

export const SETUP_BASIC_DATA_DEFAULT_PROPS = {
  sharedData: {},
};
export const SETUP_BASIC_DATA_PROP_TYPES = {
  labels: PropTypes.shape({
    abbreviation: PropTypes.string,
    creditSystem: PropTypes.string,
    credits: PropTypes.string,
    oneStudentGroup: PropTypes.string,
    groupsIDAbbrev: PropTypes.string,
    maxGroupAbbreviation: PropTypes.string,
    maxGroupAbbreviationIsOnlyNumbers: PropTypes.string,
    buttonNext: PropTypes.string,
  }),
  descriptions: PropTypes.shape({
    maxGroupAbbreviation: PropTypes.string,
  }),
  placeholders: PropTypes.shape({
    name: PropTypes.string,
    abbreviation: PropTypes.string,
  }),
  helps: PropTypes.shape({
    abbreviation: PropTypes.string,
    maxGroupAbbreviation: PropTypes.string,
  }),
  errorMessages: PropTypes.shape({
    name: PropTypes.any,
    abbreviation: PropTypes.any,
    maxGroupAbbreviation: PropTypes.any,
  }),
  onNext: PropTypes.func,
  sharedData: PropTypes.any,
  setSharedData: PropTypes.func,
};

const SetupBasicData = ({
  labels,
  descriptions,
  placeholders,
  helps,
  errorMessages,
  onNext,
  onPrevious,
  sharedData,
  setSharedData,
  ...props
}) => {
  const { classes, cx } = SetupBasicDataStyles({}, { name: 'APBasicData' });

  const defaultValues = {
    name: '',
    abbreviation: '',
    credits: 0,
    maxGroupAbbreviation: 0,
    maxGroupAbbreviationIsOnlyNumbers: false,
    creditSystem: false,
    oneStudentGroup: false,
    useCreditSystem: false,
    useOneStudentGroup: false,
    ...sharedData,
  };

  const [creditSystem, setCreditSystem] = useState(defaultValues.useCreditSystem);
  const [oneStudentGroup, setOneStudentGroup] = useState(defaultValues.useOneStudentGroup);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const handleOnNext = (e) => {
    isFunction(setSharedData) && setSharedData({ ...sharedData, ...e });
    isFunction(onNext) && onNext(e);
  };

  return (
    <form onSubmit={handleSubmit(handleOnNext)}>
      <Box sx={(theme) => ({ marginTop: theme.spacing[4] })}>
        <ContextContainer {...props} divided>
          <ContextContainer title={labels.title}>
            <ContextContainer direction="row" fullWidth>
              <Box>
                <Controller
                  control={control}
                  name="name"
                  rules={{ required: errorMessages.name?.required || 'Required Field' }}
                  render={({ field }) => (
                    <TextInput
                      label={labels.name}
                      placeholder={placeholders.name}
                      help={helps.name}
                      error={errors.name}
                      required
                      {...field}
                    />
                  )}
                />
              </Box>
              <Box>
                <Controller
                  control={control}
                  name="abbreviation"
                  rules={{
                    required: errorMessages.abbreviation?.required || 'Required Field',
                    maxLength: 8,
                    minLength: 1,
                  }}
                  render={({ field }) => (
                    <TextInput
                      label={labels.abbreviation}
                      placeholder={placeholders.abbreviation}
                      help={helps.abbreviation}
                      error={errors.abbreviation}
                      maxLength={8}
                      required
                      {...field}
                    />
                  )}
                />
              </Box>
            </ContextContainer>
          </ContextContainer>
          <ContextContainer title={labels.credits}>
            <Controller
              name="useCreditSystem"
              control={control}
              render={({ field: { onChange, value, ref, ...field } }) => (
                <Switch
                  label={labels.creditSystem}
                  onChange={(e) => {
                    onChange(e);
                    setCreditSystem(!creditSystem);
                  }}
                  checked={value || false}
                  {...field}
                />
              )}
            />
            {!creditSystem && (
              <ContextContainer direction="row">
                <Controller
                  name="credits"
                  control={control}
                  render={({ field }) => (
                    <NumberInput defaultValue={0} min={0} label={labels.credits} {...field} />
                  )}
                />
                <Box></Box>
              </ContextContainer>
            )}
          </ContextContainer>
          <ContextContainer title={labels.groupsIDAbbrev} spacing={4}>
            <Controller
              name="useOneStudentGroup"
              control={control}
              render={({ field: { onChange, value, ref, ...field } }) => (
                <Switch
                  label={labels.oneStudentGroup}
                  onChange={(e) => {
                    onChange(e);
                    setOneStudentGroup(!oneStudentGroup);
                  }}
                  checked={value || false}
                  {...field}
                />
              )}
            />
            {!oneStudentGroup && (
              <>
                <Paragraph>{descriptions.maxGroupAbbreviation}</Paragraph>

                <Controller
                  name="maxGroupAbbreviation"
                  control={control}
                  rules={{
                    required: errorMessages.maxGroupAbbreviation?.required || 'Required Field',
                    min: 0,
                  }}
                  render={({ field }) => (
                    <ContextContainer direction="row" alignItems="center">
                      <NumberInput
                        defaultValue={0}
                        min={0}
                        label={labels.maxGroupAbbreviation}
                        help={helps.maxGroupAbbreviation}
                        required
                        {...field}
                      />
                      <Controller
                        name="maxGroupAbbreviationIsOnlyNumbers"
                        control={control}
                        render={({ field: { onChange, value, ...field } }) => (
                          <Checkbox
                            label={labels.maxGroupAbbreviationIsOnlyNumbers}
                            onChange={onChange}
                            checked={value}
                            {...field}
                          />
                        )}
                      />
                    </ContextContainer>
                  )}
                />
              </>
            )}
          </ContextContainer>

          <Stack fullWidth justifyContent="end">
            <Button type="submit" rightIcon={<ChevRightIcon height={20} width={20} />}>
              {labels.buttonNext}
            </Button>
          </Stack>
        </ContextContainer>
      </Box>
    </form>
  );
};

SetupBasicData.defaultProps = SETUP_BASIC_DATA_DEFAULT_PROPS;
SetupBasicData.propTypes = SETUP_BASIC_DATA_PROP_TYPES;

export { SetupBasicData };
