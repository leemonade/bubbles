/* eslint-disable import/prefer-default-export */
import { createStyles, getFontExpressive, getBoxShadowFromToken } from '@bubbles-ui/components';

export const ToolbarStyles = createStyles((theme, {}, getRef) => {
  const scTheme = theme.other?.segmentedControl ?? {};
  return {
    root: {},
    todayButton: {
      maxHeight: 40,
      overflowY: 'hidden',
      paddingTop: '9px !important',
    },
    viewItemLabel: {
      ...(scTheme.content?.typo ?? {}),
      color: scTheme.content?.color?.default,
      padding: 1,
    },
    viewItemLabelActive: {
      ...((scTheme.content ?? {})['typo--medium'] ?? {}),
      color: scTheme.content?.color?.selected,
      padding: 1,
    },
    viewItemGroup: {
      background: scTheme.background?.color?.default,
      margin: 0,
      padding: 0,
      borderRadius: scTheme.border?.radius,
      position: 'relative',
    },
    viewItemControl: {
      zIndex: 5,
      background: scTheme.background?.color?.default,
      borderColor: scTheme.border?.color?.default,
      borderStyle: 'solid',
      borderRadius: 0,
      padding: `${scTheme.spacing.gap} ${scTheme.spacing.padding}`,
      '&:not(:first-of-type)': {
        borderWidth: '1px 0 1px 1px',
      },
      '&:first-of-type': {
        borderWidth: '1px 0 1px 1px',
        borderTopLeftRadius: `${scTheme.border?.radius} !important`,
        borderBottomLeftRadius: `${scTheme.border?.radius} !important`,
      },
      '&:last-of-type': {
        borderWidth: '1px',
        borderTopRightRadius: `${scTheme.border?.radius} !important`,
        borderBottomRightRadius: `${scTheme.border?.radius} !important`,
      },
    },
    viewItemControlActive: {
      zIndex: 9,
      background: scTheme.background?.color?.default,
      borderRadius: 0,
      borderColor: `${scTheme?.border?.color?.selected} !important`,
      '&:first-of-type': {
        borderWidth: '1px',
      },
      '&:not(:first-of-type)': {
        borderWidth: '1px',
      },
      [`&+.${getRef('control')}`]: {
        borderTopColor: `${scTheme.border?.color?.default} !important`,
      },
    },
    navIcon: {
      width: 20,
      height: 20,
    },
  };
});
