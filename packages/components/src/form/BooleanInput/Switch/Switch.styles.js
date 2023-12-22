import { createStyles } from '@mantine/styles';
import { getBoxShadowFromToken } from '../../../theme.mixins';

const getSizes = (size, theme) => ({
  width: theme.size.width,
  minWidth: theme.size.width,
  height: `calc(${theme.size.inner} + ${theme.spacing.padding} + ${theme.spacing.padding})`,
});

const getThumbSizes = (size, theme) => ({
  height: theme.size.inner && theme.size.inner.replace(' ', ''),
  width: theme.size.inner && theme.size.inner.replace(' ', ''),
  border: 'none',
});

const getThumbLeft = (theme) => {
  if (theme.size?.inner) {
    const size = parseInt(theme.size.inner.replace('px', '').replace(' ', ''));
    return `calc(100% - ${size}px - 4px)`;
  }
  return 'calc(100% - 16px - 2px)';
};

const SwitchStyles = createStyles((theme, { size, labelPosition, disabled }) => {
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
        color: theme.other.global.content.color.disabled,
      },
    },
    label: {
      color: labelTheme.content.color.default,
      ...labelTheme.content.typo['02'],
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
      borderRadius: switchTheme.border.radius,
      borderColor: switchTheme.border.color.default,
      backgroundColor: switchTheme.background.color.default,
      '&:hover': {
        ...getBoxShadowFromToken(switchTheme.shadow.hover),
      },
      'input:checked + &': {
        backgroundColor: switchTheme.background.color.default,
        borderColor: switchTheme.border.color.select,
        transition: `all 150ms ${theme.transitionTimingFunction}`,
        '&:hover': {
          ...getBoxShadowFromToken(switchTheme.shadow.hover),
        },
      },
      'input:disabled + &': {
        backgroundColor: theme.other.global.background.color.disabled,
        borderColor: theme.other.global.border.color.disabled.default,
      },
    },
    thumb: {
      ...getThumbSizes(size, switchTheme),
      backgroundColor: switchTheme.content.color.default,
      borderRadius: switchTheme.border.radius,
      left: 4,
      'input:checked + * > &': {
        left: getThumbLeft(switchTheme),
        backgroundColor: switchTheme.content.color.selected,
      },
      'input:disabled + * > &': {
        backgroundColor: theme.other.global.content.color.disabled,
      },
    },
  };
});

export { SwitchStyles };
