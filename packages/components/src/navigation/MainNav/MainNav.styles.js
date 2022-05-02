import { createStyles } from '@mantine/styles';
import { pxToRem } from '../../theme.mixins';
import 'simplebar/dist/simplebar.min.css';

export const MainNavStyles = createStyles((theme, { itemWidth, subNavWidth, lightMode }) => {
  return {
    root: {
      display: 'flex',
      width: '100%',
      position: 'relative',
    },
    navWrapper: {
      position: 'relative',
      height: '100vh',
      width: pxToRem(itemWidth),
      // flex: 'none',
      backgroundColor: lightMode ? theme.colors.mainWhite : theme.colors.uiBackground05,
      zIndex: 30,
      overflow: 'hidden',
    },
    navWrapperBorder: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      height: '100%',
      width: 1,
      backgroundColor: lightMode ? theme.colors.ui01 : 'transparent',
      zIndex: 0,
    },
    navContainer: {
      position: 'relative',
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing[3],
      justifyContent: 'space-between',
      // zIndex: 1,
    },
    logo: {
      width: pxToRem(24),
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingBottom: 10,
    },
    navItems: {
      // height: 300,
      flexGrow: 1,
      height: 1,
    },
    subNav: {
      position: 'absolute',
      top: 0,
      right: 0,
      height: '100%',
      width: subNavWidth - itemWidth,
      marginLeft: itemWidth,
      zIndex: 20,
    },
    subNavHandler: {
      position: 'absolute',
      top: 24,
      left: itemWidth,
      zIndex: 40,
    },
  };
});
