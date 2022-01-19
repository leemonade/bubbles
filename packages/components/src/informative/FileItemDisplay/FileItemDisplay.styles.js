import { createStyles } from '@mantine/styles';
import { getFontExpressive, getFontProductive, pxToRem } from '../../theme.mixins';

export const FileItemDisplayStyles = createStyles((theme, {}) => {
  return {
    root: {
      ...getFontProductive(theme.fontSizes['2']),
      display: 'inline-flex',
      alignItems: 'center',
      color: theme.colors.text02,
      position: 'relative',
    },
    filename: {
      // textTransform: 'capitalize',
      marginLeft: pxToRem(12),
    },
    filetype: {
      textTransform: 'lowercase',
    },
    iconFiletype: {
      ...getFontExpressive(),
      textTransform: 'uppercase',
      backgroundColor: theme.colors.mainWhite,
      fontSize: pxToRem(7),
      lineHeight: pxToRem(10),
      position: 'absolute',
      bottom: 0,
      left: 8,
    },
  };
});
