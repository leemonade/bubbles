import { createStyles } from '@mantine/styles';
import { getRequiredStyle } from '../mixins/fieldStyles.mixins';

export const InputWrapperStyles = createStyles((theme, { size, orientation }) => {
  return {
    root: {
      display: 'flex',
      flexDirection: orientation === 'vertical' ? 'column' : 'row',
      gap: orientation === 'vertical' ? 0 : theme.spacing[2],
    },
    header: {
      width: orientation === 'vertical' ? 'auto' : '35%',
    },
    content: {
      flex: 1,
    },
    required: {
      ...getRequiredStyle(theme),
    },
  };
});
