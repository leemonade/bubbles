import { createStyles } from '@bubbles-ui/components';

export const ContentEditorInputStyles = createStyles((theme, { hasError, editorStyles }) => {
  return {
    root: {
      marginTop: theme.spacing[1],
    },
    editor: {
      ...editorStyles,
    },
  };
});
