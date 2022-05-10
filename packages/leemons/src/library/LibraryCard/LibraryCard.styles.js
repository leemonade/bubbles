import { createStyles, getFontExpressive } from '@bubbles-ui/components';

export const LibraryCardStyles = createStyles((theme, { shadow }) => {
  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
      border: `2px solid ${theme.colors.ui03}`,
      borderRadius: '4px',
      '&:hover': {
        boxShadow: shadow && theme.shadows.shadow01,
      },
      backgroundColor: theme.colors.mainWhite,
    },
  };
});
