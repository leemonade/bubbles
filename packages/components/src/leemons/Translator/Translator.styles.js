import { createStyles } from '@mantine/styles';
import { getFocusStyles } from '../../theme.mixins'; 
import { getFontExpressive } from '../../theme.mixins';
import { errorIcon, editModuleTitle, buttonsGroup01 } from '../../commons.mixins';

export const TranslatorStyles = createStyles((theme) => {
  return {
    root: {},
    errorIcon: {
       
    },
    successIcon: {
      
    },
    title: {
      ...editModuleTitle(theme),
    },
    moduleLegendDescription: {
      color: theme.colors.text03,
      ...getFontExpressive('0.79rem'),
    },
    moduleLegendTitle: {
      color: theme.colors.text01,
      marginRight: theme.spacing['4'],
      marginBottom: theme.spacing['5'],
      ...getFontExpressive('0.889rem', 400),
    },
    buttonsGroup01: {
      ...buttonsGroup01(theme),
    },
  };
});
