import { createStyles } from '@mantine/styles';
import {
  pxToRem,
  getPaddings,
  getFontExpressive,
  getFontProductive,
} from '../../../../theme.mixins';

export const ProfileSelectorStyles = createStyles((theme, {}) => {
  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
    },
    title: {
      lineHeight: pxToRem(24),
      fontWeight: 600,
    },
    description: {
      margin: 0,
      marginTop: pxToRem(theme.spacing[5]),
    },
    radioGroup: {},
    checkBox: {},
    lowerHelp: {
      margin: 0,
    },
  };
});
