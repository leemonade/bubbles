/* eslint-disable import/prefer-default-export */
import { createStyles, getFontExpressive } from '@bubbles-ui/components';

export const ToolbarStyles = createStyles((theme) => ({
  root: {},
  viewItemLabel: {
    ...getFontExpressive(theme.fontSizes['2'], 400),
    color: theme.colors.text03,
  },
  viewItemActive: {
    top: 4,
    left: 4,
  },
  viewItemGroup: {
    marginLeft: 2,
    padding: 2,
  },
  navIcon: {
    width: 20,
    height: 20,
  },
}));
