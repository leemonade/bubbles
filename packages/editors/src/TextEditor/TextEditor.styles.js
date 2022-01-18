import { createStyles, getFontExpressive, getFontProductive } from '@bubbles-ui/components';

export const TextEditorStyles = createStyles((theme, {}) => {
  return {
    root: {
      border: `1px solid ${theme.colors.ui01}`,
      borderRadius: 4,
    },
    editor: {
      margin: theme.spacing[3],
      ...getFontProductive(theme.fontSizes[2]),
    },
    headingToolbar: {
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
    toolbarButton: {
      backgroundColor: 'transparent',
      color: theme.colors.text02,
      borderRight: `1px solid ${theme.colors.ui01}`,

      '&:last-child': {
        borderRight: 'none',
      },

      '&:hover': {
        backgroundColor: theme.colors.ui02,
        color: `${theme.colors.text01} !important`,
      },
      '& > svg': {
        width: '1rem !important',
        height: '1rem !important',
      },
    },
    toolbarButtonActive: {
      backgroundColor: theme.colors.interactive01v1,
      color: theme.colors.interactive01,
    },
    title: {
      ...getFontExpressive(),
    },
    toolbarDropdown: {
      boxShadow: theme.shadows.shadow03,
    },
  };
});
