import { createStyles, getFontProductive, pxToRem, getHtmlStyles } from '@bubbles-ui/components';

export const TextEditorStyles = createStyles((theme, {}) => {
  const { root } = getHtmlStyles(theme);

  console.log(root);

  return {
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'start',
      gap: 16,
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

      '.ProseMirror': {
        pre: {
          background: theme.colors.uiBackground05,
          borderRadius: 4,
          color: theme.colors.mainWhite,
          // fontFamily: 'Menlo',
          padding: pxToRem(16),
          maxWidth: pxToRem(760),
        },
        code: {
          background: 'none',
          color: 'inherit',
          fontSize: pxToRem(14),
        },
        blockquote: {
          margin: '0px 0px 0px 24px',
          borderLeft: `4px solid ${theme.colors.ui01}`,
          paddingLeft: pxToRem(16),
        },
        '.hljs-comment, .hljs-quote': { color: '#616161' },
        '.hljs-variable, .hljs-template-variable, .hljs-attribute, .hljs-tag, .hljs-name, .hljs-regexp, .hljs-link, .hljs-name, .hljs-selector-id, .hljs-selector-class':
          {
            color: '#f98181',
          },
        '.hljs-number, .hljs-meta, .hljs-built_in, .hljs-builtin-name, .hljs-literal, .hljs-type, .hljs-params':
          {
            color: '#fbbc88',
          },
        '.hljs-string, .hljs-symbol, .hljs-bullet': { color: '#b9f18d' },
        '.hljs-title, .hljs-section': { color: '#faf594' },
        '.hljs-keyword, .hljs-selector-tag': { color: '#70cff8' },
        '.hljs-emphasis': { fontStyle: 'italic' },
        '.hljs-strong': { fontWeight: 700 },
      },
    },
  };
});
