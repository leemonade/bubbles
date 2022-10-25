import { createStyles } from '@mantine/styles';
import { getFontProductive } from '../../../theme.mixins';

const getSizes = (size, theme) => {
  return {
    sm: {
      height: 18,
      width: 32,
      minWidth: 32,
      '&:before': {
        border: 'none',
        width: 14,
        height: 14,
      },
    },
    md: {
      height: 20,
      width: 36,
      minWidth: 36,
      '&:before': {
        border: 'none',
        width: 16,
        height: 16,
      },
    },
  }[size];
};

export const SwitchStyles = createStyles((theme, { size, labelPosition, disabled }) => {
  return {
    root: {
      flexDirection: labelPosition === 'end' ? 'row' : 'row-reverse',
      gap: 12,
      justifyContent: 'left',
    },
    label: {
      ...getFontProductive(theme.fontSizes[size === 'sm' ? '1' : '2'], 500),
      paddingLeft: 0,
      '&:hover': {
        cursor: disabled ? 'forbidden' : 'pointer',
      },
    },
    input: {
      ...getSizes(size, theme),
      border: 'none',
      backgroundColor: theme.colors.ui01,
      '&:checked': {
        border: 'none',
        backgroundColor: disabled ? theme.colors.ui01 : theme.colors.interactive01,
        '&::before': {
          transform: `translateX(${size === 'sm' ? 16 : 18}px)`,
        },
      },
      '&:hover': {
        cursor: disabled ? 'forbidden' : 'pointer',
      },
    },
  };
});
