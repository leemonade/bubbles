import { createStyles } from '@bubbles-ui/components';

export const EditDeadlineStyles = createStyles((theme, {}) => {
  const { global } = theme.other;
  return {
    root: {
      backgroundColor: global.background.color.surface.subtle,
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
    },
    formWrapper: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
    },
    buttonWrapper: {
      display: 'flex',
      justifyContent: 'end',
      gap: 24,
    },
    inputRow: {
      display: 'flex',
      gap: 16,
    },
  };
});
