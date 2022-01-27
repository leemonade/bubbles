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
      ...getFontExpressive(theme.fontSizes['2']),
      color: theme.colors.text02,
    },
    wrapper: {
      display: 'flex',
    },
    values: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: pxToRem(8),
    },
    input: {
      color: theme.colors.text02,
      WebkitAppearance: 'none',
      border: 'none',
      '&:focus-visible': {
        outline: 'none',
      },
    },
  };
});
