import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

export const CheckboxStyles = createStyles(
  (theme, { help, helpPosition, variant, isChecked, disabled }) => {
    const isRight = !!help & (helpPosition === 'right');
    const isBottom = !!help & (helpPosition === 'bottom');
    const isBoxed = variant === 'boxed';

    return {
      input: {
        '&:checked': {
          backgroundColor: disabled ? theme.colors.ui01 : theme.colors.interactive01,
          borderColor: disabled ? theme.colors.ui01 : theme.colors.interactive01,
        },
        borderRadius: 2,
      },
      icon: {
        width: 14,
      },
      label: {
        color: theme.colors.text01,
        ...getFontProductive(theme.fontSizes['2'], 500),
        lineHeight: pxToRem(17),
        paddingLeft: theme.spacing[2],
      },
      help: {
        ...getFontProductive(theme.fontSizes[1], 400),
        color: theme.colors.text02,
        lineHeight: pxToRem(16),
        marginLeft: isRight ? theme.spacing[4] : theme.spacing[6],
        marginTop: isBottom && theme.spacing[1],
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
        border: '1px solid transparent',
        borderColor: isBoxed && isChecked && theme.colors.interactive01d,
        padding: isBoxed
          ? `${pxToRem(12)} ${pxToRem(20)} ${pxToRem(12)} ${pxToRem(16)}`
          : `${pxToRem(6)} ${pxToRem(10)} ${pxToRem(6)} ${pxToRem(8)}`,
        zIndex: isChecked && 1,
      },
    };
  }
);
