import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../../theme.mixins';

export const AdminPageHeaderStyles = createStyles((theme, { editMode }) => {
  return {
    root: {},
    section: {
      paddingTop: theme.spacing['5'],
      paddingBottom: theme.spacing['5'],
      backgroundColor: theme.colors.mainWhite,
    },
    breadcrumbs: {
      marginBottom: theme.spacing['5'],
    },
    actions: {
      flex: editMode ? 0 : 1,
    },
    header: {
      width: '100%',
      flex: 1,
    },
  };
});
