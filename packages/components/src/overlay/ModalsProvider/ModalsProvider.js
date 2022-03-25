import React from 'react';
import { isFunction } from 'lodash';
import { ModalsProvider as MantineModalsProvider, useModals } from '@mantine/modals';
import { Button } from '../../form/Button';
import { ModalStyles } from '../Modal/Modal.styles';
import {
  MODALS_PROVIDER_DEFAULT_PROPS,
  MODALS_PROVIDER_PROP_TYPES,
} from './ModalsProvider.constants';
import { ModalProvider } from './context/ModalsContext';
import { Box, Stack } from '../../layout';

const ConfirmModal = ({ context, id, innerProps }) => {
  const {
    cancelProps,
    confirmProps,
    labels,
    closeOnConfirm = true,
    closeOnCancel = true,
    onCancel,
    onConfirm,
    children,
  } = innerProps;

  const handleCancel = (event) => {
    if (isFunction(cancelProps?.onClick)) cancelProps?.onClick(event);
    if (isFunction(onCancel)) onCancel();
    closeOnCancel && context.closeModal(id);
  };

  const handleConfirm = (event) => {
    if (isFunction(confirmProps?.onClick)) confirmProps?.onClick(event);
    if (isFunction(onConfirm)) onConfirm();
    closeOnConfirm && context.closeModal(id);
  };

  return (
    <>
      {children && <Box>{children}</Box>}

      <Stack fullWidth justifyContent="space-between">
        <Button variant="light" {...cancelProps} onClick={handleCancel}>
          {cancelProps?.children || labels.cancel}
        </Button>

        <Button {...confirmProps} onClick={handleConfirm}>
          {confirmProps?.children || labels.confirm}
        </Button>
      </Stack>
    </>
  );
};

const ModalsWrapper = ({ children }) => {
  const modals = useModals();

  const openConfirmModal = ({ title, ...innerProps }) => {
    return modals.openContextModal('confirm', { title, innerProps });
  };

  return <ModalProvider value={{ ...modals, openConfirmModal }}>{children}</ModalProvider>;
};

const ModalsProvider = ({ children, modals, modalProps }) => {
  const { classes } = ModalStyles({}, { name: 'Modal' });
  return (
    <MantineModalsProvider
      modals={{ ...modals, confirm: ConfirmModal }}
      modalProps={{
        centered: true,
        size: 'md',
        withCloseButton: false,
        ...modalProps,
        classNames: classes,
      }}
    >
      <ModalsWrapper>{children}</ModalsWrapper>
    </MantineModalsProvider>
  );
};

ModalsProvider.defaultProps = MODALS_PROVIDER_DEFAULT_PROPS;
ModalsProvider.propTypes = MODALS_PROVIDER_PROP_TYPES;

export { ModalsProvider };
