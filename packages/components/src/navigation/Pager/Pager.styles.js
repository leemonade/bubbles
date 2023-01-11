import { createStyles } from '@mantine/styles';
import { pxToRem, getFontExpressive, getFontProductive } from '../../theme.mixins';

export const PagerStyles = createStyles(
  (theme, { withGoTo, withControls, withEdges, disabled, hidePages }) => {
    const controlProps = {};

    if (hidePages) {
      controlProps.display = 'none';
    }

    if ((withControls || withEdges) && hidePages) {
      controlProps['&:first-of-type, &:last-of-type'] = {
        display: 'flex',
      };
    }

    if (withEdges && withControls && hidePages) {
      controlProps['&:nth-of-type(2), &:nth-last-of-type(-n+2)'] = {
        display: 'flex',
      };
    }

    return {
      root: {
        gap: 0,
        marginLeft: withGoTo && !withControls ? !withEdges && pxToRem(8) : null,
      },
      item: {
        ...getFontExpressive(theme.fontSizes['2'], 300),
        color: disabled ? theme.colors.text05 : theme.colors.text01,
        backgroundColor: 'transparent',
        border: 'none',
        borderRadius: '50%',
        height: pxToRem(48),
        width: pxToRem(48),
        maxWidth: pxToRem(48),
        padding: 0,
        lineHeight: pxToRem(24),
        cursor: disabled && 'default',
        ...controlProps,

        '&:disabled': {
          display: !hidePages && 'none',
        },

        '&:first-of-type': {
          cursor: disabled && 'default',
        },

        '&:hover': {
          backgroundColor: disabled ? 'none' : 'rgba(0, 0, 0, 0.03)',
        },

        '&:active:not(:disabled):not(.mantine-ref_dots_1)': {
          transform: disabled && 'none',
        },

        '&:first-of-type > svg, :last-of-type > svg': {
          height: withControls && !withEdges && pxToRem(22),
          width: withControls && !withEdges && pxToRem(22),
        },
        '&[data-active]': {
          fontWeight: !disabled && 700,
          color: disabled ? theme.colors.text05 : theme.colors.text01,
          backgroundColor: 'transparent',
          border: disabled ? 'none' : `1px solid ${theme.colors.ui01}`,
          borderRadius: '50%',
          pointerEvents: 'none',
        },
        '&[data-dots]': {
          color: theme.colors.text05,
          // transform: `translateY(${pxToRem(4)})`,
        },
      },
      container: {
        display: 'flex',
      },
      goto: {
        span: {
          ...getFontProductive(theme.fontSizes['2'], 500),
          color: disabled ? theme.colors.text05 : theme.colors.text01,
        },
        input: {
          ...getFontProductive(theme.fontSizes['2'], 500),
          width: pxToRem(60),
          height: pxToRem(48),
          textAlign: 'center',
          borderRadius: pxToRem(4),
          border: `1px solid ${theme.colors.ui01}`,
          padding: 0,
          '&:focus': {
            outline: 'none',
          },
          '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
            appearance: 'none',
            margin: 0,
          },
          '&[type=number]': {
            appearance: 'textfield',
          },
        },
        display: 'flex',
        alignItems: 'center',
        gap: pxToRem(8),
      },
      size: {
        width: 120,
      },
    };
  }
);
