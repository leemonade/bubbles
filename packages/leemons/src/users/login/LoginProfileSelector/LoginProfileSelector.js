import React from 'react';
import PropTypes from 'prop-types';
import { useForm, Controller } from 'react-hook-form';
import {
  Box,
  Paragraph,
  RadioGroup,
  Checkbox,
  Button,
  ContextContainer,
} from '@bubbles-ui/components';
import { LoginProfileSelectorStyles } from './LoginProfileSelector.styles';

export const LOGIN_PROFILE_SELECTOR_DEFAULT_PROPS = {
  labels: { title: '', description: '', help: '', remember: '', login: '' },
  errorMessages: {},
  loading: false,
  profiles: [],
};
export const LOGIN_PROFILE_SELECTOR_PROP_TYPES = {
  labels: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    help: PropTypes.string,
    remember: PropTypes.string,
    login: PropTypes.string,
  }),
  errorMessages: PropTypes.shape({ profile: PropTypes.any }),
  profiles: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
      icon: PropTypes.node,
    })
  ),
  onSubmit: PropTypes.func,
  loading: PropTypes.bool,
};

const LoginProfileSelector = ({
  labels,
  profiles,
  className,
  onSubmit,
  loading,
  errorMessages,
  ...props
}) => {
  const { classes, cx } = LoginProfileSelectorStyles({}, { name: 'LoginProfileSelector' });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ContextContainer title={labels.title} description={labels.description} {...props}>
        <Controller
          name="profile"
          control={control}
          rules={{
            required: errorMessages.profile?.required,
          }}
          render={({ field: { onChange, value, onBlur } }) => (
            <RadioGroup
              className={classes.radioGroup}
              variant="icon"
              data={profiles}
              fullWidth
              required
              error={errors.profile}
              onChange={onChange}
              value={value}
              onBlur={onBlur}
            />
          )}
        />

        <Controller
          name="remember"
          control={control}
          render={({ field: { onChange, value, ...field } }) => (
            <Checkbox
              className={classes.checkBox}
              label={labels.remember}
              onChange={onChange} // send value to hook form
              checked={value}
              {...field}
            />
          )}
        />
        <Paragraph color="secondary" className={classes.lowerHelp}>
          {labels.help}
        </Paragraph>
        <Box>
          <Button type="submit" fullWidth loading={loading} loaderPosition="right">
            {labels.login}
          </Button>
        </Box>
      </ContextContainer>
    </form>
  );
};

LoginProfileSelector.defaultProps = LOGIN_PROFILE_SELECTOR_DEFAULT_PROPS;
LoginProfileSelector.propTypes = LOGIN_PROFILE_SELECTOR_PROP_TYPES;

export { LoginProfileSelector };
