import React, { cloneElement, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  ContextContainer,
  RadioGroup,
  Select,
  Stack,
  TextInput,
} from '@bubbles-ui/components';
import {
  EditorLeftAlignIcon,
  EditorRightAlignIcon,
  EditorCenterAlignIcon,
} from '@bubbles-ui/icons/solid';
import { Controller, useForm } from 'react-hook-form';
import { isFunction } from 'lodash';
import { LinkModalStyles } from '../../form/LinkModal/LinkModal.styles';
import { TextEditorContext } from '../../form/TextEditorProvider';

export const LIBRARY_MODAL_DEFAULT_PROPS = {
  labels: {
    width: '',
    display: '',
    cancel: '',
    add: '',
  },
  placeholders: {
    width: '',
    display: '',
    cancel: '',
    add: '',
  },
  errorMessages: {},
};

export const LIBRARY_MODAL_PROP_TYPES = {
  labels: PropTypes.shape({
    width: PropTypes.string,
    display: PropTypes.string,
    cancel: PropTypes.string,
    add: PropTypes.string,
  }),
  placeholders: PropTypes.shape({}),
  errorMessages: PropTypes.shape({}),
  onCancel: PropTypes.func,
  onChange: PropTypes.func,
};

const LibraryModal = ({ labels, placeholders, errorMessages, onCancel, onChange, ...props }) => {
  const { libraryContent, library } = useContext(TextEditorContext);

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: { ...libraryContent },
  });

  const watchInputs = watch(['asset', 'width', 'display', 'align']);

  const submitCondition = () => {
    return !watchInputs[0]?.id || !watchInputs[1] || !watchInputs[2];
  };

  const submitHandler = (values) => {
    console.log('submitHandler > values:', values);
    isFunction(onChange) && onChange(values);
  };

  const onCancelHandler = () => {
    isFunction(onCancel) && onCancel();
  };

  const { classes } = LinkModalStyles({});
  return (
    <Box className={classes.root} {...props}>
      <Box className={classes.form}>
        <form onSubmit={handleSubmit(submitHandler)} autoComplete="off">
          <ContextContainer>
            <Controller
              name="asset"
              control={control}
              render={({ field }) =>
                cloneElement(library, {
                  ...field,
                })
              }
            />
            <Controller
              name="width"
              control={control}
              rules={{ required: errorMessages.width || 'Required field' }}
              render={({ field }) => (
                <TextInput
                  {...field}
                  label={labels.width}
                  placeholder={placeholders.width}
                  error={errors.width}
                />
              )}
            />
            <Controller
              name="display"
              control={control}
              rules={{ required: errorMessages.display || 'Required field' }}
              render={({ field }) => (
                <Select
                  {...field}
                  label={labels.display}
                  placeholder={placeholders.display}
                  error={errors.display}
                  data={[
                    { label: 'Card', value: 'card' },
                    { label: 'Embed', value: 'embed' },
                    { label: 'Player', value: 'player' },
                  ]}
                />
              )}
            />
            <Controller
              name="align"
              control={control}
              rules={{ required: errorMessages.align || 'Required field' }}
              render={({ field }) => (
                <RadioGroup
                  {...field}
                  variant="icon"
                  size="xs"
                  label={labels.align}
                  data={[
                    { value: 'left', icon: <EditorLeftAlignIcon /> },
                    { value: 'center', icon: <EditorCenterAlignIcon /> },
                    { value: 'right', icon: <EditorRightAlignIcon /> },
                  ]}
                />
              )}
            />
            <Stack fullWidth justifyContent="space-between" className={classes.buttonRow}>
              <Button size="xs" variant="light" onClick={onCancelHandler}>
                {labels.cancel}
              </Button>
              <Button size="xs" type="submit" disabled={submitCondition()}>
                {libraryContent.editing ? labels.update : labels.add}
              </Button>
            </Stack>
          </ContextContainer>
        </form>
      </Box>
    </Box>
  );
};

LibraryModal.defaultProps = LIBRARY_MODAL_DEFAULT_PROPS;
LibraryModal.propTypes = LIBRARY_MODAL_PROP_TYPES;

export { LibraryModal };
