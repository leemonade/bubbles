import { createStyles, getFontProductive, getHtmlStyles } from '@bubbles-ui/components';

export const TextEditorStyles = createStyles((theme, { hasError }) => {
  const { root } = getHtmlStyles(theme);

  return {
    root: {
      border: `1px solid ${hasError ? theme.colors.fatic01 : theme.colors.ui01}`,
      borderRadius: 4,
    },
    editor: {
      ...root,
      margin: theme.spacing[3],
      textAlign: 'initial',
      fontWeight: 'initial',

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
      },
    },
  };
});
