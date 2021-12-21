import { createStyles } from '@mantine/styles';
import { SPACING as spacing } from '../../theme.constants';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

export const RadioStyles = createStyles((theme, { variant, help, helpPosition, checked }) => {
  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
    },
    radio: {
      display: variant === 'icon' ? 'none' : null,
      '&:checked': {
        background: theme.colors.ui02,
        border: `1px solid ${theme.colors.interactive01d}`,
        '::before': {
          backgroundColor: theme.colors.interactive01,
        },
      },
    },
    container: {
      display: 'flex',
      flexDirection: helpPosition === 'bottom' || variant === 'icon' ? 'column' : null,
      alignItems: variant === 'icon' ? 'center' : 'baseline',
    },
    title: {
      ...getFontProductive(theme.fontSizes['2'], 500),
      marginTop: help !== '' && helpPosition === 'bottom' ? pxToRem(1.5) : null,
      color:
        variant === 'icon'
          ? checked
            ? theme.colors.text01
            : theme.colors.text02
          : theme.colors.text01,
      lineHeight: pxToRem(17),
    },
    icon: {
      color: checked ? theme.colors.interactive01h : theme.colors.text05,
    },
    help: {
      ...getFontProductive(
        theme.fontSizes[variant === 'boxed' ? '2' : '1'],
        variant === 'boxed' ? 500 : 400
      ),
      lineHeight: variant === 'default' ? pxToRem(16) : pxToRem(17),
      color: theme.colors.text02,
      marginLeft: helpPosition === 'right' ? pxToRem(spacing[4]) : null,
      marginTop: helpPosition === 'bottom' ? pxToRem(spacing[1]) : null,
    },
    label: {
      alignItems: help !== '' && helpPosition === 'bottom' ? 'flex-start' : null,
      padding:
        variant === 'boxed'
          ? `${pxToRem(16)} ${pxToRem(20)} ${pxToRem(helpPosition === 'right' ? 19 : 16)} ${pxToRem(
              theme.spacing[4]
            )}`
          : pxToRem(16),
      // width: variant === 'icon' ? pxToRem(310) : null,
      // height: variant === 'icon' ? pxToRem(136) : null,
      justifyContent: variant === 'icon' ? 'center' : null,
      userSelect: 'none',
    },
  };
});
