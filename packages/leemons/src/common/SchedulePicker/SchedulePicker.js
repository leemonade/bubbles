import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { SchedulePickerStyles } from './SchedulePicker.styles';
import {
  Input,
  InputWrapper,
  useId,
  INPUT_WRAPPER_SIZES,
  INPUT_WRAPPER_ORIENTATIONS,
  Badge,
  Popover,
  TimeInput,
  CheckBoxGroup,
  Checkbox,
  Box,
} from '@bubbles-ui/components';
import { PluginCalendarIcon } from '@bubbles-ui/icons/outline';

export const SCHEDULE_PICKER_DEFAULT_PROPS = {
  locale: 'es',
};
export const SCHEDULE_PICKER_PROP_TYPES = {
  labels: PropTypes.object,
  description: PropTypes.string,
  placeholders: PropTypes.object,
  helps: PropTypes.object,
  errorMessages: PropTypes.object,
  locale: PropTypes.string,
  size: PropTypes.oneOf(INPUT_WRAPPER_SIZES),
  orientation: PropTypes.oneOf(INPUT_WRAPPER_ORIENTATIONS),
  headerClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  headerStyle: PropTypes.any,
  contentStyle: PropTypes.any,
  required: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
};

const SchedulePicker = ({
  error,
  size,
  labels,
  description,
  placeholders,
  helps,
  errorMessages,
  locale,
  ...props
}) => {
  const { classes, cx } = SchedulePickerStyles({}, { name: 'SchedulePicker' });

  const [openForm, setOpenForm] = useState(false);
  const inputRef = useRef(null);

  const uuid = useId();
  return (
    <InputWrapper
      {...props}
      label={labels.inputWrapper}
      description={description}
      help={helps.inputWrapper}
      uuid={uuid}
      size={size}
      error={error}
    >
      <Box>
        <Popover
          opened={openForm}
          width={260}
          position={'bottom'}
          target={
            <Input
              size={size}
              icon={<PluginCalendarIcon />}
              component={'div'}
              onClick={() => {
                inputRef.current.focus();
                setOpenForm(!openForm);
              }}
            >
              <Box className={classes.wrapper}>
                <Box className={classes.values}></Box>
                <input ref={inputRef} className={classes.input} placeholder={placeholders.input} />
              </Box>
            </Input>
          }
        />
      </Box>
    </InputWrapper>
  );
};

SchedulePicker.defaultProps = SCHEDULE_PICKER_DEFAULT_PROPS;
SchedulePicker.propTypes = SCHEDULE_PICKER_PROP_TYPES;

export { SchedulePicker };
