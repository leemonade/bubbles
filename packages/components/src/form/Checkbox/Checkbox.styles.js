import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';
import { SPACING as spacing } from '../../theme.constants';

export const CheckboxStyles = createStyles((theme, { help, helpPosition, variant, isChecked }) => {
  const isRight = helpPosition === 'right';
  const isBottom = !!help & (helpPosition === 'bottom');
  const isBoxed = variant === 'boxed';

  return {
    mainContainer: {
      alignItems: isBottom && 'flex-start',
      backgroundColor: isBoxed
        ? isChecked
          ? theme.colors.interactive04
          : theme.colors.interactive03
        : null,
      //maxWidth: 'fit-content',
      padding: isBoxed && `${pxToRem(12)} ${pxToRem(20)} ${pxToRem(12)} ${pxToRem(16)}`,
      margin: 0,
      boxShadow: isBoxed && isChecked && `inset 0 0 0 1px ${theme.colors.interactive01d}`,
    },
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
      marginLeft: isBoxed && '0px !important',
    },
    label: {
      color: theme.colors.text01,
      ...getFontProductive(theme.fontSizes['2'], 500),
      lineHeight: pxToRem(17),
      marginTop: isBottom && pxToRem(1.5),
    },
    input: {
      '&:checked': {
        backgroundColor: theme.colors.interactive01,
        borderColor: theme.colors.interactive01,
      },
    },
    container: {
      display: 'flex',
      alignItems: 'baseline',
      flexDirection: isBottom && 'column',
    },
    help: {
      ...getFontProductive(theme.fontSizes[isBoxed ? '2' : '1'], isBoxed ? 500 : 400),
      color: theme.colors.text02,
      lineHeight: isBoxed ? pxToRem(17) : pxToRem(16),
      marginLeft: isRight && pxToRem(spacing[4]),
      marginTop: isBottom && pxToRem(spacing[1]),
    },
  };
});
