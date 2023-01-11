import { createStyles, getFontExpressive, pxToRem } from '@bubbles-ui/components';

export const LibraryNavbarItemStyles = createStyles((theme, {
  selected,
  disabled,
  loading,
  opened
}) => {
  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2'], 500),
      display: 'flex',
      alignItems: 'center',

      cursor: 'pointer',
      justifyContent: 'space-between',
      backgroundColor: selected && theme.colors.mainWhite,
      color: disabled ? theme.colors.text06 : selected && theme.colors.interactive01,
      padding: 16,
      marginInline: 8,
      width: 'calc(100% - 16px)',
      borderRadius: 4,
      '&:hover': {
        cursor: disabled ? 'not-allowed' : loading ? 'progress' : 'pointer',
        backgroundColor: !selected && !disabled && theme.colors.interactive03
      }
    },
    item: {
      display: 'flex',
      gap: 12
    },
    chev: {
      transition: '150ms',
      transform: opened ? 'rotate(0deg)' : 'rotate(180deg)'
    },
    label: {
      color: (selected || disabled) && 'inherit'
    },
    iconWrapper: {
      position: 'relative',
      width: pxToRem(16),
      height: pxToRem(16),
      color: disabled
        ? theme.colors.text06
        : selected
          ? theme.colors.interactive01
          : theme.colors.text02
    },
    icon: {
      width: pxToRem(16),
      margin: '0 auto'
    }
  };
});
