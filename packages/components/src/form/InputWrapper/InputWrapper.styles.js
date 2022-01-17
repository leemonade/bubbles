import { createStyles } from '@mantine/styles';
import { getRequiredStyle } from '../mixins/fieldStyles.mixins';

export const InputWrapperStyles = createStyles((theme, { size, orientation }) => {
  return {
    root: {
      display: 'flex',
      flexDirection: orientation === 'vertical' ? 'column' : 'row',
      gap: theme.spacing[2],
    },
    header: {
      width: orientation === 'vertical' ? 'auto' : '35%',
    },
    content: {
      flex: 1,
      width: '100%',
    },
    required: {
      ...getRequiredStyle(theme),
    },
  };
});
