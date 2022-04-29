import { createStyles } from '@bubbles-ui/components';

export const AdminPageHeaderStyles = createStyles((theme, { editMode, isTeacher }) => {
  return {
    root: {},
    headerContainer: {
      position: 'fixed',
      backgroundColor: isTeacher ? theme.colors.interactive03 : theme.colors.uiBackground04,
      zIndex: 9,
    },
    header: {
      width: '100%',
      flex: 1,
    },
    title: {
      color: isTeacher && theme.colors.text01,
    },
    icon: {
      color: theme.colors.text01,
      fontSize: '1.8rem',
    },
    section: {
      paddingTop: theme.spacing[5],
      paddingBottom: theme.spacing[5],
      paddingLeft: isTeacher && theme.spacing[5],
      backgroundColor: isTeacher ? theme.colors.interactive03 : theme.colors.uiBackground04,
    },
    breadcrumbs: {
      marginBottom: theme.spacing[5],
    },
    actions: {
      flex: editMode ? 1 : 1,
    },
  };
});
