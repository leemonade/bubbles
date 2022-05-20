import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

const BORDER_RADIUS = 8;

export const ActivityAccordionStyles = createStyles((theme, {}) => {
  const PANEL_COLORS = {
    default: theme.colors.uiBackground01,
    solid: theme.colors.interactive03h,
  };

  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing[2],
    },
    item: {
      backgroundColor: theme.colors.uiBackground01,
      borderRadius: BORDER_RADIUS,
      border: 'none',
    },
    content: {
      background: PANEL_COLORS.default,
      borderBottomRightRadius: BORDER_RADIUS,
      borderBottomLeftRadius: BORDER_RADIUS,
    },
    contentInner: {
      padding: 0,
    },
    control: {
      paddingLeft: theme.spacing[5],
      paddingTop: 0,
      paddingBottom: 0,
      paddingRight: theme.spacing[4],
      height: pxToRem(57),
    },
    contentSolid: {
      background: PANEL_COLORS.solid,
    },
  };
});
