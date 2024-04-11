import { createStyles } from '@mantine/styles';

const TotalLayoutFooterContainerStyles = createStyles(
  (theme, { showFooterBorder, leftOffset, fullWidth, width, fixed }) => ({
    root: {},
    footer: {
      marginLeft: leftOffset,
      backgroundColor: 'white',
      borderTop: showFooterBorder && `1px solid ${theme.other.divider.background.color.default}`,
      zIndex: 1,
      position: fixed ? 'fixed' : 'relative',
      bottom: 0,
      width: fullWidth ? 'calc(100% - 59px)' : width ?? 928,
      '@media (min-width: 1920px)': {
        width: width ?? 1400,
      },
    },
  }),
);

export { TotalLayoutFooterContainerStyles };
