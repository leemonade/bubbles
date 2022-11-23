import { createStyles } from '@mantine/styles';
import { getFontProductive } from '../../../theme.mixins';

const getSizes = (size, theme) => {
  return {
    width: theme.size.width,
    minWidth: theme.size.width,
    height: `calc(${theme.size.inner} + ${theme.spacing.padding} + ${theme.spacing.padding})`,
  };
  // return {
  //   xs: {
  //     height: 16,
  //     width: 30,
  //     minWidth: 30,
  //   },
  //   sm: {
  //     height: 18,
  //     width: 32,
  //     minWidth: 32,
  //   },
  //   md: {
  //     height: 20,
  //     width: 36,
  //     minWidth: 36,
  //   },
  // }[size];
};

const getThumbSizes = (size, theme) => {
  return {
    height: theme.size.inner,
    width: theme.size.inner,
    border: 'none',
  };
  // return {
  //   xs: {
  //     width: 12,
  //     height: 12,
  //   },
  //   sm: {
  //     border: 'none',
  //     width: 14,
  //     height: 14,
  //   },
  //   md: {
  //     border: 'none',
  //     width: 16,
  //     height: 16,
  //   },
  // }[size];
};

const getFontSize = (size) => {
  return {
    xs: '0',
    sm: '1',
    md: '2',
  }[size];
};

export const SwitchStyles = createStyles((theme, { size, labelPosition, disabled }) => {
  const switchTheme = theme.other.toggle;
  const labelTheme = theme.other.label;
  console.log(switchTheme);
  console.log(theme.other.global.content.color.disabled);
  return {
    root: {
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
      // ...getFontProductive(theme.fontSizes[getFontSize(size)], 500),
      color: labelTheme.content.color.default,
      ...labelTheme.content.typo['01'],
      paddingLeft: 0,
      '&:hover': {
        cursor: disabled ? 'not-allowed' : 'pointer',
      },
    },
    body: {
      flexDirection: labelPosition === 'end' ? 'row' : 'row-reverse',
      gap: switchTheme.spacing.gap,
      '&:hover': {
        cursor: disabled ? 'not-allowed' : 'pointer',
      },
    },
    input: { display: 'none' },
    track: {
      ...getSizes(size, switchTheme),
      cursor: 'pointer',
      border: 'none',
      borderRadius: switchTheme.border.radius,
      backgroundColor: switchTheme.background.color.unselected.default,
      '&:hover': {
        backgroundColor: switchTheme.background.color.unselected.hover,
      },
      'input:checked + &': {
        border: 'none',
        borderRadius: switchTheme.border.radius,
        backgroundColor: switchTheme.background.color.selected.default,
        transition: `all 150ms ${theme.transitionTimingFunction}`,
        '&:hover': {
          backgroundColor: switchTheme.background.color.selected.hover,
        },
      },
      'input:disabled + &': {
        backgroundColor: theme.other.global.background.color.disabled,
      },
    },
    thumb: {
      ...getThumbSizes(size, switchTheme),
      backgroundColor: switchTheme.content.color.default,
      borderRadius: switchTheme.border.radius,
      'input:checked + * > &': {
        left: 'calc(100% - 16px - 2px)',
      },
      'input:disabled + * > &': {
        backgroundColor: theme.other.global.content.color.disabled,
      },
    },
  };
});
