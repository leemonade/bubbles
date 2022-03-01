import { createStyles, pxToRem, getFontProductive } from '@bubbles-ui/components';

export const LibraryCardDeadlineStyles = createStyles(
  (theme, { isNew, direction, parentHovered }) => {
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
        height: !isVertical ? (parentHovered ? 14 : 0) : 14,
        width: isVertical && (parentHovered ? '60%' : 0),
        transition: 'all 0.3s ease-in-out',
        overflow: 'hidden',
      },
      info: {
        display: isVertical && 'flex',
        alignItems: isVertical && 'center',
        gap: isVertical && pxToRem(8),
      },
    };
  }
);
