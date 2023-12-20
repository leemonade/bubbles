import { createStyles } from '@mantine/styles';
import { pxToRem } from '../../theme.mixins';

const getExtensionPosition = (size) => {
  if (size >= 124) {
    return {
      padding: pxToRem(4),
      paddingLeft: pxToRem(6),
      bottom: '-4%',
      left: '16%',
    };
  }
  if (size >= 80) {
    return {
      padding: pxToRem(3),
      paddingLeft: pxToRem(5),
      bottom: '-2%',
      left: '15%',
    };
  }
  if (size >= 64) {
    return {
      padding: pxToRem(2),
      paddingLeft: pxToRem(4),
      bottom: '-2%',
      left: '14%',
    };
  }
  if (size >= 32) {
    return {
      padding: pxToRem(2),
      paddingLeft: pxToRem(3),
      bottom: '2%',
      left: '14%',
    };
  }
  if (size >= 16) {
    return {
      padding: pxToRem(2),
      bottom: '4%',
      left: '14%',
    };
  }
  return {
    padding: pxToRem(1),
    bottom: '10%',
    left: '10%',
  };
};

const FileItemDisplayStyles = createStyles(
  (theme, { size, calculatedSize, iconSize, color, iconStyle, url }) => {
    const linkStyles = url
      ? {
          textDecoration: 'underline',
          color: theme.colors.interactive01,
          cursor: 'pointer',
        }
      : {};

    return {
      root: {
        display: 'flex',
        alignItems: 'center',
        flexGrow: 1,
        overflow: 'hidden',
        gap: pxToRem(size / 1.5),
        color: color || theme.colors.text02,
      },
      filename: {
        fontSize: pxToRem(size),
        color: color || theme.colors.text02,
        flexGrow: 1,
        wordWrap: 'break-word',
        ...linkStyles,
      },
      filetype: {
        textTransform: 'lowercase',
      },
      iconWrapper: {
        position: 'relative',
        ...iconStyle,
      },
      iconFiletype: {
        textTransform: 'uppercase',
        backgroundColor: theme.colors.uiBackground01,
        fontSize: iconSize ? pxToRem(iconSize / 3) : pxToRem(calculatedSize),
        position: 'absolute',
        lineHeight: 1,
        userSelect: 'none',
        ...getExtensionPosition(iconSize),
        color: color || theme.colors.text02,
        ...iconStyle,
      },
    };
  },
);

export { FileItemDisplayStyles };
