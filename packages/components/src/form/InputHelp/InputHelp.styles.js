import { createStyles } from '@mantine/styles';
import { getHelpStyle } from '../mixins/fieldStyles.mixins';

export const InputHelpStyles = createStyles((theme, {}) => {
  return {
    root: {
      ...getHelpStyle(theme),
    },
  };
});
