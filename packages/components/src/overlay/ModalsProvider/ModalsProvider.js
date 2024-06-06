import React from 'react';
import PropTypes from 'prop-types';
import { isFunction } from 'lodash';
import { ModalsProvider as MantineModalsProvider, useModals } from '@mantine/modals';
import { Button } from '../../form/Button';
import { ModalStyles } from '../Modal/Modal.styles';
import {
  MODALS_PROVIDER_DEFAULT_PROPS,
  MODALS_PROVIDER_PROP_TYPES,
} from './ModalsProvider.constants';
import { ModalProvider } from './context/ModalsContext';
import { Box } from '../../layout/Box';
import { Stack } from '../../layout/Stack';

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
    if (closeOnCancel) context.closeModal(id);
  };

  const handleConfirm = (event) => {
    if (isFunction(confirmProps?.onClick)) confirmProps?.onClick(event);
    if (isFunction(onConfirm)) onConfirm();
    if (closeOnConfirm) context.closeModal(id);
  };

  return (
    <Stack direction="column" spacing={4} fullWidth>
      {children && <Box>{children}</Box>}
      <Stack fullWidth justifyContent="space-between">
        <Button variant="link" {...cancelProps} onClick={handleCancel}>
          {cancelProps?.children || labels.cancel}
        </Button>
        <Button {...confirmProps} onClick={handleConfirm}>
          {confirmProps?.children || labels.confirm}
        </Button>
      </Stack>
    </Stack>
  );
};

ConfirmModal.propTypes = {
  context: PropTypes.any,
  id: PropTypes.any,
  innerProps: PropTypes.any,
};

const ModalsWrapper = ({ children }) => {
  const modals = useModals();

  const openConfirmModal = ({ title, ...innerProps }) =>
    modals.openContextModal('confirm', { title, innerProps });

  return <ModalProvider value={{ ...modals, openConfirmModal }}>{children}</ModalProvider>;
};

ModalsWrapper.propTypes = {
  children: MODALS_PROVIDER_PROP_TYPES.children,
};

const ModalsProvider = ({ children, modals, modalProps }) => {
  const { classes } = ModalStyles({ size: modalProps?.size }, { name: 'Modal' });
  return (
    <MantineModalsProvider
      modals={{ ...modals, confirm: ConfirmModal }}
      modalProps={{
        centered: true,
        // size: 'md',
        withCloseButton: false,
        ...modalProps,
        classNames: classes,
      }}
    >
      <ModalsWrapper>{children}</ModalsWrapper>
    </MantineModalsProvider>
  );
};

ModalsProvider.displayName = 'ModalsProvider';
ModalsProvider.defaultProps = MODALS_PROVIDER_DEFAULT_PROPS;
ModalsProvider.propTypes = MODALS_PROVIDER_PROP_TYPES;

export { ModalsProvider };
