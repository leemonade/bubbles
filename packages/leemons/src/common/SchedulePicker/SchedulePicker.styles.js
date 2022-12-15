import { createStyles } from '@mantine/styles';
import { pxToRem, getFontProductive } from '@bubbles-ui/components';

export const SchedulePickerStyles = createStyles((theme, {}) => {
  const inputLineHeight = theme.other.input.content.typo.lineHeight;
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
      zIndex: 1,
      minHeight: inputLineHeight,
    },
    input: {
      ...getFontProductive(null, 400),
      position: 'absolute',
      zIndex: 2,
      color: theme.colors.text02,
      WebkitAppearance: 'none',
      flex: 1,
      top: -7,
      left: -32,
      right: -8,
      bottom: -7,
      opacity: 0,
      border: 'none',
      '&:focus-visible': {
        outline: 'none',
      },
    },
  };
});
