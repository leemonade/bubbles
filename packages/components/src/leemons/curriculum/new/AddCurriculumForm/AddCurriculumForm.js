import React from 'react';
import PropTypes from 'prop-types';
import { Box, Group } from '@mantine/core';
import { AddCurriculumFormStyles } from './AddCurriculumForm.styles';
import { Select, TextInput } from '../../../../form';
import { Controller, useForm } from 'react-hook-form';

export const ADD_CURRICULUM_FORM_MESSAGES = {
  nameLabel: 'Name',
  namePlaceholder: 'Enter name...',
  countryLabel: 'Country',
  countryPlaceholder: 'Select...',
  countryNothingFound: 'No data',
  languageLabel: 'Language',
  languagePlaceholder: 'Select...',
  languageNothingFound: 'No data',
  centerLabel: 'Center',
  centerPlaceholder: 'Select...',
  centerNothingFound: 'No data',
  programLabel: 'Program',
  programPlaceholder: 'Select...',
  programNothingFound: 'No data',
  tagsLabel: 'Tags',
  tagsDescription: 'Enter tags separated by commas',
  descriptionLabel: 'Description',
  continueButtonLabel: 'Continue to setup',
};

export const ADD_CURRICULUM_FORM_ERROR_MESSAGES = {
  nameRequired: 'Field required',
  countryRequired: 'Field required',
  languageRequired: 'Field required',
  centerRequired: 'Field required',
  programRequired: 'Field required',
};

const AddCurriculumForm = ({ messages, errorMessages, selectData = {}, onSubmit }) => {
  const { classes, cx } = AddCurriculumFormStyles({});

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Group grow>
        <Box>
          <Controller
            name="name"
            control={control}
            rules={{
              required: errorMessages.nameRequired,
            }}
            render={({ field }) => (
              <TextInput
                label={messages.nameLabel}
                placeholder={messages.namePlaceholder}
                error={errors.name}
                required
                {...field}
              />
            )}
          />
        </Box>
        <Box>
          <Controller
            name="country"
            control={control}
            rules={{
              required: errorMessages.countryRequired,
            }}
            render={({ field }) => (
              <Select
                label={messages.countryLabel}
                placeholder={messages.countryPlaceholder}
                required
                error={errors.country}
                data={selectData.country || []}
                nothingFound={messages.countryNothingFound}
                searchable
                {...field}
              />
            )}
          />
        </Box>
        <Box>
          <Controller
            name="language"
            control={control}
            rules={{
              required: errorMessages.languageRequired,
            }}
            render={({ field }) => (
              <Select
                label={messages.languageLabel}
                placeholder={messages.languagePlaceholder}
                required
                error={errors.language}
                data={selectData.language || []}
                nothingFound={messages.languageNothingFound}
                searchable
                {...field}
              />
            )}
          />
        </Box>
      </Group>

      <Group grow>
        <Box>
          <Controller
            name="center"
            control={control}
            rules={{
              required: errorMessages.centerRequired,
            }}
            render={({ field }) => (
              <Select
                label={messages.centerLabel}
                placeholder={messages.centerPlaceholder}
                required
                error={errors.center}
                data={selectData.center || []}
                nothingFound={messages.centerNothingFound}
                searchable
                {...field}
              />
            )}
          />
        </Box>
        <Box>
          <Controller
            name="program"
            control={control}
            rules={{
              required: errorMessages.programRequired,
            }}
            render={({ field }) => (
              <Select
                label={messages.programLabel}
                placeholder={messages.programPlaceholder}
                required
                error={errors.program}
                data={selectData.program || []}
                nothingFound={messages.programNothingFound}
                searchable
                {...field}
              />
            )}
          />
        </Box>
        <Box></Box>
      </Group>
    </form>
  );
};

AddCurriculumForm.defaultProps = {
  messages: ADD_CURRICULUM_FORM_MESSAGES,
  errorMessages: ADD_CURRICULUM_FORM_ERROR_MESSAGES,
};

AddCurriculumForm.propTypes = {
  messages: PropTypes.any,
  errorMessages: PropTypes.any,
  selectData: PropTypes.shape({
    country: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.any,
        label: PropTypes.string,
      })
    ),
    language: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.any,
        label: PropTypes.string,
      })
    ),
    center: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.any,
        label: PropTypes.string,
      })
    ),
    program: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.any,
        label: PropTypes.string,
      })
    ),
  }),
};

export { AddCurriculumForm };
