import { createStyles, pxToRem } from '@bubbles-ui/components';

export const HeaderBackgroundStyles = createStyles(
  (theme, { image, color, height, width, withBlur, blur, backgroundPosition, styles }) => {
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
        height: withBlur ? '114%' : '100%',
        width: withBlur ? '104%' : 'calc(100% + 1px)',
        backgroundImage: image && `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: image ? backgroundPosition : 'unset',
        filter: withBlur && `blur(${blur}px)`,
        zIndex: 1,
        top: withBlur && '-7%',
        left: withBlur && '-2%',
      },
      gradient: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        zIndex: 3,
        background:
          'linear-gradient(90deg, rgba(41, 49, 61, 0.8) 50%, rgba(41, 49, 61, 0) 80%), linear-gradient(0deg, rgba(41, 49, 61, 0.1), rgba(41, 49, 61, 0.1))',
      },
      overlay: {
        position: 'absolute',
        top: 0,
        height: '100%',
        width: '100%',
        zIndex: 4,
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
      },
    };
  }
);
