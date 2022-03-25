import React, { forwardRef } from 'react';
import { Modal as MantineModal } from '@mantine/core';
import { ModalStyles } from './Modal.styles';
import { MODAL_DEFAULT_PROPS, MODAL_PROP_TYPES } from './Modal.constants';

const Modal = forwardRef(({ centerTitle, ...props }, ref) => {
  const { classes, cx } = ModalStyles({ centerTitle }, { name: 'Modal' });

  return <MantineModal {...props} ref={ref} classNames={classes} />;
});

Modal.defaultProps = MODAL_DEFAULT_PROPS;
Modal.propTypes = MODAL_PROP_TYPES;

export { Modal };
