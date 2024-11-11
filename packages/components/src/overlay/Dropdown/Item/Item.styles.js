import { createStyles } from '@mantine/styles';
import { pxToRem } from '../../../theme.mixins';

const ItemStyles = createStyles((theme, { group, disabled }) => {
  const dropdownTheme = theme.other.dropdown;
  const globalTheme = theme.other.global;

  let itemProps = {
    pointerEvents: 'none',
  };

  if (group !== true) {
    itemProps = {
      '&[data-hovered]': {
        backgroundColor: !disabled && dropdownTheme.background.color.hover,
      },
      '&:hover': {
        backgroundColor: !disabled && dropdownTheme.background.color.hover,
      },
      '&:active': {
        backgroundColor: !disabled && dropdownTheme.background.color.down,
      },
      cursor: disabled ? 'not-allowed' : 'pointer',
      pointerEvents: disabled ? 'none' : 'auto',
    };
  }

  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      padding: dropdownTheme.spacing.padding.md,
      gap: dropdownTheme.spacing.gap,
      borderRadius: dropdownTheme.border.radius,
      backgroundColor: disabled
        ? theme.other.global.background.color.disabled
        : dropdownTheme.background.color.default,
      filter: disabled ? 'grayscale(1)' : 'none',
      opacity: disabled ? 0.5 : 1,
      ...itemProps,
    },
    label: {
      ...dropdownTheme.content.typo,
      lineHeight: '1.1em',
      color: dropdownTheme.content.color.default,
      flex: !group ? 1 : 'unset',
    },
    description: {
      ...globalTheme.content.typo.body.xsm,
      color: globalTheme.content.color.text.muted,
      flex: !group ? 1 : 'unset',
    },
    iconWrapper: {
      position: 'relative',
      minWidth: pxToRem(16),
      minHeight: pxToRem(16),
      color: dropdownTheme.content.color.default,
      // minHeight: theme.other.global.icon.size.md,
      // minWidth: theme.other.global.icon.size.md,
    },
    check: {
      color: theme.other.global.content.color.positive.default,
    },
  };
});

export { ItemStyles };
