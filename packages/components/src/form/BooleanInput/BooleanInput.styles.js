import { createStyles } from '@mantine/styles';
import { pxToRem } from '../../theme.mixins';

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
      switchInput: {
        '&:checked+*>.mantine-Switch-thumb': {
          left: 'calc(100% - 8px - 4px)!important',
        },
      },
      switchThumb: {
        backgroundColor: '#878D96!important',
        width: '8px!important',
        height: '8px!important',
        left: '4px!important',
      },
      switchThumbChecked: {
        backgroundColor: '#2F463F!important',
        width: '8px!important',
        height: '8px!important',
      },
      switchTrack: {
        backgroundColor: 'transparent!important',
        border: '1px solid #878D96!important',
      },
      switchTrackChecked: {
        backgroundColor: 'transparent!important',
        border: '1px solid #2F463F!important',
      },
      switchLabel: {
        color: '#4D5358', // lightMode ? theme.colors.text01 : theme.colors.text07,
        fontWeight: 400,
        fontSize: '14px',
      },
      switchLabelChecked: {
        color: '#2F463F', // lightMode ? theme.colors.text01 : theme.colors.text07,
        fontWeight: 400,
        fontSize: '14px',
      },
    };
  },
);
