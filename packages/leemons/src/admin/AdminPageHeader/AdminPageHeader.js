import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useForm, Controller } from 'react-hook-form';
import { isArray, isString, trim, isFunction, flatMap, isObject, capitalize } from 'lodash';
import {
  Box,
  useResizeObserver,
  Stack,
  Divider,
  PageContainer,
  ContentLegible,
  Breadcrumbs,
  Button,
  TextInput,
  Textarea,
  Title,
  Paragraph,
} from '@bubbles-ui/components';
import { AddIcon } from '@bubbles-ui/icons/outline';
import { AdminPageHeaderStyles } from './AdminPageHeader.styles';

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
  loading: '',
  required: { title: true, description: false },
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
  required: PropTypes.shape({ title: PropTypes.bool, description: PropTypes.bool }),
  loading: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
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
  loading,
  editMode,
  onNew,
  onEdit,
  onSave,
  onCancel,
  onButton,
  onDuplicate,
  separator,
  useRouter,
  required,
}) => {
  const {
    control,
    setValue,
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
    if (!loading) return false;
    return loading === buttonName;
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
  // UPDATES

  useEffect(() => {
    setValue('title', values?.title || '');
    setValue('description', values?.description || '');
  }, [values]);

  // ····································································
  // STYLES

  const [containerRef, containerRect] = useResizeObserver();
  const [childRef, childRect] = useResizeObserver();

  const { classes, cx } = AdminPageHeaderStyles({ editMode }, { name: 'AdminPageHeader' });

  return (
    <form onSubmit={handleSubmit(onSave)}>
      <Box ref={containerRef} className={cx(classes.root, className)}>
        <Box
          ref={childRef}
          style={{
            width: containerRect.width,
            top: containerRect.top,
            // left: containerRect.left,
          }}
          className={classes.headerContainer}
        >
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
                  <Title order={1}>{values.title}</Title>
                </ContentLegible>
              )}
              {editMode && (
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
                    render={({ field }) => (
                      <TextInput
                        label={getInputLabel('title')}
                        placeholder={getInputPlaceholder('title')}
                        error={errors?.title?.message}
                        required={required.title}
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
                    <Button type="submit" loading={checkLoading(BUTTONS.SAVE)}>
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
        </Box>

        {values && values.description ? (
          <PageContainer style={{ marginTop: childRect.height }} className={classes.section}>
            {/* Description */}
            {!editMode && (
              <ContentLegible>
                <Paragraph>{values.description}</Paragraph>
              </ContentLegible>
            )}
            {editMode && (
              <ContentLegible>
                <Controller
                  name="description"
                  control={control}
                  defaultValue={values?.description || ''}
                  rules={{
                    required: required.description
                      ? getErrorLabel('description', 'required', 'Required field')
                      : false,
                  }}
                  render={({ field }) => (
                    <Textarea
                      label={getInputLabel('description')}
                      placeholder={getInputPlaceholder('description')}
                      error={errors?.description?.message}
                      required={required.description}
                      {...field}
                    />
                  )}
                />
              </ContentLegible>
            )}
          </PageContainer>
        ) : (
          <PageContainer style={{ marginTop: childRect.height }} />
        )}
      </Box>
    </form>
  );
};

AdminPageHeader.defaultProps = ADMIN_PAGE_HEADER_DEFAULT_PROPS;
AdminPageHeader.propTypes = ADMIN_PAGE_HEADER_PROP_TYPES;

export { AdminPageHeader };
