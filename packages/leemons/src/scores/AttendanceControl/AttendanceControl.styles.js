import {
  createStyles,
  pxToRem,
  getPaddings,
  getFontExpressive,
  getFontProductive,
} from '@bubbles-ui/components';

export const AttendanceControlStyles = createStyles((theme, { fixedFooter, isFullScrolled }) => {
  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
      height: '100%',
      overflow: fixedFooter && 'hidden',
    },
    header: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      padding: 16,
    },
    controlWrapper: {
      backgroundColor: theme.colors.ui03,
      paddingBottom: !fixedFooter && 8,
      maxHeight: fixedFooter && 'calc(100% - 164.8px)',
      overflowY: fixedFooter && 'auto',
      '::-webkit-scrollbar': {
        display: 'block',
        overflow: 'auto',
        width: 6,
      },
      '::-webkit-scrollbar-track': {
        marginTop: 52,
        backgroundColor: theme.colors.ui02,
      },
      '::-webkit-scrollbar-thumb': {
        backgroundColor: '#999999',
        cursor: 'pointer',
        borderRadius: 4,
        height: 100,
      },
    },
    controlRow: {
      display: 'flex',
      alignItems: 'center',
      marginInline: 8,
      backgroundColor: theme.colors.mainWhite,
    },
    stickyRow: {
      backgroundColor: theme.colors.ui03,
      display: 'flex',
      alignItems: 'center',
      position: 'sticky',
      top: 0,
      zIndex: 10,
    },
    leftSide: {
      width: '50%',
    },
    rightSide: {
      width: '50%',
      display: 'flex',
      justifyContent: 'flex-end',
    },
    presentIcon: {
      color: theme.colors.fatic02,
      height: 16,
      width: 16,
      padding: 18,
    },
    excusedIcon: {
      color: theme.colors.fatic02,
      height: 16,
      width: 16,
      padding: 18,
    },
    absentIcon: {
      color: theme.colors.fatic01,
      height: 16,
      width: 16,
      padding: 18,
    },
    lateIcon: {
      color: theme.colors.fatic03,
      height: 16,
      width: 16,
      padding: 18,
    },
    saveButtonWrapper: {
      padding: 16,
      display: 'flex',
      justifyContent: 'flex-end',
      boxShadow: fixedFooter && !isFullScrolled && '0px -4px 60px 0px rgba(0, 0, 0, 0.15)',
      transition: 'box-shadow 0.3s',
    },
  };
});
