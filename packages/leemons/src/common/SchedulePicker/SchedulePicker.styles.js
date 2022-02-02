import { createStyles } from '@mantine/styles';
import {
  pxToRem,
  getPaddings,
  getFontExpressive,
  getFontProductive,
} from '@bubbles-ui/components/src/theme.mixins';

export const SchedulePickerStyles = createStyles((theme, {}) => {
  return {
    root: {
      color: theme.colors.text02,
    },
    wrapper: {
      display: 'flex',
    },
    values: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: pxToRem(8),
      minWidth: 0,
    },
    input: {
      ...getFontProductive(null, 400),
      color: theme.colors.text02,
      WebkitAppearance: 'none',
      flex: 1,
      minWidth: 0,
      border: 'none',
      '&:focus-visible': {
        outline: 'none',
      },
    },
  };
});
