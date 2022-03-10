import PropTypes from 'prop-types';
import {
  Box,
  Stack,
  ContextContainer,
  Button,
  TextInput,
  RadioGroup,
  Switch,
} from '@bubbles-ui/components';
import {
  HyperlinkIcon,
  ExpandDiagonalIcon,
  FolderIcon,
  CloudUploadIcon,
  QrCodeScanIcon,
} from '@bubbles-ui/icons/outline';
import { LinkModalStyles } from './LinkModal.styles';
import { Controller, useForm } from 'react-hook-form';
import { isFunction } from 'lodash';
import { useState } from 'react';

export const LINKMODAL_DEFAULT_PROPS = {
  labels: {
    text: '',
    link: '',
    switch: '',
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
    switch: PropTypes.string,
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
  onCancel: PropTypes.func,
  onChange: PropTypes.func,
};

const LinkModal = ({ labels, placeholders, errorMessages, onCancel, onChange, ...props }) => {
  const [modal, setModal] = useState('one');

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: { text: '', link: '', embed: false } });

  const watchInputs = watch(['text', 'link']);

  const isValidURL = (string) => {
    let url;
    try {
      url = new URL(string);
    } catch (_) {
      return errorMessages.validURL || 'Link is not valid';
    }
    return url.protocol === 'http:' || url.protocol === 'https:';
  };

  const submitHandler = (values) => {
    if (modal !== 'four') delete values.embed;
    isFunction(onChange) && onChange(values);
  };

  const onCancelHandler = () => {
    isFunction(onCancel) && onCancel();
  };

  const getWidgetForm = () => {
    switch (modal) {
      case 'one':
        return (
          <Controller
            name="link"
            control={control}
            rules={{
              required: errorMessages.link || 'Required field',
              validate: isValidURL,
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
        );
      case 'two':
        return <Box>WIP</Box>;
      case 'three':
        return <Box>WIP</Box>;
      case 'four':
        return (
          <Stack direction="column" spacing={3}>
            <Controller
              name="link"
              control={control}
              rules={{
                required: errorMessages.link || 'Required field',
                validate: isValidURL,
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
            <Controller
              name="embed"
              control={control}
              render={({ field }) => (
                <Switch label={labels.switch} className={classes.switch} {...field} />
              )}
            />
          </Stack>
        );
    }
  };

  const { classes } = LinkModalStyles({});
  return (
    <Box className={classes.root} {...props}>
      <Box className={classes.radioGroup}>
        <RadioGroup
          data={[
            { value: 'one', icon: <ExpandDiagonalIcon height={16} width={16} /> },
            { value: 'two', icon: <FolderIcon height={16} width={16} /> },
            { value: 'three', icon: <CloudUploadIcon height={16} width={16} /> },
            { value: 'four', icon: <QrCodeScanIcon height={16} width={16} /> },
          ]}
          variant={'icon'}
          fullWidth
          value={modal}
          onChange={setModal}
        ></RadioGroup>
      </Box>
      <Box className={classes.form}>
        <form onSubmit={handleSubmit(submitHandler)}>
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
            {getWidgetForm()}
            <Stack fullWidth justifyContent="space-between" className={classes.buttonRow}>
              <Button size="xs" variant="light" onClick={onCancelHandler}>
                {labels.cancel}
              </Button>
              <Button size="xs" type="submit" disabled={!watchInputs[0] || !watchInputs[1]}>
                {labels.add}
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
