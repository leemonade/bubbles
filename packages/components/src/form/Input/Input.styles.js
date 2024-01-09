import { createStyles } from '@mantine/styles';
import { getInputStyle, getInputSizes } from '../mixins/fieldStyles.mixins';

const InputStyles = createStyles((theme, { size, disabled, hasIcon }) => {
  const inputTheme = theme.other.input;
  return {
    root: {},
    input: {
      ...getInputSizes(size || 'md', inputTheme.spacing.padding, hasIcon),
      ...getInputStyle(inputTheme, theme.other.global, disabled),
      height: 'auto',
      minHeight: 40,
    },
    rightSection: { color: inputTheme.content.color.icon, paddingRight: 6 },
    icon: {
      width: 32,
      color: inputTheme.content.color.icon,
    },
  };
});

export { InputStyles };
