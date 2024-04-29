import { createStyles } from '@mantine/styles';

const TotalLayoutFooterContainerStyles = createStyles(
  (theme, { showFooterBorder, leftOffset, fullWidth, width, fixed, skipOffset = false }) => {
    const rightOffset = skipOffset ? 95 : 136;

    return {
      root: {},
      footer: {
        marginLeft: leftOffset,
        backgroundColor: 'white',
        borderTop: showFooterBorder && `1px solid ${theme.other.divider.background.color.default}`,
        zIndex: 1,
        position: fixed ? 'fixed' : 'relative',
        bottom: 0,
        width: fullWidth ? `calc(100% - ${rightOffset}px)` : width ?? 928,
        '@media (min-width: 1720px)': {
          width: width ?? 1400,
        },
      },
    };
  },
);

export { TotalLayoutFooterContainerStyles };
