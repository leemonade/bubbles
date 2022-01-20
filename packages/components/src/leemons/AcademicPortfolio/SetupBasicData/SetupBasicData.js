import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mantine/core';
import { useForm, Controller } from 'react-hook-form';
import { SetupBasicDataStyles } from './SetupBasicData.styles';
import { ContextContainer } from '../../../layout';
import { TextInput, Checkbox, NumberInput, Button, Switch } from '../../../form';
import { Text } from '../../../typography';
import { ChevRightIcon } from '@bubbles-ui/icons/outline';
import { isFunction } from 'lodash';

export const SETUP_BASIC_DATA_DEFAULT_PROPS = {};
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
  const { classes, cx } = SetupBasicDataStyles({});

  const [creditSystem, setCreditSystem] = useState(false);
  const [oneStudentGroup, setOneStudentGroup] = useState(false);

  const defaultValues = {
    name: '',
    abbreviation: '',
    credits: 0,
    maxGroupAbbreviation: 0,
    maxGroupAbbreviationIsOnlyNumbers: false,
    creditSystem: false,
    oneStudentGroup: false,
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const handleOnNext = (e) => {
    isFunction(setSharedData) && setSharedData({ ...sharedData, basicData: e });
    isFunction(onNext) && onNext(e);
  };

  return (
    <form onSubmit={handleSubmit(handleOnNext)}>
      <ContextContainer {...props}>
        <Controller
          control={control}
          name="name"
          rules={{ required: errorMessages.name?.required }}
          render={({ field }) => (
            <TextInput placeholder={placeholders.name} error={errors.name} required {...field} />
          )}
        />
        <Controller
          control={control}
          name="abbreviation"
          rules={{ required: errorMessages.abbreviation?.required, maxLength: 8, minLength: 1 }}
          render={({ field }) => (
            <TextInput
              orientation="horizontal"
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
            <Controller
              name="credits"
              control={control}
              render={({ field }) => (
                <NumberInput
                  orientation="horizontal"
                  defaultValue={0}
                  min={0}
                  label={labels.credits}
                  {...field}
                />
              )}
            />
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
              <Text>{descriptions.maxGroupAbbreviation}</Text>
              <Controller
                name="maxGroupAbbreviation"
                control={control}
                rules={{ required: errorMessages.maxGroupAbbreviation?.required, min: 0 }}
                render={({ field }) => (
                  <Box>
                    <NumberInput
                      orientation="horizontal"
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
                        <Box style={{ textAlign: 'right' }}>
                          <Checkbox
                            label={labels.maxGroupAbbreviationIsOnlyNumbers}
                            onChange={onChange}
                            checked={value}
                            {...field}
                          />
                        </Box>
                      )}
                    />
                  </Box>
                )}
              />
            </>
          )}
        </ContextContainer>
        <Box>
          <Box style={{ textAlign: 'right' }}>
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

SetupBasicData.defaultProps = SETUP_BASIC_DATA_DEFAULT_PROPS;
SetupBasicData.propTypes = SETUP_BASIC_DATA_PROP_TYPES;

export { SetupBasicData };
