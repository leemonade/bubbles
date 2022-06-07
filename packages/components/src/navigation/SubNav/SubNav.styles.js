import { createStyles } from '@mantine/styles';
import { pxToRem, getFontExpressive, getPaddings } from '../../theme.mixins';

export const SubNavStyles = createStyles((theme, { width, pinned, lightMode }) => {
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
      backgroundColor: lightMode ? theme.colors.interactive03 : theme.colors.uiBackground03,
      transform: 'translateX(-100%)',
      transitionProperty: 'all',
      transitionTimingFunction: 'cubic-bezier(.51,.3,0,1)',
      transitionDuration: '300ms',
      zIndex: 20,
      boxShadow:
        !pinned &&
        lightMode &&
        '32px 0px 32px rgba(35, 43, 60, 0.01), 100px 0px 60px rgba(51, 63, 86, 0.01)',
    },
    open: {
      transform: 'translateX(0)',
      boxShadow: !pinned && lightMode && theme.shadows.shadow06,
    },
    navHeader: {
      paddingTop: pxToRem(theme.spacing['1']),
      paddingRight: pxToRem(theme.spacing['1']),
      paddingLeft: pxToRem(theme.spacing['5']),
      marginBottom: pxToRem(theme.spacing['4']),
    },
    navHeaderLabel: {
      ...getFontExpressive(pxToRem(13)),
      textTransform: 'uppercase',
      letterSpacing: '0.09em',
      color: lightMode ? theme.colors.text04 : theme.colors.text08,
      marginTop: pxToRem(theme.spacing['2']),
      width: '100%',
    },
    navHeaderAction: {
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
