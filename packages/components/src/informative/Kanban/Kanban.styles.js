import { createStyles } from '@mantine/styles';
import { getFontExpressive, getFontProductive } from '../../theme.mixins';

export const KanbanStyles = createStyles((theme, {}) => {
  return {
    root: {
      backgroundColor: theme.colors.uiBackground02,
      overflowX: 'auto',
      whiteSpace: 'nowrap',
    },
    column: {
      display: 'inline-flex',
      width: '254px',
      padding: theme.spacing[3],
      flexDirection: 'column',
    },
    columnHeader: {
      paddingLeft: theme.spacing[2],
      marginBottom: theme.spacing[4],
      color: theme.colors.text05,
      ...getFontProductive(theme.fontSizes['2'], 500),
    },
    columnHeaderCount: {
      marginLeft: theme.spacing[2],
      color: theme.colors.text01,
      ...getFontExpressive(theme.fontSizes['2'], 500),
    },
    listDraggingOver: {
      backgroundColor: theme.colors.ui04,
    },
    list: {
      minHeight: '100px',
    },
  };
});
