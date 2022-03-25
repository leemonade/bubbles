import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

export const ModalStyles = createStyles((theme, { centerTitle }) => {
  let titleProps = {};

  if (centerTitle) {
    titleProps = {
      flex: 1,
      textAlign: 'center',
    };
  }
  return {
    root: {},
    title: {
      ...getFontExpressive(theme.fontSizes[3], 500),
      ...titleProps,
    },
    modal: {
      padding: `${pxToRem(theme.spacing[4])} !important`,
      borderRadius: '2px !important',
      boxShadow: theme.shadows.shadow05,
    },
    overlay: {
      opacity: '0.25 !important',
    },
  };
});
