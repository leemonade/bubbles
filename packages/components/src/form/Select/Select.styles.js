import { createStyles } from '@mantine/styles';
import { getInputSizes, getInputStyle } from '../mixins/fieldStyles.mixins';

export const SelectStyles = createStyles((theme, { size, orientation }) => {
  return {
    input: {
      ...getInputSizes(size || 'md', theme.spacing),
      ...getInputStyle(theme),
      paddingRight: 30,
      textOverflow: 'ellipsis',
    },
    rightSection: {
      color: theme.colors.text02,
    },
  };
});
