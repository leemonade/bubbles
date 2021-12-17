import { createStyles } from '@mantine/styles';
import { getErrorStyle } from '../mixins/fieldStyles.mixins';

export const InputErrorStyles = createStyles((theme, {}) => {
  return {
    error: {
      ...getErrorStyle(theme),
    },
    errorIcon: {
      color: theme.colors.fatic01,
    },
  };
});
