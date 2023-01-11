import { createStyles } from '@mantine/styles';
import { pxToRem } from '../../../theme.mixins';

export const ItemStyles = createStyles((theme, { group }) => {
  const dropdownTheme = theme.other.dropdown;
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      padding: dropdownTheme.spacing.padding.md,
      gap: dropdownTheme.spacing.gap,
      borderRadius: dropdownTheme.border.radius,
      backgroundColor: dropdownTheme.background.color.default,
      '&[data-hovered]': {
        backgroundColor: dropdownTheme.background.color.hover
      },
      '&:hover': {
        backgroundColor: dropdownTheme.background.color.hover
      },
      '&:active': {
        backgroundColor: dropdownTheme.background.color.down
      },
      cursor: 'pointer'
    },
    label: {
      ...dropdownTheme.content.typo,
      color: dropdownTheme.content.color.default,
      flex: 1
    },
    iconWrapper: {
      position: 'relative',
      minWidth: pxToRem(16),
      minHeight: pxToRem(16),
      color: dropdownTheme.content.color.default
      // minHeight: theme.other.global.icon.size.md,
      // minWidth: theme.other.global.icon.size.md,
    },
    check: {
      color: theme.other.global.content.color.positive.default
    }
  };
});
