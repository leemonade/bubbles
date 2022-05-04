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
  } else if (size >= 80) {
    return {
      padding: pxToRem(3),
      paddingLeft: pxToRem(5),
      bottom: '-2%',
      left: '15%',
    };
  } else if (size >= 64) {
    return {
      padding: pxToRem(2),
      paddingLeft: pxToRem(4),
      bottom: '-2%',
      left: '14%',
    };
  } else if (size >= 32) {
    return {
      padding: pxToRem(2),
      paddingLeft: pxToRem(3),
      bottom: '2%',
      left: '14%',
    };
  } else if (size >= 16) {
    return {
      padding: pxToRem(2),
      bottom: '4%',
      left: '14%',
    };
  } else {
    return {
      padding: pxToRem(1),
      bottom: '10%',
      left: '10%',
    };
  }
};

export const FileItemDisplayStyles = createStyles(
  (theme, { size, calculatedSize, colorStyle, iconStyle, url }) => {
    const linkStyles = url
      ? {
          textDecoration: 'underline',
          color: theme.colors.interactive01,
          cursor: 'pointer',
        }
      : {};
    //
    return {
      root: {
        display: 'inline-flex',
        alignItems: 'center',
        color: theme.colors.text02,
        position: 'relative',
        ...colorStyle,
      },
      filename: {
        marginLeft: pxToRem(size / 1.5),
        fontSize: pxToRem(size),
        ...colorStyle,
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
        fontSize: pxToRem(calculatedSize),
        position: 'absolute',
        lineHeight: 1,
        userSelect: 'none',
        ...getExtensionPosition(size),
        ...colorStyle,
        ...iconStyle,
      },
    };
  }
);
