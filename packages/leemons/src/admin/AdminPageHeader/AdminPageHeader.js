import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Controller, useForm } from 'react-hook-form';
import { capitalize, isArray, isFunction, isObject, isString, trim } from 'lodash';
import {
  Box,
  Breadcrumbs,
  Button,
  ContentLegible,
  Divider,
  PageContainer,
  Paragraph,
  Stack,
  Textarea,
  TextInput,
  Title,
  useResizeObserver,
} from '@bubbles-ui/components';
import { AddIcon } from '@bubbles-ui/icons/outline';
import { AdminPageHeaderStyles } from './AdminPageHeader.styles';
import {
  ADMIN_PAGE_HEADER_BUTTONS as BUTTONS,
  ADMIN_PAGE_HEADER_PROP_TYPES,
  ADMIN_PAGE_HEADER_DEFAULT_PROPS,
} from './AdminPageHeader.constants';

const AdminPageHeader = ({
  className,
  breadcrumbs,
  labels,
  placeholders,
  errors: errorLabels,
  values,
  buttons,
  loading,
  icon,
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
  variant,
  onResize = () => {},
}) => {
  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const isTeacher = useMemo(() => variant === 'teacher', [variant]);

  const [containerRef, containerRect] = useResizeObserver();
  const [childRef, childRect] = useResizeObserver();

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

  useEffect(() => onResize(childRect), [childRect]);

  // ····································································
  // STYLES

  const { classes, cx } = AdminPageHeaderStyles(
    { editMode, isTeacher },
    { name: 'AdminPageHeader' }
  );

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
            {!isTeacher && isArray(breadcrumbs) && (
              <Box className={classes.breadcrumbs}>
                <Breadcrumbs items={breadcrumbs} useRouter={useRouter} />
              </Box>
            )}

            {/* Header & Buttons */}
            <Stack spacing={4} alignItems={editMode ? 'end' : 'center'} className={classes.header}>
              {/* Icon */}
              {icon && <Box className={classes.icon}>{icon}</Box>}
              {/* Header */}
              {!editMode && values && values.title && (
                <ContentLegible>
                  <Title order={isTeacher ? 2 : 1} className={classes.title}>
                    {values.title}
                  </Title>
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
          {!isTeacher && separator && (
            <PageContainer>
              <Divider />
            </PageContainer>
          )}
        </Box>

        {!isTeacher && values && values.description ? (
          <PageContainer style={{ marginTop: childRect.height }} className={classes.section}>
            {/* Description */}
            {!editMode && (
              <ContentLegible>
                <Paragraph dangerouslySetInnerHTML={{ __html: values.description }} />
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
