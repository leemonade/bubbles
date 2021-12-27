import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

export const ProfileSelectorStyles = createStyles((theme, {}) => {
  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
    },
    title: {},
    mainText: {
      display: 'block',
      marginTop: pxToRem(theme.spacing[10]),
    },
    radioGroup: {
      marginTop: pxToRem(theme.spacing[5]),
    },
    checkBox: {
      marginTop: pxToRem(theme.spacing[5]),
    },
    secondText: {
      display: 'block',
      marginTop: pxToRem(theme.spacing[5]),
      marginBottom: pxToRem(theme.spacing[5]),
    },
  };
});
