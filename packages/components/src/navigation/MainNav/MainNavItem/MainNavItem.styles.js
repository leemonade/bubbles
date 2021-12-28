import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive } from '../../../theme.mixins';

export const MainNavItemStyles = createStyles((theme, { itemWidth, active }) => {
  return {
    root: {
      borderRadius: 0,
      width: pxToRem(itemWidth),
      height: pxToRem(itemWidth),
      padding: 0,
      backgroundColor: active ? theme.colors.interactive02h : 'transparent',
      '&:hover': {
        backgroundColor: theme.colors.interactive01,
      },
    },
    icon: {
      width: pxToRem(20),
      margin: '0 auto',
      color: theme.colors.text07,
    },
    tooltipBody: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: theme.colors.interactive01,
      height: pxToRem(itemWidth),
      borderRadius: '2px',
      ...getFontExpressive(),
      ...getPaddings(0, theme.spacing['4']),
      boxShadow: theme.shadows.shadow04,
    },
    tooltipArrow: {
      backgroundColor: theme.colors.interactive01,
      transform: 'scale(2.5) rotate(45deg)',
    },
  };
});
