import { createStyles } from '@mantine/styles';
import { getFontExpressive } from '../../theme.mixins';
import { errorIcon, editModuleTeme, buttonsGroup01 } from '../../commons.mixins';

export const TranslatorStyles = createStyles((theme) => {
  return {
    root: {},
    errorIcon: {
      ...errorIcon(theme),
    },
    title: {
      ...editModuleTeme(theme),
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
