import { createStyles } from '@mantine/styles';
import { SPACING as spacing } from '../../theme.constants';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

export const RadioStyles = createStyles((theme, { variant, withHelpText, helpTextPosition }) => {
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
      flexDirection: helpTextPosition === 'bottom' || variant === 'icon' ? 'column' : null,
      alignItems: variant === 'icon' ? 'center' : null,
    },
    title: {
      ...getFontProductive(theme.fontSizes['2'], 500),
      marginTop: withHelpText && helpTextPosition === 'bottom' ? pxToRem(2) : null,
      color: variant === 'icon' ? theme.colors.text02 : theme.colors.text01,
      lineHeight: pxToRem(17),
    },
    icon: {
      color: '#8E97A2',
    },
    helpText: {
      ...getFontProductive(
        theme.fontSizes[variant === 'boxed' ? '2' : '1'],
        variant === 'boxed' ? 500 : 400
      ),
      lineHeight: variant === 'default' ? pxToRem(16) : pxToRem(17),
      color: theme.colors.text02,
      marginLeft: helpTextPosition === 'right' ? pxToRem(spacing[4]) : null,
      marginTop: helpTextPosition === 'bottom' ? pxToRem(spacing[1]) : null,
    },
    label: {
      alignItems: withHelpText && helpTextPosition === 'bottom' ? 'flex-start' : null,
      padding:
        variant === 'boxed'
          ? `${pxToRem(16)} ${pxToRem(20)} ${pxToRem(
              helpTextPosition === 'right' ? 19 : 16
            )} ${pxToRem(16)}`
          : null,
      backgroundColor:
        variant === 'boxed' || variant === 'icon' ? theme.colors.interactive03 : null,
      width: variant === 'icon' ? pxToRem(310) : null,
      height: variant === 'icon' ? pxToRem(136) : null,
      justifyContent: variant === 'icon' ? 'center' : null,
    },
  };
});
