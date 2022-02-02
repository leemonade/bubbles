import { createStyles } from '@mantine/styles';
import { getFontExpressive, getFontProductive, pxToRem, getPaddings } from '../../theme.mixins';

export const FileItemDisplayStyles = createStyles((theme, {}) => {
  return {
    root: {
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
    iconWrapper: {
      position: 'relative',
    },
    iconFiletype: {
      ...getFontExpressive(),
      padding: '2px 2px 0 2px',
      textTransform: 'uppercase',
      backgroundColor: theme.colors.uiBackground01,
      fontSize: pxToRem(8),
      position: 'absolute',
      bottom: 1,
      right: 1,
    },
  };
});
