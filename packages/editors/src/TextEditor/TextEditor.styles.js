import { createStyles, getFontExpressive, getFontProductive } from '@bubbles-ui/components';

export const TextEditorStyles = createStyles((theme, { hasError }) => {
  return {
    root: {
      border: `1px solid ${hasError ? theme.colors.fatic01 : theme.colors.ui01}`,
      borderRadius: 4,
    },
    editor: {
      margin: theme.spacing[3],
      textAlign: 'initial',
      fontWeight: 'initial',

      ...getFontProductive(theme.fontSizes[2]),

      '.ProseMirror:focus-visible': {
        outline: 'none',
      },

      '.ProseMirror p.is-editor-empty:first-of-type::before': {
        ...getFontProductive(theme.fontSizes[2]),
        color: theme.colors.text06,
        content: 'attr(data-placeholder)',
        float: 'left',
        height: 0,
        pointerEvents: 'none',

        h1: {
          fontSize: theme.fontSizes[7],
          fontWeight: 600,
        },
        h2: {
          fontSize: theme.fontSizes[6],
          fontWeight: 600,
        },
        h3: {
          fontSize: theme.fontSizes[5],
          fontWeight: 600,
        },

        strong: {
          fontWeight: 600,
        },
      },
    },
  };
});
