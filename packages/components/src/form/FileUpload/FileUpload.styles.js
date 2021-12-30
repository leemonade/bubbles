import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

const getActive = (theme) => ({
  padding: pxToRem(24),
  border: `${pxToRem(2)} solid ${theme.colors.interactive01}`,
  backgroundColor: theme.colors.interactive01v1,
  '.mantine-FileUpload-title': {
    color: theme.colors.interactive01,
  },
  '.mantine-FileUpload-icon': {
    color: theme.colors.interactive01d,
  },
});

export const FileUploadStyles = createStyles((theme, {}) => {
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
    droppedFile: {
      padding: `${pxToRem(28)} ${pxToRem(16)} ${pxToRem(28)} ${pxToRem(28)}`,
      display: 'flex',
      justifyContent: 'space-between',
      button: {
        color: theme.colors.text05,
      },
    },
    fileList: {
      marginTop: pxToRem(theme.spacing[4]),
      border: `1px solid ${theme.colors.interactive01h}`,
    },
    errorAlert: {
      marginTop: pxToRem(theme.spacing[4]),
    },
    uploadButton: {
      marginTop: pxToRem(theme.spacing[4]),
    },
  };
});
