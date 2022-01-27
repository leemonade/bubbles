import { createStyles, getFontExpressive } from '@bubbles-ui/components';

export const KanbanFiltersStyles = createStyles((theme, {}) => {
  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
      width: '100%',
      height: '58px',
      padding: `${theme.spacing[2]}px ${theme.spacing[4]}px `,
    },
  };
});
