import { createStyles } from '@mantine/styles';
import { ModalTitle, buttonsGroup02, ModalBody, ModalDescription } from '../../commons.mixins';


export const DeleteConfirmationStyles = createStyles((theme) => {
  return {
    modal: {
      padding: '0px',
    },
    Modalbody: {
      ...ModalBody(theme),
    },
    title: { ...ModalTitle(theme) },
    description: { ...ModalDescription(theme) },
    buttonsGroup02: { ...buttonsGroup02(theme) },
  };
});
