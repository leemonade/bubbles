import { createStyles } from '@mantine/styles';
import {
  pxToRem,
  getPaddings,
  getFontExpressive,
  getFontProductive,
} from '@bubbles-ui/components/src/theme.mixins';

export const ScheduleFormStyles = createStyles((theme, {}) => {
  return {
    root: {},
    scheduleRow: {
      display: 'flex',
      alignItems: 'center',
    },
    divider: {
      marginInline: pxToRem(8),
    },
    error: {
      marginLeft: pxToRem(8),
      color: theme.colors.fatic01,
    },
  };
});
