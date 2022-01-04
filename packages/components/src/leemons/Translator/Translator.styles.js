import { createStyles } from '@mantine/styles';
import { buttonsGroup01 } from '../../commons.mixins';

export const TranslatorStyles = createStyles((theme) => {
  return {
    root: {},
    errorIcon: {},
    successIcon: {},
    buttonsGroup01: {
      ...buttonsGroup01(theme),
    },
  };
});
