import { createStyles } from '@mantine/styles';
import { getFontProductive } from '../../theme.mixins';

export const KanbanStyles = createStyles((theme, {}) => {
  return {
    root: {
      overflow: 'auto',
      whiteSpace: 'nowrap',
      height: '100%',
      maxHeight: '100%',
      padding: theme.spacing[2],
      backgroundColor: '#EDEFF5',
      gap: theme.spacing[2],
      display: 'flex'
    },
    column: {
      height: '100%',
      display: 'inline-flex',
      position: 'relative',
      width: '300px',
      minWidth: '300px',
      flexDirection: 'column',
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      borderRadius: theme.spacing[1]
    },
    columnHeader: {
      paddingLeft: theme.spacing[4],
      paddingRight: theme.spacing[4],
      paddingTop: theme.spacing[3],
      marginBottom: theme.spacing[4],
      color: theme.colors.text05,
      ...getFontProductive(theme.fontSizes['2'], 500),
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    scroll: {
      padding: theme.spacing[2]
    },
    listDraggingOver: {
      backgroundColor: '#EDEFF5',
      borderRadius: 4
    },
    list: {
      minHeight: '100px'
    },
    iconBig: {
      position: 'absolute',
      bottom: 20,
      left: 20,
      zIndex: 0,
      img: {
        filter: 'brightness(0) invert(1)'
      }
    }
  };
});
