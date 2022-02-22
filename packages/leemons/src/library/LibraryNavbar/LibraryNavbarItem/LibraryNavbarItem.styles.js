import {
  createStyles,
  pxToRem,
  getPaddings,
  getFontExpressive,
  getFontProductive,
} from '@bubbles-ui/components';

export const LibraryNavbarItemStyles = createStyles((theme, { selected, disabled }) => {
  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2'], 500),
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      cursor: 'pointer',
      backgroundColor: selected && theme.colors.mainWhite,
      color: disabled ? theme.colors.text06 : selected && theme.colors.interactive01,
      padding: 16,
      marginInline: 8,
      width: 'calc(100% - 16px)',
      borderRadius: 4,
      '&:hover': {
        cursor: disabled ? 'not-allowed' : 'pointer',
        backgroundColor: !selected && !disabled && theme.colors.interactive03,
      },
    },
    label: {
      color: (selected || disabled) && 'inherit',
    },
  };
});
