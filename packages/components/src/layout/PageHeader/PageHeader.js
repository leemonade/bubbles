import React from 'react';
import { PageHeaderStyles } from './PageHeader.styles';
import {
  PAGE_HEADER_DEFAULT_PROPS,
  PAGE_HEADER_PROP_TYPES,
  PAGE_HEADER_BUTTONS as BUTTONS,
} from './PageHeader.constants';
import { AddIcon } from '@bubbles-ui/icons/outline';
import { Box } from '../Box';
import { Text, Title } from '../../typography';
import { Stack } from '../Stack';
import { isEmpty, isFunction, isObject, isString, trim } from 'lodash';
import { Button } from '../../form';

const PageHeader = ({
  values,
  labels,
  errors,
  placeholders,
  required,
  icon,
  withDivider,
  buttons,
  loading,
  onNew,
  onEdit,
  onSave,
  onCancel,
  onButton,
  onDuplicate,
  fullWidth,
  ...props
}) => {
  const { classes, cx } = PageHeaderStyles({ withDivider }, { name: 'PageHeader' });

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

  const onPressButton = (btnFunction, e) => {
    if (isFunction(btnFunction)) {
      btnFunction(e);
    }
    if (isFunction(onButton)) {
      onButton(e);
    }
  };

  return (
    <Stack className={classes.root} direction="column" fullWidth={fullWidth}>
      <Stack className={classes.header} justifyContent="space-between">
        <Stack className={classes.titleContainer}>
          {icon && <Box className={classes.iconContainer}>{icon}</Box>}
          {!isEmpty(values.title) && <Title className={classes.title}>{values.title}</Title>}
        </Stack>
        {/* <PluginScoresBasic /> */}
        <Box className={classes.buttonContainer}>
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
              type="button"
              loading={checkLoading(BUTTONS.NEW)}
              onClick={(e) => onPressButton(onNew, e)}
              leftIcon={<AddIcon />}
            >
              {buttonLabel(BUTTONS.NEW)}
            </Button>
          )}
        </Box>
      </Stack>
      {!isEmpty(values.description) && (
        <Text className={classes.description}>{values.description}</Text>
      )}
    </Stack>
  );
};

PageHeader.defaultProps = PAGE_HEADER_DEFAULT_PROPS;
PageHeader.propTypes = PAGE_HEADER_PROP_TYPES;

export { PageHeader };
