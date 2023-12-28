import { createStyles } from '@mantine/styles';

const TotalLayoutFooterContainerStyles = createStyles(
  (theme, { showFooterBorder, leftOffset, fixed }) => ({
    root: {},
    footer: {
      width: 928,
      marginLeft: leftOffset,
      backgroundColor: 'white',
      borderTop: showFooterBorder && `1px solid ${theme.other.divider.background.color.default}`,
      zIndex: 1,
      position: fixed ? 'fixed' : 'relative',
      bottom: 0,
      '@media (min-width: 1920px)': {
        width: 1200,
      },
    },
  }),
);

export { TotalLayoutFooterContainerStyles };