import { createStyles } from '@mantine/styles';
import { pxToRem, getFontExpressive } from '../../theme.mixins';

const getActive = (theme) => ({
  padding: pxToRem(25),
  border: `${theme.border.width} solid ${theme.border.color.hover}`,
  backgroundColor: theme.background.color.hover,
  '.mantine-FileUpload-title': {
    color: theme.content.color.hover,
  },
  '.mantine-FileUpload-subtitle': {
    color: theme.content.color.hover,
  },
  '.mantine-FileUpload-icon': {
    color: theme.content.color.hover,
  },
});

const getDisabledStyles = (disabled, theme) => {
  if (!disabled) return {};
  return {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2],
    cursor: 'not-allowed',

    '& *': {
      color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
    },
  };
};

const FileUploadStyles = createStyles((theme, { disabled, single, files, hasError }) => {
  const hideDropzone = single && files.length > 0;
  const dropzoneTheme = theme.other.dropzone;

  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
      display: hideDropzone ? 'none' : 'flex',
      justifyContent: 'center',
      padding: pxToRem(25),
      border: hasError
        ? `${dropzoneTheme.border.width} solid ${theme.colors.fatic01}`
        : `${dropzoneTheme.border.width} solid ${dropzoneTheme.border.color.default}`,
      borderRadius: dropzoneTheme.border.radius,
      '&:hover': { ...getActive(dropzoneTheme) },
      ...getDisabledStyles(disabled, theme),
    },
    active: {
      ...getActive(dropzoneTheme),
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
      color: dropzoneTheme.content.color.icon,
    },
    title: {
      ...(dropzoneTheme.content['text--medium'] ?? {}),
      marginTop: pxToRem(9),
      color: dropzoneTheme.content.color.default,
    },
    subtitle: {
      ...(dropzoneTheme.content.text ?? {}),
      marginTop: pxToRem(8),
      color: dropzoneTheme.content.color['default--subtle'],
    },
    droppedFile: {
      minWidth: 500,
      // padding: `${pxToRem(28)} ${pxToRem(16)} ${pxToRem(28)} ${pxToRem(28)}`,
    },
    fileList: {
      marginTop: !hideDropzone && pxToRem(theme.spacing[4]),
      // border: `1px solid ${theme.colors.interactive01h}`,
      // borderRadius: pxToRem(2),
    },
    errorAlert: {
      marginTop: pxToRem(theme.spacing[4]),
    },
    uploadButton: {
      marginTop: pxToRem(theme.spacing[4]),
    },
    fileItemDisplay: {
      ...theme.other.global.content.typo.body['sm--semiBold'],
      padding: '18px 8px',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: theme.other.global.border.color.line.muted,
      borderRadius: 4,
      minWidth: '100%',
    },
  };
});

export { FileUploadStyles };
