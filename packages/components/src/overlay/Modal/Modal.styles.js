import { createStyles } from '@mantine/styles';
import { pxToRem, getFontExpressive } from '../../theme.mixins';

export const ModalStyles = createStyles((theme, { centerTitle, empty, size }) => {
  let titleProps = {};
  const header = {};

  const getModalSize = () => {
    if (!size) return 480;
    if (size === 'lg') return 480;
    if (size === 'md') return 255;
    return size;
  };

  if (empty) {
    header.position = 'absolute';
    header.right = 0;
    header.top = 0;
  }

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
    header,
    modal: {
      padding: empty ? '0px !important' : `${pxToRem(theme.spacing[4])} !important`,
      borderRadius: '2px !important',
      boxShadow: theme.shadows.shadow05,
      width: getModalSize(),
    },
    overlay: {
      opacity: '0.25 !important',
    },
  };
});
