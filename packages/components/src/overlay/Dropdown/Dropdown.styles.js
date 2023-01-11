import { createStyles } from '@mantine/styles';
import { getBoxShadowFromToken } from '../../theme.mixins';

export const DropdownStyles = createStyles((theme, {}) => {
  const dropdownTheme = theme.other.dropdown;
  return {
    root: {
      padding: dropdownTheme.spacing.padding.sm,
      border: `${dropdownTheme.border.width} solid ${dropdownTheme.border.color.default}`,
      borderRadius: dropdownTheme.border.radius,
      backgroundColor: dropdownTheme.background.color.default,
      ...getBoxShadowFromToken(theme.other.global.shadow['200']),
    },
  };
});
