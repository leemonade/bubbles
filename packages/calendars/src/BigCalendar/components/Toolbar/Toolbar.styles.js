import { createStyles, getFontExpressive } from '@bubbles-ui/components';

export const ToolbarStyles = createStyles((theme, {}) => {
  return {
    root: {},
    viewItemLabel: {
      ...getFontExpressive(theme.fontSizes['2'], 400),
      color: theme.colors.text03,
    },
    viewItemActive: {
      top: 1,
      bottom: 1,
      left: 3,
    },
    viewItemGroup: {
      paddingLeft: 2,
      paddingRight: 0,
    },
    navIcon: {
      width: 20,
      height: 20,
    },
  };
});
