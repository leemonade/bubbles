import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mantine/core';
import { Title } from '../../typography/Title';
import { Text } from '../../typography/Text';
import { RadioGroup } from '../RadioGroup/';
import { ProfileSelectorStyles } from './ProfileSelector.styles';
import { Checkbox } from '../Checkbox/Checkbox';
import { Button } from '../Button/Button';
import { useForm, Controller } from 'react-hook-form';
import SchoolTeacherMaleIcon from '@bubbles-ui/icons/outline/SchoolTeacherMaleIcon';

export const PROFILE_SELECTOR_DEFAULT_PROPS = {
  name: 'John Doe',
  mainText: 'You have two profiles on leemons, please select the one with you want to access',
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
  secondText:
    'You can easily change later your profile by clicking on your avatar in the sidebar of the application',
  buttonLabel: 'Log in',
};
export const PROFILE_SELECTOR_PROP_TYPES = {
  name: PropTypes.string,
  mainText: PropTypes.string,
  onSubmit: PropTypes.func,
  radioGroupData: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
      icon: PropTypes.node,
    })
  ),
  checkBoxLabel: PropTypes.string,
  secondText: PropTypes.string,
  buttonLabel: PropTypes.string,
};

const ProfileSelector = ({
  name,
  mainText,
  radioGroupData,
  checkBoxLabel,
  secondText,
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
      <Box {...props} className={cx(classes.root, className)}>
        <Title className={classes.title}>Hi, {name}</Title>
        <Text className={classes.mainText} color="primary" size="md">
          {mainText}
        </Text>
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
        <Text className={classes.secondText}>{secondText}</Text>
        <Button className={classes.button} type="submit" fullWidth>
          {buttonLabel}
        </Button>
      </Box>
    </form>
  );
};

ProfileSelector.defaultProps = PROFILE_SELECTOR_DEFAULT_PROPS;

ProfileSelector.propTypes = PROFILE_SELECTOR_PROP_TYPES;

export { ProfileSelector };
