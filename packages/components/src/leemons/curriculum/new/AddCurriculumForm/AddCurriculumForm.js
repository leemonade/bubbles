import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mantine/core';
import { AddCurriculumFormStyles } from './AddCurriculumForm.styles';

export const LOGIN_FORM_MESSAGES = {
  title: 'Login to your account',
  usernameLabel: 'Email',
  usernamePlaceholder: 'Your email',
  passwordLabel: 'Password',
  passwordPlaceholder: 'Your password',
  rememberButtonLabel: "I can't remember my password",
  loginButtonLabel: 'Log in',
  signupButtonLabel: 'I am not registered',
};

export const LOGIN_FORM_ERROR_MESSAGES = {
  usernameRequired: 'Field required',
  usernameInvalidFormat: 'Invalid format',
  passwordRequired: 'Field required',
};

const EMAIL_REGEX =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const AddCurriculumForm = ({
  messages,
  errorMessages,
  formError,
  onSubmit,
  onValidationError,
  isLoading,
  recoverUrl,
  ...props
}) => {
  const { classes, cx } = AddCurriculumFormStyles({});

  return <Box></Box>;
};

AddCurriculumForm.defaultProps = {
  messages: LOGIN_FORM_MESSAGES,
};

AddCurriculumForm.propTypes = {
  messages: PropTypes.any,
};

export { AddCurriculumForm };
