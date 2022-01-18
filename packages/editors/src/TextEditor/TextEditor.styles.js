import { createStyles, getFontExpressive, getFontProductive } from '@bubbles-ui/components';

export const TextEditorStyles = createStyles((theme, {}) => {
  return {
    root: {
      border: `1px solid ${theme.colors.ui01}`,
      borderRadius: 4,
    },
    editor: {
      margin: theme.spacing[3],
      ...getFontProductive(theme.fontSizes[2]),

      '.ProseMirror:focus-visible': {
        outline: 'none',
      },
    },
  };
});
