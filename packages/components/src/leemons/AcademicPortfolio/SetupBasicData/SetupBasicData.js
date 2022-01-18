import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mantine/core';
import { useForm, Controller } from 'react-hook-form';
import { SetupBasicDataStyles } from './SetupBasicData.styles';
import { ContextContainer } from '../../../layout';
import { TextInput, Checkbox, NumberInput, Button, Switch } from '../../../form';
import { Text } from '../../../typography';
import { ChevRightIcon } from '@bubbles-ui/icons/outline';

export const SETUP_BASIC_DATA_DEFAULT_PROPS = {};
export const SETUP_BASIC_DATA_PROP_TYPES = {
  labels: PropTypes.shape({
    creditSystem: PropTypes.string,
    oneStudentGroup: PropTypes.string,
    totalCredits: PropTypes.string,
    groupsIDAbbrev: PropTypes.string,
    programAbbrev: PropTypes.string,
    buttonNext: PropTypes.string,
    buttonPrev: PropTypes.string,
  }),
  descriptions: PropTypes.shape({}),
  placeholders: PropTypes.shape({
    programName: PropTypes.string,
    programAbbrev: PropTypes.string,
  }),
  helps: PropTypes.shape({
    programAbbrev: PropTypes.string,
  }),
  errorMessages: PropTypes.shape({
    programName: PropTypes.any,
    programAbbrev: PropTypes.any,
  }),
  onNext: PropTypes.func,
};

const SetupBasicData = ({
  titles,
  labels,
  descriptions,
  placeholders,
  helps,
  errorMessages,
  onNext,
  ...props
}) => {
  const { classes, cx } = SetupBasicDataStyles({});

  const [creditSystem, setCreditSystem] = useState(false);
  const [oneStudentGroup, setOneStudentGroup] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const headerInputStyle = { width: '30%' };

  return (
    <form onSubmit={handleSubmit(onNext)}>
      <ContextContainer {...props}>
        <Controller
          control={control}
          name="programName"
          rules={{
            required: errorMessages.programName?.required,
          }}
          render={({ field }) => (
            <TextInput
              placeholder={placeholders.programName}
              error={errors.programName}
              required
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="programAbbrev"
          rules={{
            required: errorMessages.programAbbrev?.required,
          }}
          render={({ field }) => (
            <TextInput
              headerStyle={headerInputStyle}
              orientation="horizontal"
              label={labels.programAbbrev}
              placeholder={placeholders.programAbbrev}
              help={helps.programAbbrev}
              error={errors.programAbbrev}
              maxLength={8}
              required
              {...field}
            />
          )}
        />
        <ContextContainer title={labels.totalCredits}>
          <Controller
            name="creditSystem"
            control={control}
            render={({ field: { onChange, value, ...field } }) => (
              <Switch
                label={labels.creditSystem}
                onChange={(e) => {
                  onChange(e);
                  setCreditSystem(!creditSystem);
                }}
                checked={value}
                {...field}
              />
            )}
          />
          {!creditSystem && (
            <Controller
              name="totalCredits"
              control={control}
              render={({ field }) => (
                <NumberInput
                  headerStyle={headerInputStyle}
                  orientation="horizontal"
                  defaultValue={0}
                  label={labels.totalCredits}
                  {...field}
                />
              )}
            />
          )}
        </ContextContainer>
        <ContextContainer title={labels.groupsIDAbbrev} spacing={4}>
          <Controller
            name="onlyOneGroup"
            control={control}
            render={({ field: { onChange, value, ...field } }) => (
              <Switch
                label={labels.onlyOneGroup}
                onChange={(e) => {
                  onChange(e);
                  setOneStudentGroup(!oneStudentGroup);
                }}
                checked={value}
                {...field}
              />
            )}
          />
          {!oneStudentGroup && (
            <>
              <Text>{descriptions.groupsIDAbbrev}</Text>
              <Controller
                name="maxAbbrevGroups"
                control={control}
                render={({ field }) => (
                  <Box>
                    <NumberInput
                      headerStyle={headerInputStyle}
                      orientation="horizontal"
                      defaultValue={0}
                      label={labels.maxAbbrevGroups}
                      description={descriptions.maxAbbrevGroups}
                      help={helps.maxAbbrevGroups}
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
                            disabled={oneStudentGroup}
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
