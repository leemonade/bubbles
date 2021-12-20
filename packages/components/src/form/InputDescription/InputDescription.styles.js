import { createStyles } from '@mantine/styles';
import { getDescriptionStyle } from '../mixins/fieldStyles.mixins';

export const InputDescriptionStyles = createStyles((theme, {}) => {
  return {
    root: {
      ...getDescriptionStyle(theme),
    },
  };
});
