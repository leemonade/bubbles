/* eslint-disable import/prefer-default-export */
import { createStyles } from '@mantine/styles';
import { pxToRem, getFontExpressive, getFontProductive } from '../../theme.mixins';

const getColor = (theme, severity) =>
  ({
    success: {
      background: `${theme.colors.fatic02v0} !important`,
      '.mantine-Alert-icon, .mantine-Alert-action': {
        color: theme.colors.fatic02,
      },
    },
    warning: {
      background: `${theme.colors.fatic03v0} !important`,
      '.mantine-Alert-icon, .mantine-Alert-action': {
        color: theme.colors.fatic03,
      },
    },
    info: {
      background: `${theme.colors.fatic04v0} !important`,
      '.mantine-Alert-icon, .mantine-Alert-action': {
        color: theme.colors.fatic04,
      },
    },
    error: {
      background: `${theme.colors.fatic01v0} !important`,
      '.mantine-Alert-icon, .mantine-Alert-action': {
        color: theme.colors.fatic01,
      },
    },
  }[severity]);

export const AlertStyles = createStyles((theme, { variantCheked, severityChecked }) => ({
  root: {
    ...getFontExpressive(theme.fontSizes['2']),
    ...getColor(theme, severityChecked),
    display: 'flex',
    alignItems: 'center',
    borderRadius: variantCheked === 'block' ? pxToRem(2) : pxToRem(0),
    padding:
      variantCheked === 'block' && `${pxToRem(8)} ${pxToRem(16)} ${pxToRem(12)} ${pxToRem(24)}`,
  },
  message: {},
  wrapper: {
    display: 'flex',
    flex: 1,
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  variant: {
    alignItems: 'baseline',
    flex: '1 1 100%',
    display: 'flex',
    flexDirection: variantCheked === 'block' ? 'column' : null,
    gap: theme.spacing['2'],
  },
  title: {
    ...getFontExpressive(theme.fontSizes['2'], 600),
    marginRight: pxToRem(15),
    lineHeight: 1.2,
    paddingTop: theme.spacing[2],
    paddingBottom: theme.spacing[2],
  },
  content: {
    ...getFontProductive(theme.fontSizes['2'], 400),
    flex: '1 1 100%',
    marginRight: variantCheked === 'block' ? pxToRem(24) : pxToRem(28),
    lineHeight: 1.2,
    paddingTop: theme.spacing[2],
    paddingBottom: theme.spacing[2],
  },
  action: {
    marginRight: pxToRem(30),
  },
  closeButton: {
    transform: 'translateY(3px)',
  },
  icon: {
    marginRight: pxToRem(18),
    transform: 'translateY(2px)',
  },
}));
