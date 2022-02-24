import { createStyles, getFontExpressive } from '@bubbles-ui/components';

export const LibraryDetailStyles = createStyles((theme, {}) => {
  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
      border: `1px solid ${theme.colors.ui01}`,
    },
  };
});
