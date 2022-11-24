import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../../theme.mixins';

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
        backgroundColor: dropdownTheme.background.color.hover,
      },
      '&:hover': {
        backgroundColor: dropdownTheme.background.color.hover,
      },
      '&:active': {
        backgroundColor: dropdownTheme.background.color.down,
      },
    },
    label: {
      ...dropdownTheme.content.typo,
      color: dropdownTheme.content.color.default,
      flex: 1,
    },
    iconWrapper: {
      color: dropdownTheme.content.color.default,
      height: theme.other.global.icon.size.md,
      width: theme.other.global.icon.size.md,
    },
    check: {
      color: theme.other.global.content.color.positive.default,
    },
    group: {
      padding: dropdownTheme.spacing.padding.md,
      gap: dropdownTheme.spacing.gap,
      color: dropdownTheme.content.color['default--alt'],
      ...theme.other.global.content.typo.caption,
      lineHeight: '16px',
      display: 'flex',
      alignItems: 'center',
      '& [role="separator"]': {
        flex: 1,
      },
    },
  };
});
