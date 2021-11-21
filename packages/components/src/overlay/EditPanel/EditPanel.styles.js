import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive } from './../../theme.mixins';
import { editModuleTitle, buttonsGroup01 } from '../../commons.mixins';
 


export const EditPanelStyles = createStyles((theme) => {
  return {
    root: {},
    drawer: {
      display: 'flex',
      flex: '1 auto 1',
      flexDirection: 'column',
      height: '100%',
      justifyContent: 'space-between',
    },
    header: {},
    Actions: {
      justifyContent: 'space-between',
    },
    RRActions: {
      gap: theme.spacing[2],
      height: theme.spacing[10],
      marginBottom: theme.spacing[4],
    },
    title: { ...editModuleTitle(theme) },
    buttonsGroup01: { ...buttonsGroup01(theme) },
    body: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      gap: theme.spacing[7],
    },
  };
});
