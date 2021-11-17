import { createStyles } from '@mantine/styles';
import { getFocusStyles } from '../../theme.mixins';
import { errorIcon, editModuleTeme, buttonsGroup01, successIcon } from '../../commons.mixins';


export const TranslatorStyles = createStyles((theme) => {
  return {
    root: {},
    errorIcon: {
      ...errorIcon(theme),
    },
    successIcon: {
      ...successIcon(theme),
    },
    title: {
      ...editModuleTeme(theme),
    },
    moduleLegendDescription: {
      color: theme.colors.text03,
      fontFamily: "'Lexend', sans-serif",
      fontSize: '0.79rem',
    },
    moduleLegendTitle: {
      color: theme.colors.text01,
      marginRight: theme.spacing['4'],
      marginBottom: theme.spacing['5'],
      fontFamily: "'Lexend', sans-serif",
      fontSize: '0.889rem',
      fontWeight: 400,
    },
    buttonsGroup01: {
      ...buttonsGroup01(theme),
    },
  };
})
 
