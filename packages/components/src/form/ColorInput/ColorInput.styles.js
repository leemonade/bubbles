import { createStyles } from '@mantine/styles';
import { getInputStyle, getRightSection, getInputSizes } from '../mixins/fieldStyles.mixins';

export const ColorInputStyles = createStyles((theme, { size }) => {
  const inputTheme = theme.other.input;
  return {
    root: {},
    input: {
      ...getInputSizes(size || 'md', inputTheme.spacing.padding, true),
      ...getInputStyle(inputTheme, theme.other.global),
    },
    icon: {
      width: 32,
      color: inputTheme.content.color.icon,
    },
  };
});
