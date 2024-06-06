import { createStyles } from '@mantine/styles';
import { getInputStyle, getInputSizes } from '../mixins/fieldStyles.mixins';

const InputStyles = createStyles(
  (theme, { size, disabled, hasIcon, hasRightSection, fullWidth }) => {
    const inputTheme = theme.other.input;
    const inputSizes = getInputSizes(size || 'md', inputTheme.spacing.padding, hasIcon);

    if (hasRightSection) {
      inputSizes.paddingRight = 40;
    }

    return {
      wrapper: {
        width: fullWidth ? '100%' : 'auto',
      },
      input: {
        ...getInputStyle(inputTheme, theme.other.global, disabled),
        ...inputSizes,
        height: 'auto',
        minHeight: 40,
      },
      rightSection: { color: inputTheme.content.color.icon, paddingRight: 6 },
      icon: {
        width: 32,
        color: inputTheme.content.color.icon,
      },
    };
  },
);

export { InputStyles };
