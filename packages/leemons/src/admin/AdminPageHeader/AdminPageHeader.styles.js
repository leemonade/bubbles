import { createStyles } from '@bubbles-ui/components';

export const AdminPageHeaderStyles = createStyles((theme, { editMode }) => {
  return {
    root: {},
    headerContainer: {
      position: 'fixed',
      backgroundColor: theme.colors.uiBackground04,
      zIndex: 9,
    },
    header: {
      width: '100%',
      flex: 1,
    },
    section: {
      paddingTop: theme.spacing['5'],
      paddingBottom: theme.spacing['5'],
      backgroundColor: theme.colors.uiBackground04,
    },
    breadcrumbs: {
      marginBottom: theme.spacing['5'],
    },
    actions: {
      flex: editMode ? 1 : 1,
    },
  };
});
