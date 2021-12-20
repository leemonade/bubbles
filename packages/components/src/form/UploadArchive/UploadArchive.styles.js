import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

const getActive = (theme) => ({
  padding: pxToRem(24),
  border: `${pxToRem(2)} solid ${theme.colors.interactive01}`,
  backgroundColor: theme.colors.interactive01v1,
  '.mantine-UploadArchive-title': {
    color: theme.colors.interactive01,
  },
  '.mantine-UploadArchive-icon': {
    color: theme.colors.interactive01,
  },
});

export const UploadArchiveStyles = createStyles((theme, {}) => {
  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
      display: 'flex',
      justifyContent: 'center',
      padding: pxToRem(25),
      border: `${pxToRem(1)} solid ${theme.colors.interactive01d}`,
      borderRadius: pxToRem(2),
      '&:hover': { ...getActive(theme) },
    },
    disabled: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2],
      cursor: 'not-allowed',

      '& *': {
        color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
      },
    },
    active: {
      ...getActive(theme),
    },
    groupContainer: {
      pointerEvents: 'none',
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'center',
    },
    icon: {
      color: theme.colors.interactive01h,
    },
    title: {
      ...getFontExpressive(theme.fontSizes['2']),
      marginTop: pxToRem(9),
      color: theme.colors.text01,
    },

    subtitle: {
      ...getFontProductive(theme.fontSizes['2']),
      marginTop: pxToRem(8),
      color: theme.colors.text02,
    },
  };
});
