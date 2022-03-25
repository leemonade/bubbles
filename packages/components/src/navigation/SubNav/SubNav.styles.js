import { createStyles } from '@mantine/styles';
import { pxToRem, getFontExpressive, getPaddings } from '../../theme.mixins';

export const SubNavStyles = createStyles((theme, { width, pinned }) => {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      // width: '100%',
      width,
      position: 'fixed',
      top: 0,
      left: 0,
      overflow: 'hidden',
      backgroundColor: theme.colors.uiBackground03,
      transform: 'translateX(-100%)',
      transitionProperty: 'transform',
      transitionTimingFunction: 'cubic-bezier(.51,.3,0,1)',
      transitionDuration: '150ms',
      boxShadow: !pinned && theme.shadows.shadow04,
      zIndex: 20,
    },
    open: {
      transform: 'translateX(0)',
    },
    navHeader: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: pxToRem(theme.spacing['5']),
      paddingLeft: pxToRem(theme.spacing['5']),
      paddingRight: pxToRem(theme.spacing['3']),
      marginBottom: pxToRem(theme.spacing['4']),
    },
    navHeaderLabel: {
      ...getFontExpressive(pxToRem(13)),
      textTransform: 'uppercase',
      letterSpacing: '0.09em',
      color: theme.colors.text07,
      width: '100%',
    },
    navHeaderActionIcon: {
      height: pxToRem(20),
    },
    navDropZone: {
      flexGrow: 1,
      height: 1,
    },
    navBar: {
      height: '100%',
    },
    navList: {
      padding: 0,
      margin: 0,
    },
    navListItem: {
      padding: 0,
      margin: 0,
      listStyle: 'none',
    },
  };
});
