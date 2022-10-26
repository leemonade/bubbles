import { createStyles } from '@mantine/styles';
import { getFontProductive } from '../../../theme.mixins';

const getSizes = (size, theme) => {
  return {
    xs: {
      height: 16,
      width: 30,
      minWidth: 30,
    },
    sm: {
      height: 18,
      width: 32,
      minWidth: 32,
    },
    md: {
      height: 20,
      width: 36,
      minWidth: 36,
    },
  }[size];
};

const getThumbSizes = (size, theme) => {
  return {
    xs: {
      width: 12,
      height: 12,
    },
    sm: {
      border: 'none',
      width: 14,
      height: 14,
    },
    md: {
      border: 'none',
      width: 16,
      height: 16,
    },
  }[size];
};

const getFontSize = (size) => {
  return {
    xs: '0',
    sm: '1',
    md: '2',
  }[size];
};

export const SwitchStyles = createStyles((theme, { size, labelPosition, disabled }) => {
  return {
    root: {
      gap: 12,
      justifyContent: 'left',
    },
    labelWrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      'label[data-disabled]': {
        color: theme.colors.ui01,
      },
    },
    label: {
      ...getFontProductive(theme.fontSizes[getFontSize(size)], 500),
      paddingLeft: 0,
      '&:hover': {
        cursor: disabled ? 'not-allowed' : 'pointer',
      },
    },
    body: {
      flexDirection: labelPosition === 'end' ? 'row' : 'row-reverse',
      gap: 12,
      '&:hover': {
        cursor: disabled ? 'not-allowed' : 'pointer',
      },
    },
    input: { display: 'none' },
    track: {
      ...getSizes(size, theme),
      border: 'none',
      backgroundColor: theme.colors.ui01,
      'input:checked + &': {
        border: 'none',
        backgroundColor: disabled ? theme.colors.ui01 : theme.colors.interactive01,
        transition: `all 150ms ${theme.transitionTimingFunction}`,
      },
    },
    thumb: {
      ...getThumbSizes(size, theme),
    },
  };
});
