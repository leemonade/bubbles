import { createStyles, getFontExpressive } from '@bubbles-ui/components';

export const AddCurriculumFormStyles = createStyles((theme, {}) => {
  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
      display: 'flex',
      flexDirection: 'column',
      gap: 30,
    },
  };
});
