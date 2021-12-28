import { createStyles } from '@mantine/styles';
import {
  pxToRem,
  getPaddings,
  getFontExpressive,
  getFontProductive,
} from '../../../../theme.mixins';

export const LoginBgStyles = createStyles((theme, {}) => {
  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
      position: 'relative',
      height: '100vh',
      width: 'fit-content',
    },
    content: {
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      justifyContent: 'space-between',
      ...getPaddings(theme.spacing['4'], theme.spacing['5']),
    },
    logo: {
      width: 135,
    },
    footer: {
      height: 35,
    },
  };
});
