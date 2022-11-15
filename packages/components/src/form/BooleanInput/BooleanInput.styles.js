import { createStyles } from '@mantine/styles';
import { pxToRem, getFontProductive } from '../../theme.mixins';

export const BooleanInputStyles = createStyles(
  (theme, { help, helpPosition, variant, isChecked, isPro, display, size }) => {
    const isRight = !!help & (helpPosition === 'right');
    const isBottom = !!help & (helpPosition === 'bottom');
    const isBoxed = variant === 'boxed';
    const isSwitch = display === 'switch';

    const getHelpMargin = () => {
      if (size === 'xs') return 42;
      if (size === 'sm') return 44;
      if (size === 'md') return 48;
    };

    return {
      root: {
        display: 'inline-flex',
        flex: 1,
        alignItems: 'flex-start',
        flexDirection: isBottom && 'column',
        backgroundColor: isBoxed
          ? isChecked
            ? theme.colors.interactive04
            : theme.colors.interactive03
          : null,
        border: !isPro && '1px solid transparent',
        borderColor: isBoxed && isChecked && theme.colors.interactive01d,
        padding: !isPro
          ? isBoxed
            ? `${pxToRem(12)} ${pxToRem(20)} ${pxToRem(12)} ${pxToRem(16)}`
            : `${pxToRem(6)} ${pxToRem(10)} ${pxToRem(6)} ${pxToRem(8)}`
          : null,
        zIndex: !isPro && isChecked && 1,
      },
      wrapper: {},
      help: {
        cursor: 'pointer',
        marginLeft: isRight ? theme.spacing[4] : isSwitch ? getHelpMargin() : theme.spacing[6],
        marginTop: isBottom ? theme.spacing[1] : 2,
      },
    };
  }
);
