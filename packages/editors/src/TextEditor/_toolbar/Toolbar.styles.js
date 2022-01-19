import { createStyles, getFontExpressive, getFontProductive } from '@bubbles-ui/components';

export const ToolbarStyles = createStyles((theme, {}) => {
  return {
    root: {
      display: 'flex',
      gap: theme.spacing[3],
      margin: '0px !important',
      borderBottom: `1px solid ${theme.colors.ui01} !important`,
      padding: `${theme.spacing[3]}px !important`,
      minHeight: '0px !important',
    },
    buttonGroup: {
      border: `1px solid ${theme.colors.ui01}`,
      borderRadius: 4,
      overflow: 'hidden',
    },
  };
});
