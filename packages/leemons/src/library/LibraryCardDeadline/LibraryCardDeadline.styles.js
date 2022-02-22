import { createStyles, pxToRem, getFontProductive } from '@bubbles-ui/components';

export const LibraryCardDeadlineStyles = createStyles((theme, { isNew, direction }) => {
  const isVertical = direction === 'vertical';

  return {
    root: {
      ...getFontProductive(theme.fontSizes['2'], 400),
      display: 'flex',
      padding: isVertical ? `${pxToRem(4)} ${pxToRem(8)}` : pxToRem(8),
      backgroundColor: 'white',
      borderRadius: isVertical && '4px',
    },
    icon: {
      marginRight: pxToRem(8),
      paddingTop: pxToRem(4),
      color: theme.colors.text04,
    },
    title: {
      fontWeight: 600,
      fontSize: pxToRem(12),
      lineHeight: pxToRem(20),
      color: isNew ? theme.colors.fatic02 : theme.colors.fatic01,
    },
    deadline: {
      color: theme.colors.text02,
      fontSize: pxToRem(12),
      lineHeight: pxToRem(14),
      height: 14,
      overflow: 'hidden',
    },
    info: {
      display: isVertical && 'flex',
      alignItems: isVertical && 'center',
      gap: isVertical && pxToRem(8),
    },
  };
});
