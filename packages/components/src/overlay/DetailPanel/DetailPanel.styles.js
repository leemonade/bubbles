import { createStyles } from '@mantine/styles';
import { editModuleTitle, buttonsGroup01 } from '../../commons.mixins';
 


export const DetailPanelStyles = createStyles((theme) => {
  return {
    root: {},
    drawer: {
      display: 'flex',
      flex: '1 auto 1',
      flexDirection: 'column',
      height: '100%',
      justifyContent: 'space-between',
      boxShadow: '0px 10px 36px rgba(35, 43, 60, 0.17)',
      '&:focus:not(:focus-visible)': {
        boxShadow: '0px 10px 36px rgba(35, 43, 60, 0.17)',
      },
    },
    header: {},
    Actions: {
      justifyContent: 'space-between',
      alignItems: 'center',
      height: theme.spacing[12],
      marginBottom: theme.spacing[4],
    },
    RRActions: {
      gap: theme.spacing[2],
      marginTop: 0,
      marginLeft: theme.spacing[4],
      marginRight: theme.spacing[4],
      marginBottom: 0,
    },
    RRActionsRight: {
      gap: theme.spacing[7],
    },
    title: { ...editModuleTitle(theme) },
    buttonsGroup01: { ...buttonsGroup01(theme) },
    body: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      gap: theme.spacing[7],
      height: '100%',
    },
  };
});
