import { createStyles } from '@bubbles-ui/components';

const TextEditorInputStyles = createStyles((theme, { hasError, editorStyles, readOnly }) => ({
  root: {
    marginTop: theme.spacing[1],
  },
  editor: {
    border: !readOnly && `1px solid ${hasError ? theme.colors.fatic01 : theme.colors.ui01}`,
    borderRadius: 4,
    margin: 0,
    marginTop: !readOnly && theme.spacing[4],
    padding: !readOnly && theme.spacing[3],
    ...editorStyles,
    '&:disabled': {
      cursor: 'not-allowed',
      color: theme.colors.text06,
      background: theme.colors.ui03,
    },
    '&:focus': {
      borderColor: theme.colors.ui01,
      boxShadow: `0 0 0 3px ${theme.colors.interactive03h}`,
      background: theme.colors.uiBackground04,
    },
    '&:focus-within': {
      borderColor: theme.colors.ui01,
      boxShadow: `0 0 0 3px ${theme.colors.interactive03h}`,
    },

    '&::placeholder': {
      opacity: 1,
      color: theme.colors.text05,
    },
    '&[aria-invalid=true]': {
      borderColor: theme.colors.fatic01,
    },
  },
}));

export { TextEditorInputStyles };
