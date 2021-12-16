import React from 'react';
import PropTypes from 'prop-types';
import { Group, Select } from '@mantine/core';
import { AddCurriculumFormStyles } from './AddCurriculumForm.styles';
import { InputError, TextInput } from '../../../../form';
import { Controller, useForm } from 'react-hook-form';

export const ADD_CURRICULUM_FORM_MESSAGES = {
  nameLabel: 'Name',
  namePlaceholder: 'Enter name...',
  countryLabel: 'Country',
  countryPlaceholder: 'Select...',
  languageLabel: 'Language',
  centerLabel: 'Center',
  programLabel: 'Program',
  tagsLabel: 'Tags',
  tagsDescription: 'Enter tags separated by commas',
  descriptionLabel: 'Description',
  continueButtonLabel: 'Continue to setup',
};

export const ADD_CURRICULUM_FORM_ERROR_MESSAGES = {
  nameRequired: 'Field required',
  countryRequired: 'Field required',
};

const AddCurriculumForm = ({ messages, errorMessages, onSubmit }) => {
  const { classes, cx } = AddCurriculumFormStyles({});

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Group>
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
              error={<InputError error={'WOWOWOWOWO'} />}
              data={[
                { value: 'react', label: 'React' },
                { value: 'ng', label: 'Angular' },
                { value: 'svelte', label: 'Svelte' },
                { value: 'vue', label: 'Vue' },
              ]}
              {...field}
            />
          )}
        />
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
};

export { AddCurriculumForm };
