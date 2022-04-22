import {
  createStyles,
  pxToRem,
  getPaddings,
  getFontExpressive,
  getFontProductive,
} from '@bubbles-ui/components';

export const HeaderBackgroundStyles = createStyles(
  (theme, { image, color, height, width, withBlur, blur, styles }) => {
    const isHeightNum = /^\d+$/.test(height);
    const isWidthNum = /^\d+$/.test(width);

    return {
      root: {
        height: isHeightNum ? pxToRem(height) : height,
        width: isWidthNum ? pxToRem(width) : width,
        position: 'relative',
        overflow: 'hidden',
        ...styles,
      },
      color: {
        backgroundColor: color,
        position: 'absolute',
        height: '100%',
        width: '100%',
        zIndex: 0,
      },
      image: {
        position: 'absolute',
        height: '114%',
        width: '104%',
        backgroundImage: image && `url(${image})`,
        backgroundSize: 'cover',
        filter: withBlur && `blur(${blur}px)`,
        zIndex: 1,
        top: '-7%',
        left: '-2%',
      },
      gradient: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        background: 'linear-gradient(93.4deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 33.78%)',
        zIndex: 3,
      },
    };
  }
);
