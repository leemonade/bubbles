import { createStyles } from '@mantine/styles';
import { getBoxShadowFromToken, getFocusStyles, getPaddings } from '../../theme.mixins';
import { getInputStyle, getRightSection, getInputSizes } from '../mixins/fieldStyles.mixins';

export const PasswordInputStyles = createStyles((theme, { size, hasIcon, disabled }) => {
  const inputTheme = theme.other.input;
  const inputSizes = getInputSizes(size || 'md', inputTheme.spacing.padding, hasIcon);
  const inputStyles = getInputStyle(inputTheme, theme.other.global);
  return {
    root: {},
    input: {
      ...inputSizes,
      ...inputStyles,
      // padding: 0,
    },
    innerInput: {
      ...inputSizes,
      ...inputStyles,
      // This is done because in this case PasswordInput has a different structure than other inputs.
      // So we have to apply styles and sizes to both "inputs" elements and override some properties.
      position: 'relative',
      border: 'none',
      width: '100%',
      lineHeight: 'unset',
      height: 'unset',
      padding: 0,
      backgroundColor: 'inherit !important',
      boxShadow: 'none !important',
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
