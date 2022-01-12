import { createStyles, getFontExpressive, getFontProductive } from '@bubbles-ui/components';

export const TextEditorStyles = createStyles((theme, {}) => {
  return {
    root: {
      ...getFontProductive(theme.fontSizes[2]),
    },
    toolbarButton: {
      backgroundColor: 'red',
      padding: 10,

      '&:hover': {
        backgroundColor: 'green',
      },
    },
  };
});
