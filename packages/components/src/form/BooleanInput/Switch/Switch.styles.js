import { createStyles } from '@mantine/styles';
import { getFontProductive } from '../../../theme.mixins';

const getSizes = (size, theme) => {
  return {
    width: theme.size.width,
    minWidth: theme.size.width,
    height: `calc(${theme.size.inner} + ${theme.spacing.padding} + ${theme.spacing.padding})`,
  };
};

const getThumbSizes = (size, theme) => {
  return {
    height: theme.size.inner,
    width: theme.size.inner,
    border: 'none',
  };
};

export const SwitchStyles = createStyles((theme, { size, labelPosition, disabled }) => {
  const switchTheme = theme.other.toggle;
  const labelTheme = theme.other.label;
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
