import { createStyles } from '@mantine/styles';

const TotalLayoutFooterContainerStyles = createStyles(
  (theme, { showFooterBorder, leftOffset, fixed }) => ({
    root: {},
    footer: {
      minWidth: 928,
      maxWidth: 928,
      width: '100%',
      marginLeft: leftOffset,
      backgroundColor: 'white',
      borderTop: showFooterBorder && `1px solid ${theme.other.divider.background.color.default}`,
      zIndex: 1,
      position: fixed ? 'fixed' : 'relative',
      bottom: 0,
    },
  }),
);

export { TotalLayoutFooterContainerStyles };
