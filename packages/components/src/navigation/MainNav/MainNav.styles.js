import { createStyles } from '@mantine/styles';
import { pxToRem } from '../../theme.mixins';

export const MainNavStyles = createStyles((theme, { itemWidth, subNavWidth }) => {
  return {
    root: {
      display: 'flex',
      width: '100%',
      position: 'relative',
    },
    navWrapper: {
      height: '100vh',
      width: pxToRem(itemWidth),
      flex: 'none',
      backgroundColor: theme.colors.uiBackground05,
      zIndex: 2,
    },
    navContainer: {
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    logo: {
      width: pxToRem(24),
      marginBottom: pxToRem(36),
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    navItems: {
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
      zIndex: 1,
    },
    subNavHandler: {
      position: 'absolute',
      top: 24,
      left: itemWidth,
      zIndex: 10,
    },
  };
});
