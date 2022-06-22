import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

export const DrawerPushStyles = createStyles((theme, { opened, size, style, direction }) => {
  const isHorizontal = direction === 'ltr' || direction === 'rtl';
  const isLeftToRight = direction === 'ltr';
  const isTopToBottom = direction === 'ttb';

  const getTranslateValue = () => {
    return isLeftToRight || isTopToBottom ? '-100%' : '100%';
  };

  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
      boxSizing: 'border-box',
      overflow: 'hidden',
      height: !isHorizontal ? (opened ? size : 0) : '100%',
      minHeight: !isHorizontal && opened ? size : 0,
      width: isHorizontal ? (opened ? size : 0) : '100%',
      minWidth: isHorizontal && opened ? size : 0,
      transition: isHorizontal
        ? 'width 0.3s ease-in-out, min-width 0.3s ease-in-out'
        : 'height 0.3s ease-in-out, min-height 0.3s ease-in-out',
      ...style,
    },
    childrenWrapper: {
      transform: `translate${isHorizontal ? 'X' : 'Y'}(${opened ? '0px' : getTranslateValue()})`,
      minWidth: isHorizontal && size,
      width: isHorizontal && size,
      minHeight: !isHorizontal && size,
      height: !isHorizontal && size,
      transition: 'transform 0.3s ease-in-out',
    },
    fixed: {
      position: 'fixed',
    },
  };
});
