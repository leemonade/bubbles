import { createStyles } from '@bubbles-ui/components';

export const TextEditorStyles = createStyles((theme, {}) => {
  return {
    paragraph: {
      color: theme.colors.text01,
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'start',
      gap: 16,
    },
  };
});
