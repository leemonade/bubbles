import { createStyles, getFontExpressive, getFontProductive } from '@bubbles-ui/components';

export const ToolbarStyles = createStyles((theme, {}) => {
  return {
    root: {
      display: 'flex',
      gap: theme.spacing[1],
      margin: 0,
      borderBottom: `1px solid ${theme.colors.ui01}`,
      padding: theme.spacing[1],
      minHeight: 0,
    },
    buttonGroup: {
      border: `1px solid ${theme.colors.ui01}`,
      borderRadius: 4,
      overflow: 'hidden',
    },
  };
});
