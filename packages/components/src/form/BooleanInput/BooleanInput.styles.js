import { createStyles } from '@mantine/styles';
import { pxToRem } from '../../theme.mixins';

const BooleanInputStyles = createStyles(
  (theme, { help, helpPosition, variant, isChecked, isPro, display, size }) => {
    const isRight = !!help && helpPosition === 'right';
    const isBottom = !!help && helpPosition === 'bottom';
    const isBoxed = variant === 'boxed';
    const isSwitch = display === 'switch';
    const checkboxTheme = theme.other.checkbox;

    const getHelpMargin = () => {
      if (size === 'xs') return 42;
      if (size === 'sm') return 44;
      if (size === 'md') return 48;
      return 0;
    };

    const getBackgroundColor = () => {
      if (isBoxed) {
        if (isChecked) {
          return theme.colors.interactive04;
        }
        return theme.colors.interactive03;
      }
      return null;
    };

    const getPadding = () => {
      if (!isPro) {
        return isBoxed
          ? `${pxToRem(12)} ${pxToRem(20)} ${pxToRem(12)} ${pxToRem(16)}`
          : `${pxToRem(6)} ${pxToRem(10)} ${pxToRem(6)} ${pxToRem(8)}`;
      }
      return null;
    };

    const getHelpMarginLeft = () => {
      if (isRight) return theme.spacing[4];
      return isSwitch ? getHelpMargin() : theme.spacing[6];
    };

    return {
      root: {
        display: 'inline-flex',
        flex: 1,
        alignItems: 'flex-start',
        flexDirection: isBottom && 'column',
        backgroundColor: getBackgroundColor(),
        border: !isPro && '1px solid transparent',
        borderColor: isBoxed && isChecked && theme.colors.interactive01d,
        padding: getPadding(),
        zIndex: !isPro && isChecked && 1,
      },
      wrapper: {},
      help: {
        cursor: 'pointer',
        marginLeft: getHelpMarginLeft(),
        marginTop: isBottom ? theme.spacing[1] : 2,
      },
    };
  },
);

export { BooleanInputStyles };
