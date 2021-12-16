import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mantine/core';
import { ChevronRightIcon } from '@bubbles-ui/icons/outline';
import { useForm, Controller } from 'react-hook-form';
import { TextInput, PasswordInput, Button } from '../../form';
import { Anchor } from '../../navigation';
import { Text, Title } from '../../typography';
import { LoginFormStyles } from './LoginForm.styles';

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

const LoginForm = ({
  messages,
  errorMessages,
  formError,
  onSubmit,
  onValidationError,
  isLoading,
  recoverUrl,
  ...props
}) => {
  const { classes, cx } = LoginFormStyles({});

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box className={classes.root}>
        <Box mb={20}>
          <Title order={3}>{messages.title}</Title>
        </Box>

        {formError && <Text>{formError}</Text>}

        <Controller
          name="email"
          control={control}
          rules={{
            required: errorMessages.usernameRequired,
            pattern: {
              value: EMAIL_REGEX,
              message: errorMessages.usernameInvalidFormat,
            },
          }}
          render={({ field }) => (
            <TextInput
              label={messages.usernameLabel}
              placeholder={messages.usernamePlaceholder}
              error={errors.email}
              required
              {...field}
            />
          )}
        />

        <Box>
          <Controller
            name="password"
            control={control}
            rules={{
              required: errorMessages.passwordRequired,
            }}
            render={({ field }) => (
              <PasswordInput
                label={messages.passwordLabel}
                placeholder={messages.passwordPlaceholder}
                error={errors.password}
                required
                {...field}
              />
            )}
          />

          <Box mt={10}>
            <Anchor href={recoverUrl} color="secondary">
              {messages.rememberButtonLabel}
            </Anchor>
          </Box>
        </Box>

        <Button
          rounded
          size="xs"
          rightIcon={<ChevronRightIcon />}
          position="apart"
          loading={isLoading}
          loaderPosition="right"
          type="submit"
        >
          {messages.loginButtonLabel}
        </Button>

        <Button rounded variant="link" rightIcon={<ChevronRightIcon />} type="button">
          {messages.signupButtonLabel}
        </Button>
      </Box>
    </form>
  );
};

LoginForm.defaultProps = {
  messages: LOGIN_FORM_MESSAGES,
  errorMessages: LOGIN_FORM_ERROR_MESSAGES,
  recoverUrl: '#',
};

LoginForm.propTypes = {
  messages: PropTypes.any,
  errorMessages: PropTypes.any,
  formError: PropTypes.string,
  isLoading: PropTypes.bool,
  onSubmit: PropTypes.func,
  recoverUrl: PropTypes.string,
};

export { LoginForm };
