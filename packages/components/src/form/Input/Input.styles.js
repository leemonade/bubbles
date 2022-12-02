import { createStyles } from '@mantine/styles';
import { getPaddings, getFocusStyles, getSpacing, pxToRem } from '../../theme.mixins';
import { getInputStyle, getInputSizes } from '../mixins/fieldStyles.mixins';

export const InputStyles = createStyles((theme, { size, disabled, hasIcon }) => {
  const inputTheme = theme.other.input;
  return {
    root: {},
    input: {
      ...getInputSizes(size || 'md', inputTheme.spacing.padding, hasIcon),
      ...getInputStyle(inputTheme, theme.other.global, disabled),
      height: 'auto',
    },
    rightSection: { color: inputTheme.content.color.icon },
    icon: {
      width: 32,
      color: inputTheme.content.color.icon,
    },
  };
});
