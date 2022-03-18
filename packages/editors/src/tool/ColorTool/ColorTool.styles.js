import { createStyles } from '@bubbles-ui/components';

export const ColorToolStyles = createStyles((theme, { color }) => {
  return {
    preview: {
      height: 4,
      width: 18,
      background: color || theme.colors.text01,
      borderRadius: 1,
      transform: 'translateY(2px)',
    },
    inner: {
      flexDirection: 'column',
    },
    leftIcon: {
      transform: 'translateY(11px)',
      '& svg': {
        height: 12,
      },
    },
    swatchBox: {
      padding: 16,
      display: 'flex',
      justifyContent: 'start',
      gap: 8,
      flexWrap: 'wrap',
    },
    swatch: {
      height: 24,
      width: 24,
      borderRadius: 2,
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    swatchIcon: {
      height: 12,
      width: 12,
      color: theme.colors.mainWhite,
    },
  };
});
