import { createStyles, pxToRem } from '@bubbles-ui/components';

export const CardStyles = createStyles((theme, { color }) => {
  return {
    root: {
      borderRadius: 4,
      backgroundColor: theme.colors.mainWhite,
      border: `2px solid ${theme.colors.ui02}`,
      width: 'auto',
      minWidth: 420,
      margin: 10,
    },
    imagePlaceholder: {
      width: 172,
      height: 156,
      backgroundColor: theme.colors.interactive03h,
      display: 'flex',
      justifyContent: 'end',
      alignItems: 'end',
      paddingBottom: pxToRem(16),
      paddingRight: pxToRem(16),
    },
    color: {
      backgroundColor: color,
      height: 8,
      width: '100%',
      borderTopRightRadius: 2,
    },
    content: {
      height: 'auto',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      paddingInline: pxToRem(12),
      gap: pxToRem(16),
    },
    title: {
      flex: 1,
      fontWeight: 600,
    },
    description: {
      padding: pxToRem(16),
      flex: 1,
    },
    footer: {
      paddingLeft: pxToRem(16),
      paddingBlock: pxToRem(8),
    },
    playIcon: {
      backgroundColor: 'blue',
    },
  };
});
