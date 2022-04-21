import {
  createStyles,
  pxToRem,
  getPaddings,
  getFontExpressive,
  getFontProductive,
} from '@bubbles-ui/components';

export const HeaderBackgroundStyles = createStyles(
  (theme, { image, color, height, width, blur, styles }) => {
    const isHeightNum = /^\d+$/.test(height);
    const isWidthNum = /^\d+$/.test(width);

    return {
      root: {
        height: isHeightNum ? pxToRem(height) : height,
        width: isWidthNum ? pxToRem(width) : width,
        position: 'relative',
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
        height: '100%',
        width: '100%',
        backgroundImage: image && `url(${image})`,
        backgroundSize: 'cover',
        zIndex: 1,
      },
      blur: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        zIndex: 2,
        backdropFilter: `blur(${blur}px)`,
        background: 'rgba(0, 0, 0, 0.1)',
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
