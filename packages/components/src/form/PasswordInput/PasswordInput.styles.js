import { createStyles } from '@mantine/styles';
import { getFocusStyles, getPaddings } from '../../theme.mixins';
import { getInputStyle, getRightSection, getInputSizes } from '../mixins/fieldStyles.mixins';

export const PasswordInputStyles = createStyles((theme, { size, hasIcon }) => {
  const inputTheme = theme.other.input;
  return {
    root: {},
    input: {},
    innerInput: {
      // ...getInputSizes(size || 'md', inputTheme.spacing.padding, hasIcon),
      // ...getInputStyle(inputTheme, theme.other.global),
    },
    // rightSection: { ...getRightSection(theme) },
    visibilityToggle: {
      color: '#495057',
    },
    icon: {
      width: 32,
      color: inputTheme.content.color.icon,
    },
  };
});
