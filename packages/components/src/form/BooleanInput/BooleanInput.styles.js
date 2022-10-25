import { createStyles } from '@mantine/styles';
import { pxToRem, getFontProductive } from '../../theme.mixins';

export const BooleanInputStyles = createStyles(
  (theme, { help, helpPosition, variant, isChecked }) => {
    const isRight = !!help & (helpPosition === 'right');
    const isBottom = !!help & (helpPosition === 'bottom');
    const isBoxed = variant === 'boxed';

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
        border: '1px solid transparent',
        borderColor: isBoxed && isChecked && theme.colors.interactive01d,
        padding: isBoxed
          ? `${pxToRem(12)} ${pxToRem(20)} ${pxToRem(12)} ${pxToRem(16)}`
          : `${pxToRem(6)} ${pxToRem(10)} ${pxToRem(6)} ${pxToRem(8)}`,
        zIndex: isChecked && 1,
      },
      wrapper: {},
      help: {
        cursor: 'pointer',
        marginLeft: isRight ? theme.spacing[4] : theme.spacing[6],
        marginTop: isBottom ? theme.spacing[1] : 2,
      },
    };
  }
);
