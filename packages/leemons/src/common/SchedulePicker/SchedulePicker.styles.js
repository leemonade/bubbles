import { createStyles } from '@mantine/styles';
import { pxToRem, getFontProductive } from '@bubbles-ui/components';

export const SchedulePickerStyles = createStyles((theme, {}) => {
  return {
    root: {
      color: theme.colors.text02,
    },
    inputWrapper: {
      width: '100%',
      boxSizing: 'border-box',
    },
    wrapper: {
      display: 'flex',
      position: 'relative',
      paddingRight: 10,
      width: '100%',
    },
    values: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: pxToRem(8),
      minWidth: 0,
      zIndex: 1,
    },
    input: {
      ...getFontProductive(null, 400),
      position: 'absolute',
      zIndex: 0,
      color: theme.colors.text02,
      WebkitAppearance: 'none',
      flex: 1,
      width: '100%',
      border: 'none',
      '&:focus-visible': {
        outline: 'none',
      },
    },
  };
});
