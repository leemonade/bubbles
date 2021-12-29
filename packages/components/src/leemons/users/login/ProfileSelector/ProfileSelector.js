import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mantine/core';
import { Title } from '../../../../typography/Title';
import { Paragraph } from '../../../../typography/Paragraph';
import { RadioGroup } from '../../../../form/RadioGroup';
import { ProfileSelectorStyles } from './ProfileSelector.styles';
import { Checkbox } from '../../../../form/Checkbox';
import { Button } from '../../../../form/Button';
import { Stack } from '../../../../layout/Stack';
import { useForm, Controller } from 'react-hook-form';
import SchoolTeacherMaleIcon from '@bubbles-ui/icons/outline/SchoolTeacherMaleIcon';

export const PROFILE_SELECTOR_DEFAULT_PROPS = {
  name: 'John Doe',
  description: 'You have two profiles on leemons, please select the one with you want to access',
  radioGroupData: [
    {
      value: 'teacher',
      label: 'Teacher',
      icon: <SchoolTeacherMaleIcon height={32} width={32} />,
    },
    {
      value: 'mother',
      label: 'Mother',
      icon: <SchoolTeacherMaleIcon height={32} width={32} />,
    },
  ],
  checkBoxLabel: 'Always use this profile for quick access',
  lowerHelp:
    'You can easily change later your profile by clicking on your avatar in the sidebar of the application',
  buttonLabel: 'Log in',
};
export const PROFILE_SELECTOR_PROP_TYPES = {
  name: PropTypes.string,
  description: PropTypes.string,
  onSubmit: PropTypes.func,
  radioGroupData: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
      icon: PropTypes.node,
    })
  ),
  checkBoxLabel: PropTypes.string,
  lowerHelp: PropTypes.string,
  buttonLabel: PropTypes.string,
};

const ProfileSelector = ({
  name,
  description,
  radioGroupData,
  checkBoxLabel,
  lowerHelp,
  className,
  buttonLabel,
  onSubmit,
  ...props
}) => {
  const { classes, cx } = ProfileSelectorStyles({}, { name: 'ProfileSelector' });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack direction="column" spacing={5} fullWidth>
        <Title className={classes.title} order={4}>
          Hi, {name}
        </Title>
        <Paragraph size="md" color="primary" className={classes.description}>
          {description}
        </Paragraph>
        <Controller
          name="selectedProfile"
          control={control}
          rules={{
            required: 'Please select a profile',
          }}
          render={({ field }) => (
            <RadioGroup
              className={classes.radioGroup}
              variant="icon"
              data={radioGroupData}
              fullWidth
              required
              error={errors.selectedProfile}
              {...field}
            />
          )}
        />
        <Controller
          name="checkbox"
          control={control}
          render={({ field }) => (
            <Checkbox className={classes.checkBox} label={checkBoxLabel} {...field} />
          )}
        />
        <Paragraph size="md" color="secondary" className={classes.lowerHelp}>
          {lowerHelp}
        </Paragraph>
        <Button className={classes.button} type="submit" fullWidth>
          {buttonLabel}
        </Button>
      </Stack>
    </form>
  );
};

ProfileSelector.defaultProps = PROFILE_SELECTOR_DEFAULT_PROPS;

ProfileSelector.propTypes = PROFILE_SELECTOR_PROP_TYPES;

export { ProfileSelector };
