import { createStyles } from '@mantine/styles';
import { getErrorStyle } from '../mixins/fieldStyles.mixins';

const InputErrorStyles = createStyles((theme) => ({
  root: {
    flexWrap: 'nowrap',
    alignItems: 'start',
  },
  error: {
    ...getErrorStyle(theme),
  },
  errorIcon: {
    color: theme.colors.fatic01,
  },
}));

export { InputErrorStyles };
