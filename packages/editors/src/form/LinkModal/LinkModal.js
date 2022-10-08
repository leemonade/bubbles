import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, ContextContainer, Stack, TextInput } from '@bubbles-ui/components';
import { HyperlinkIcon } from '@bubbles-ui/icons/outline';
import { LinkModalStyles } from './LinkModal.styles';
import { Controller, useForm } from 'react-hook-form';
import { isFunction } from 'lodash';
import { isValidURL } from '../../utils/';
import { useContext } from 'react';
import { TextEditorContext } from '../TextEditorProvider';

export const LINKMODAL_DEFAULT_PROPS = {
  labels: {
    text: '',
    link: '',
    cancel: '',
    add: '',
  },
  placeholders: {
    title: '',
    url: '',
    cancel: '',
    add: '',
  },
  errorMessages: {
    text: '',
    link: '',
  },
};

export const LINKMODAL_PROP_TYPES = {
  labels: PropTypes.shape({
    text: PropTypes.string,
    link: PropTypes.string,
    cancel: PropTypes.string,
    add: PropTypes.string,
  }),
  placeholders: PropTypes.shape({
    text: PropTypes.string,
    link: PropTypes.string,
  }),
  errorMessages: PropTypes.shape({
    text: PropTypes.string,
    link: PropTypes.string,
    validURL: PropTypes.string,
  }),
  selectedText: PropTypes.string,
  onCancel: PropTypes.func,
  onChange: PropTypes.func,
  useCase: PropTypes.string,
};

const LinkModal = ({
  labels,
  placeholders,
  errorMessages,
  selectedText,
  onCancel,
  onChange,
  useCase,
  ...props
}) => {
  const { link } = useContext(TextEditorContext);
  const textValue = selectedText || link?.text || '';

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: { text: textValue, link: link?.href || '' } });

  const watchInputs = watch(['text', 'link']);

  const submitCondition = () => {
    return !watchInputs[0] || !watchInputs[1];
  };

  const submitHandler = (values) => {
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
              name="text"
              control={control}
              rules={{ required: errorMessages.text || 'Required field' }}
              render={({ field }) => (
                <TextInput
                  label={labels.text}
                  placeholder={placeholders.text}
                  error={errors.text}
                  {...field}
                />
              )}
            />
            <Controller
              name="link"
              control={control}
              rules={{
                required: errorMessages.link || 'Required field',
                validate: (value) =>
                  isValidURL(value) ? undefined : errorMessages.validURL || 'Link is not valid',
              }}
              render={({ field }) => (
                <TextInput
                  label={labels.link}
                  placeholder={placeholders.link}
                  error={errors.link}
                  rightSection={<HyperlinkIcon />}
                  {...field}
                />
              )}
            />
            <Stack fullWidth justifyContent="space-between" className={classes.buttonRow}>
              <Button size="xs" variant="light" onClick={onCancelHandler}>
                {labels.cancel}
              </Button>
              <Button size="xs" type="submit" disabled={submitCondition()}>
                {link.editing ? labels.update : labels.add}
              </Button>
            </Stack>
          </ContextContainer>
        </form>
      </Box>
    </Box>
  );
};

LinkModal.defaultProps = LINKMODAL_DEFAULT_PROPS;
LinkModal.propTypes = LINKMODAL_PROP_TYPES;

export { LinkModal };
