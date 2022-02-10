import { createStyles } from '@bubbles-ui/components';

export const NotificationProviderStyles = createStyles((theme, {}) => {
  return {
    notifications: {
      width: `calc(100% - ${theme.spacing.md * 2}px)`,
      boxSizing: 'border-box',
      position: 'fixed',
      zIndex: 1000,
    },

    notification: {
      '&:not(:first-of-type)': {
        marginTop: theme.spacing.sm,
      },
    },
  };
});
