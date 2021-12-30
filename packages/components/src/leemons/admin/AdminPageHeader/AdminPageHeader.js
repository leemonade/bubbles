import React from 'react';
import PropTypes from 'prop-types';
import { isArray, isString, trim, isFunction, flatMap, isObject, capitalize } from 'lodash';
import { Box } from '@mantine/core';
import { useForm, Controller } from 'react-hook-form';
import { AddIcon } from '@bubbles-ui/icons/outline';
import { Stack, Divider, PageContainer, ContentLegible } from '../../../layout';
import { Breadcrumbs } from '../../../navigation';
import { Button, TextInput, Textarea } from '../../../form';
import { Title, Paragraph } from '../../../typography';
import { AdminPageHeaderStyles } from './AdminPageHeader.styles';
import { getErrorStyle } from '../../../form/mixins/fieldStyles.mixins';

const BUTTONS = {
  NEW: 'new',
  EDIT: 'edit',
  SAVE: 'save',
  CANCEL: 'cancel',
  DUPLICATE: 'duplicate',
};

export const ADMIN_PAGE_HEADER_BUTTONS = BUTTONS;
export const ADMIN_PAGE_HEADER_BUTTON_TYPES = flatMap(BUTTONS);

export const ADMIN_PAGE_HEADER_DEFAULT_PROPS = {
  separator: true,
  useRouter: false,
  editMode: false,
  labels: { title: '', description: '' },
  placeholders: { title: '', description: '' },
  values: { title: '', description: '' },
  buttons: { new: '', edit: '', cancel: '', duplicate: '' },
  isLoading: '',
};
export const ADMIN_PAGE_HEADER_PROP_TYPES = {
  className: PropTypes.string,
  breadcrumbs: PropTypes.array,
  editMode: PropTypes.bool,
  useRouter: PropTypes.bool,
  labels: PropTypes.shape({ title: PropTypes.string, description: PropTypes.string }),
  errors: PropTypes.shape({
    title: PropTypes.shape({ required: PropTypes.string }),
    description: PropTypes.shape({ required: PropTypes.string }),
  }),
  values: PropTypes.shape({ title: PropTypes.string, description: PropTypes.string }),
  placeholders: PropTypes.shape({ title: PropTypes.string, description: PropTypes.string }),
  buttons: PropTypes.shape({
    new: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    edit: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    cancel: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    duplicate: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  }),
  isLoading: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  onNew: PropTypes.func,
  onEdit: PropTypes.func,
  onSave: PropTypes.func,
  onButton: PropTypes.func,
  onCancel: PropTypes.func,
  onDuplicate: PropTypes.func,
};

const AdminPageHeader = ({
  className,
  breadcrumbs,
  labels,
  placeholders,
  errors: errorLabels,
  values,
  buttons,
  isLoading,
  editMode,
  onNew,
  onEdit,
  onSave,
  onCancel,
  onButton,
  onDuplicate,
  separator,
  useRouter,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // ····································································
  // HANDLERS

  const onPressButton = (btnFunction, e) => {
    if (isFunction(btnFunction)) {
      btnFunction(e);
    }
    if (isFunction(onButton)) {
      onButton(e);
    }
  };

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
    if (!isLoading) return false;
    return isLoading === buttonName;
  };

  const getErrorLabel = (field, rule, defaultLabel) => {
    if (!isObject(errorLabels)) return defaultLabel || '';
    if (!errorLabels[field]) return defaultLabel || '';
    if (!errorLabels[field][rule]) return defaultLabel || '';
    return errorLabels[field][rule];
  };

  const getInputLabel = (name) => {
    return getLabel(labels, name);
  };

  const getInputPlaceholder = (name) => {
    return getLabel(placeholders, name);
  };

  const getLabel = (collection, field) => {
    if (!isObject(collection)) return capitalize(field);
    if (!collection[field]) return capitalize(field);
    return collection[field];
  };

  // ····································································
  // STYLES

  const { classes, cx } = AdminPageHeaderStyles({ editMode }, { name: 'AdminPageHeader' });

  return (
    <form onSubmit={handleSubmit(onSave)}>
      <Box className={cx(classes.root, className)}>
        <PageContainer className={classes.section}>
          {/* Breadcrumbs */}
          {isArray(breadcrumbs) && (
            <Box className={classes.breadcrumbs}>
              <Breadcrumbs items={breadcrumbs} useRouter={useRouter} />
            </Box>
          )}

          {/* Header & Buttons */}
          <Stack spacing={4} alignItems={editMode ? 'end' : 'center'} className={classes.header}>
            {/* Header */}
            {!editMode && values && values.title && (
              <ContentLegible>
                <Title order={2}>{values.title}</Title>
              </ContentLegible>
            )}
            {editMode && (
              <ContentLegible>
                <Controller
                  name="title"
                  control={control}
                  rules={{
                    required: getErrorLabel('title', 'required', 'Required field'),
                  }}
                  render={({ field }) => (
                    <TextInput
                      label={getInputLabel('title')}
                      placeholder={getInputPlaceholder('title')}
                      error={errors?.title?.message}
                      required
                      {...field}
                    />
                  )}
                />
              </ContentLegible>
            )}
            {/* Buttons */}
            {buttons && (
              <Stack spacing={2} justifyContent="end" className={classes.actions}>
                {isNotEmpty(BUTTONS.CANCEL) && (
                  <Button
                    variant="light"
                    type="button"
                    loading={checkLoading(BUTTONS.CANCEL)}
                    onClick={(e) => onPressButton(onCancel, e)}
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
                  >
                    {buttonLabel(BUTTONS.DUPLICATE)}
                  </Button>
                )}
                {isNotEmpty(BUTTONS.EDIT) && (
                  <Button
                    type="button"
                    loading={checkLoading(BUTTONS.EDIT)}
                    onClick={(e) => onPressButton(onEdit, e)}
                  >
                    {buttonLabel(BUTTONS.EDIT)}
                  </Button>
                )}
                {isNotEmpty(BUTTONS.SAVE) && (
                  <Button
                    type="submit"
                    loading={checkLoading(BUTTONS.SAVE)}
                    onClick={(e) => onPressButton(onSave, e)}
                  >
                    {buttonLabel(BUTTONS.SAVE)}
                  </Button>
                )}

                {isNotEmpty(BUTTONS.NEW) && (
                  <Button
                    color="secondary"
                    type="button"
                    loading={checkLoading(BUTTONS.NEW)}
                    onClick={(e) => onPressButton(onNew, e)}
                    leftIcon={<AddIcon />}
                  >
                    {buttonLabel(BUTTONS.NEW)}
                  </Button>
                )}
              </Stack>
            )}
          </Stack>
        </PageContainer>

        {separator && (
          <PageContainer>
            <Divider />
          </PageContainer>
        )}

        <PageContainer className={classes.section}>
          {/* Description */}
          {!editMode && values && values.description && (
            <ContentLegible>
              <Paragraph>{values.description}</Paragraph>
            </ContentLegible>
          )}
          {editMode && (
            <ContentLegible>
              <Controller
                name="description"
                control={control}
                rules={{
                  required: getErrorLabel('description', 'required', 'Required field'),
                }}
                render={({ field }) => (
                  <Textarea
                    label={getInputLabel('description')}
                    placeholder={getInputPlaceholder('description')}
                    error={errors?.description?.message}
                    required
                    {...field}
                  />
                )}
              />
            </ContentLegible>
          )}
        </PageContainer>
      </Box>
    </form>
  );
};

AdminPageHeader.defaultProps = ADMIN_PAGE_HEADER_DEFAULT_PROPS;
AdminPageHeader.propTypes = ADMIN_PAGE_HEADER_PROP_TYPES;

export { AdminPageHeader };
