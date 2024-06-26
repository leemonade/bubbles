import React, { forwardRef } from 'react';
import { Modal as MantineModal } from '@mantine/core';
import { ModalStyles } from './Modal.styles';
import { MODAL_DEFAULT_PROPS, MODAL_PROP_TYPES } from './Modal.constants';

const Modal = forwardRef(({ centerTitle, empty, size, padding, ...props }, ref) => {
  const { classes, cx } = ModalStyles({ empty, centerTitle, size, padding }, { name: 'Modal' });

  return <MantineModal {...props} size={size} ref={ref} classNames={classes} />;
});

Modal.displayName = 'Modal';
Modal.defaultProps = MODAL_DEFAULT_PROPS;
Modal.propTypes = MODAL_PROP_TYPES;

export { Modal };
