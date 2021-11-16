import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings } from '../../../theme.mixins';

export const MainNavItemStyles = createStyles((theme, { itemWidth, active }, getRef) => {
  return {
    root: {
      borderRadius: 0,
      width: pxToRem(itemWidth),
      height: pxToRem(itemWidth),
      padding: 0,
      backgroundColor: active ? theme.colors.interactive01 : 'transparent',
      '&:hover': {
        backgroundColor: active ? theme.colors.interactive01 : theme.colors.interactive02h,
      },
    },
    icon: {
      width: pxToRem(20),
      margin: '0 auto',
      color: theme.colors.text07,
    },
    tooltipBody: {
      fontFamily: '"Lexend", sans-serif',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: theme.colors.interactive01,
      height: pxToRem(itemWidth),
      borderRadius: '2px',
      ...getPaddings(0, theme.spacing['4']),
    },
    tooltipArrow: {
      backgroundColor: theme.colors.interactive01,
      transform: 'scale(2.5) rotate(45deg)',
    },
  };
});
