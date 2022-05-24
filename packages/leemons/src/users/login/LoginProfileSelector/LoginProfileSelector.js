import React from 'react';
import PropTypes from 'prop-types';
import { Controller, useForm } from 'react-hook-form';
import {
  Box,
  Button,
  Checkbox,
  ContextContainer,
  Paragraph,
  RadioGroup,
  Select,
} from '@bubbles-ui/components';
import { LoginProfileSelectorStyles } from './LoginProfileSelector.styles';
import { find } from 'lodash';

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
  centers: PropTypes.any,
  onSubmit: PropTypes.func,
  loading: PropTypes.bool,
};

const LoginProfileSelector = ({
  labels,
  centers,
  className,
  onSubmit,
  loading,
  errorMessages,
  defaultValues: _defaultValues,
  ...props
}) => {
  const [profiles, setProfiles] = React.useState(null);
  const { classes, cx } = LoginProfileSelectorStyles({}, { name: 'LoginProfileSelector' });

  const centersData = React.useMemo(() => {
    return centers.map((center) => {
      return {
        value: center.id,
        label: center.name,
      };
    });
  }, [centers]);

  function getCenterProfiles(centerId) {
    const center = find(centers, { id: centerId });
    return center.profiles.map((profile) => ({
      value: profile.id,
      label: profile.name,
    }));
  }

  let defaultValues = {};
  if (_defaultValues) {
    defaultValues = _defaultValues;
    if (!profiles) {
      setProfiles(getCenterProfiles(defaultValues.center));
    }
  } else if (centers.length === 1) {
    defaultValues.center = centers[0].id;
    if (!profiles) {
      setProfiles(getCenterProfiles(defaultValues.center));
    }
  }

  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ContextContainer title={labels.title} description={labels.description} {...props}>
        {centers.length > 1 ? (
          <Controller
            name="center"
            control={control}
            rules={{
              required: errorMessages.center?.required,
            }}
            render={({ field: { onChange, value, onBlur } }) => (
              <Select
                data={centersData}
                required
                placeholder={labels.centerPlaceholder}
                error={errors.center}
                onChange={(e) => {
                  const profiles = getCenterProfiles(e);
                  if (profiles.length < 2) {
                    setValue('profile', profiles[0].value);
                  }
                  setProfiles(profiles);
                  onChange(e);
                }}
                value={value}
                onBlur={onBlur}
              />
            )}
          />
        ) : null}

        {profiles?.length && profiles.length > 1 ? (
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
        ) : null}

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
