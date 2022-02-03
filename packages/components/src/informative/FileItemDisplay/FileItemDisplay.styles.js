import { createStyles } from '@mantine/styles';
import { getFontExpressive, getFontProductive, pxToRem, getPaddings } from '../../theme.mixins';

const getExtensionPosition = (size) => {
  if (size >= 124) {
    return {
      padding: pxToRem(4),
      bottom: '1%',
      left: '18%',
    };
  } else if (size >= 64) {
    return {
      padding: pxToRem(2),
      bottom: '3%',
      left: '18%',
    };
  } else if (size >= 32) {
    return {
      padding: pxToRem(2),
      bottom: '5.5%',
      left: '16%',
    };
  } else if (size >= 16) {
    return {
      padding: pxToRem(1),
      bottom: '5%',
      left: '16%',
    };
  } else {
    return {
      padding: pxToRem(1),
      bottom: '10%',
      left: '10%',
    };
  }
};

export const FileItemDisplayStyles = createStyles((theme, { size, calculatedSize, colorStyle }) => {
  const getColorStyle = () => {
    if (colorStyle) return colorStyle;
    else return {};
  };

  return {
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      color: theme.colors.text02,
      position: 'relative',
      ...getColorStyle(),
    },
    filename: {
      marginLeft: pxToRem(size / 1.5),
      fontSize: pxToRem(size),
      ...getColorStyle(),
    },
    filetype: {
      textTransform: 'lowercase',
    },
    iconWrapper: {
      position: 'relative',
    },
    iconFiletype: {
      ...getFontExpressive(),
      textTransform: 'uppercase',
      backgroundColor: theme.colors.uiBackground01,
      fontSize: pxToRem(calculatedSize),
      position: 'absolute',
      ...getExtensionPosition(size),
      ...getColorStyle(),
    },
  };
});
