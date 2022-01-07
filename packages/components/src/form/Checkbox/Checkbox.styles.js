import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';
import { SPACING as spacing } from '../../theme.constants';

export const CheckboxStyles = createStyles((theme, { help, helpPosition, variant, isChecked }) => {
  const isRight = !!help & (helpPosition === 'right');
  const isBottom = !!help & (helpPosition === 'bottom');
  const isBoxed = variant === 'boxed';

  return {
    input: {
      '&:checked': {
        backgroundColor: theme.colors.interactive01,
        borderColor: theme.colors.interactive01,
      },
    },
    label: {
      color: theme.colors.text01,
      ...getFontProductive(theme.fontSizes['2'], 500),
      lineHeight: pxToRem(17),
      paddingLeft: pxToRem(spacing[2]),
    },
    help: {
      ...getFontProductive(theme.fontSizes[isBoxed ? '2' : '1'], isBoxed ? 500 : 400),
      color: theme.colors.text02,
      lineHeight: isBoxed ? pxToRem(17) : pxToRem(16),
      marginLeft: isRight ? pxToRem(spacing[4]) : pxToRem(spacing[6]),
      marginTop: isBottom && pxToRem(spacing[1]),
    },
    container: {
      display: 'inline-flex',
      alignItems: isRight && 'center',
      flexDirection: isBottom && 'column',
      backgroundColor: isBoxed
        ? isChecked
          ? theme.colors.interactive04
          : theme.colors.interactive03
        : null,
      // boxShadow: isBoxed && isChecked && `inset 0 0 0 1px ${theme.colors.interactive01d}`,
      border: '1px solid transparent',
      borderColor: isBoxed && isChecked && theme.colors.interactive01d,
      padding: isBoxed && `${pxToRem(12)} ${pxToRem(20)} ${pxToRem(12)} ${pxToRem(16)}`,
    },
  };
});
