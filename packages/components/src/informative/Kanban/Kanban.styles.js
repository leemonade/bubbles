import { createStyles } from '@mantine/styles';

export const KanbanStyles = createStyles((theme, {}) => {
  return {
    root: {
      overflow: 'auto',
      whiteSpace: 'nowrap',
      height: '100%',
      maxHeight: '100%',
      padding: theme.spacing[2],
      backgroundColor: '#F8F9FB',
      gap: theme.spacing[2],
      display: 'flex',
    },
    column: {
      height: '100%',
      display: 'inline-flex',
      position: 'relative',
      width: '300px',
      minWidth: '300px',
      flexDirection: 'column',
      backgroundColor: '#F2F4F8',
      borderRadius: theme.spacing[1],
    },
    columnHeader: {
      paddingLeft: theme.spacing[4],
      paddingRight: theme.spacing[4],
      paddingTop: theme.spacing[3],
      color: '#4D5358',
      fontSize: '16px',
      fontWeight: 600,
      lineHeight: '24px',
      fontFamily: 'Albert Sans',
      display: 'flex',
      gap: theme.spacing[2],
      alignItems: 'center',
    },
    scroll: {
      padding: theme.spacing[2],
    },
    listDraggingOver: {
      backgroundColor: '#EDEFF5',
      borderRadius: 4,
    },
    list: {
      minHeight: '100px',
    },
    iconBig: {
      position: 'absolute',
      bottom: 20,
      left: 20,
      zIndex: 0,
      img: {
        filter: 'brightness(0) invert(1)',
      },
    },
  };
});
