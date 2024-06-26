import React, { useEffect } from 'react';
import { capitalize, isEmpty, isFunction, isObject, isString, trim } from 'lodash';
import { Controller, useForm } from 'react-hook-form';
import { AddIcon, ChevronLeftIcon } from '@bubbles-ui/icons/outline';
import { PageHeaderStyles } from './PageHeader.styles';
import {
  PAGE_HEADER_DEFAULT_PROPS,
  PAGE_HEADER_PROP_TYPES,
  PAGE_HEADER_BUTTONS as BUTTONS,
} from './PageHeader.constants';
import { Box } from '../Box';
import { Text, Title } from '../../typography';
import { Stack } from '../Stack';
import { Button } from '../../form/Button';
import { DropdownButton } from '../../form/DropdownButton';
import { ActionButton } from '../../form/ActionButton';
import { ContentLegible } from '../ContentLegible';
import { TitleTextInput } from './components/TitleTextInput/TitleTextInput';

const PageHeader = ({
  values,
  labels,
  errors: errorLabels,
  placeholders,
  required,
  icon,
  withDivider,
  buttons,
  buttonsIcons,
  loading,
  onChange,
  onNew,
  onEdit,
  onSave,
  onCancel,
  onButton,
  onDuplicate,
  onDropdown,
  onBack,
  isEditMode,
  fullWidth,
  showBackButton,
}) => {
  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // ····································································
  // HANDLERS

  const isNotEmpty = (buttonName) => {
    if (!isObject(buttons)) return false;

    const label = buttons[buttonName];

    if (label === true) return true;

    return isString(label) && trim(label) !== '';
  };

  const buttonLabel = (buttonName) => {
    const label = buttons[buttonName];
    return isString(label) ? label : capitalize(buttonName);
  };

  const checkLoading = (buttonName) => {
    if (!loading) return false;
    return loading === buttonName;
  };

  const getErrorLabel = (field, rule, defaultLabel) => {
    if (!isObject(errorLabels)) return defaultLabel || '';
    if (!errorLabels[field]) return defaultLabel || '';
    if (!errorLabels[field][rule]) return defaultLabel || '';
    return errorLabels[field][rule];
  };

  const getLabel = (collection, field) => {
    if (!isObject(collection)) return capitalize(field);
    if (!collection[field]) return capitalize(field);
    return collection[field];
  };

  const getInputPlaceholder = (name) => getLabel(placeholders, name);

  const onPressButton = (btnFunction, e) => {
    if (isFunction(btnFunction)) {
      btnFunction(e);
    }
    if (isFunction(onButton)) {
      onButton(e);
    }
  };

  const onChangeHandler = (value) => {
    if (isFunction(onChange)) onChange(value);
  };

  // ····································································
  // UPDATES

  useEffect(() => {
    setValue('title', values?.title || '');
    setValue('description', values?.description || '');
  }, [values]);

  // ····································································
  // STYLES

  const { classes, cx } = PageHeaderStyles({ withDivider, showBackButton }, { name: 'PageHeader' });

  return (
    <form onSubmit={handleSubmit(onSave)} autoComplete="off">
      <Stack className={classes.root} direction="column" fullWidth={fullWidth}>
        {showBackButton && (
          <Box className={classes.backButton}>
            <Stack fullWidth justifyContent="start">
              <ActionButton
                icon={<ChevronLeftIcon />}
                label={values.back}
                tooltip={values.back}
                onClick={onBack}
              />
            </Stack>
          </Box>
        )}
        <Stack className={classes.header} justifyContent="space-between">
          <Stack className={classes.titleContainer}>
            {icon && <Box className={classes.iconContainer}>{icon}</Box>}

            {!isEmpty(values.title) && !isEditMode && (
              <Title className={classes.title}>{values.title}</Title>
            )}
            {isEditMode && (
              <ContentLegible>
                <Controller
                  name="title"
                  control={control}
                  defaultValue={values?.title || ''}
                  rules={{
                    required: required.title
                      ? getErrorLabel('title', 'required', 'Required field')
                      : false,
                  }}
                  render={({ field: { ref, ...field } }) => (
                    <TitleTextInput
                      placeholder={getInputPlaceholder('title')}
                      error={errors?.title?.message}
                      required={required.title}
                      {...field}
                      onChange={(value) => {
                        field.onChange(value);
                        onChangeHandler(value);
                      }}
                    />
                  )}
                />
              </ContentLegible>
            )}
          </Stack>
          {/* <PluginScoresBasic /> */}
          <Box className={classes.buttonWrapper}>
            {isNotEmpty(BUTTONS.CANCEL) && (
              <Button
                variant="light"
                type="button"
                loading={checkLoading(BUTTONS.CANCEL)}
                onClick={(e) => onPressButton(onCancel, e)}
                leftIcon={buttonsIcons.cancel}
              >
                {buttonLabel(BUTTONS.CANCEL)}
              </Button>
            )}
            {isNotEmpty(BUTTONS.DUPLICATE) && (
              <Button
                variant="outline"
                type="button"
                loading={checkLoading(BUTTONS.DUPLICATE)}
                onClick={(e) => onPressButton(onDuplicate, e)}
                leftIcon={buttonsIcons.duplicate}
              >
                {buttonLabel(BUTTONS.DUPLICATE)}
              </Button>
            )}
            {isNotEmpty(BUTTONS.EDIT) && (
              <Button
                type="button"
                loading={checkLoading(BUTTONS.EDIT)}
                onClick={(e) => onPressButton(onEdit, e)}
                leftIcon={buttonsIcons.edit}
              >
                {buttonLabel(BUTTONS.EDIT)}
              </Button>
            )}
            {isNotEmpty(BUTTONS.SAVE) && (
              <Button
                type="submit"
                loading={checkLoading(BUTTONS.SAVE)}
                leftIcon={buttonsIcons.save}
              >
                {buttonLabel(BUTTONS.SAVE)}
              </Button>
            )}
            {isNotEmpty(BUTTONS.NEW) && (
              <Button
                type="button"
                loading={checkLoading(BUTTONS.NEW)}
                onClick={(e) => onPressButton(onNew, e)}
                leftIcon={buttonsIcons.new || <AddIcon />}
              >
                {buttonLabel(BUTTONS.NEW)}
              </Button>
            )}
            {isNotEmpty(BUTTONS.DROPDOWN) && (
              <DropdownButton
                type="button"
                loading={checkLoading(BUTTONS.DROPDOWN)}
                leftIcon={buttonsIcons.dropdown}
                data={onDropdown}
              >
                {buttonLabel(BUTTONS.DROPDOWN)}
              </DropdownButton>
            )}
          </Box>
        </Stack>
        {!isEmpty(values.description) && (
          <Text className={classes.description}>{values.description}</Text>
        )}
      </Stack>
    </form>
  );
};

PageHeader.defaultProps = PAGE_HEADER_DEFAULT_PROPS;
PageHeader.propTypes = PAGE_HEADER_PROP_TYPES;

export { PageHeader };
