import PropTypes from 'prop-types';
import {
  Box,
  Stack,
  ContextContainer,
  Button,
  TextInput,
  RadioGroup,
} from '@bubbles-ui/components';
import {
  HyperlinkIcon,
  ExpandDiagonalIcon,
  FolderIcon,
  CloudUploadIcon,
} from '@bubbles-ui/icons/outline';
import { LinkModalStyles } from './LinkModal.styles';
import { Controller, useForm } from 'react-hook-form';
import isFunction from 'lodash/isFunction';
import { useState, cloneElement, useEffect } from 'react';
import { isValidURL } from '../../utils/';

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
  library: PropTypes.element,
  libraryOnChange: PropTypes.func,
  selectedText: PropTypes.string,
  onCancel: PropTypes.func,
  onChange: PropTypes.func,
};

const LinkModal = ({
  labels,
  placeholders,
  errorMessages,
  library,
  libraryOnChange,
  selectedText,
  onCancel,
  onChange,
  ...props
}) => {
  const [modal, setModal] = useState('one');
  const textValue = selectedText || '';

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm({ defaultValues: { text: textValue, link: '', library: null } });

  const watchInputs = watch(['text', 'link']);
  const watchLibrary = watch('library');

  const submitHandler = (values) => {
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
              validate: isValidURL ? '' : errorMessages.validURL || 'Link is not valid',
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
        return (
          <Controller
            name="library"
            control={control}
            render={({ field: { onChange, ref, ...field } }) =>
              cloneElement(library, {
                onChange: (value) => {
                  onChange(value);
                  libraryOnChange(value);
                },
                ...field,
              })
            }
          />
        );
    }
  };

  const submitCondition = () => {
    switch (modal) {
      case 'one':
        return !watchInputs[0] || !watchInputs[1];
      case 'three':
        return !watchInputs[0] || !watchLibrary;
      default:
        return true;
    }
  };

  useEffect(() => {
    setValue('text', selectedText);
  }, [selectedText]);

  const { classes } = LinkModalStyles({});
  return (
    <Box className={classes.root} {...props}>
      <Box className={classes.radioGroup}>
        <RadioGroup
          data={[
            { value: 'one', icon: <ExpandDiagonalIcon height={16} width={16} /> },
            { value: 'two', icon: <FolderIcon height={16} width={16} /> },
            { value: 'three', icon: <CloudUploadIcon height={16} width={16} /> },
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
              <Button size="xs" type="submit" disabled={submitCondition()}>
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
