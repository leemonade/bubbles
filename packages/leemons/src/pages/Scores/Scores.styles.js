import {
  createStyles,
  pxToRem,
  getPaddings,
  getFontExpressive,
  getFontProductive,
} from '@bubbles-ui/components';

export const ScoresStyles = createStyles((theme, { isOpened }) => {
  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
      display: 'flex',
    },
    drawer: {
      padding: isOpened && 32,
      paddingLeft: isOpened && 48,
      borderRight: isOpened && `1px solid ${theme.colors.ui01}`,
    },
    drawerTitle: {
      marginBottom: 34,
      '*': {
        color: theme.colors.text04,
      },
    },
    titleTop: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
    },
    drawerText: {
      display: 'block',
      marginBottom: 48,
      lineHeight: '22.4px',
    },
    formTitle: {
      display: 'block',
      marginBottom: 24,
    },
    mainContent: {
      display: 'flex',
      flexDirection: 'column',
      width: isOpened ? 'calc(100% - 370px)' : '100%',
    },
    mainContentTitle: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      backgroundColor: theme.colors.interactive03h,
      padding: 4,
      paddingInline: 8,
    },
    tabHeader: {
      backgroundColor: theme.colors.interactive03h,
      width: '100%',
    },
    tableFilters: {
      backgroundColor: theme.colors.interactive03,
      display: 'flex',
      alignItems: 'center',
      padding: 8,
    },
    filters: {
      display: 'flex',
      alignItems: 'center',
      flex: 1,
      gap: 16,
    },
  };
});
