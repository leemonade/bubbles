import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive } from '../../../theme.mixins';

export const MainNavItemStyles = createStyles(
  (theme, { itemWidth, active, lightMode, drawerColor }) => {
    return {
      root: {
        borderRadius: 0,
        width: pxToRem(itemWidth),
        height: pxToRem(itemWidth),
        padding: 0,
        backgroundColor: active
          ? lightMode
            ? theme.colors.interactive03
            : drawerColor
          : 'transparent',
        '&:hover': {
          backgroundColor: theme.colors.interactive01,
          '.mantine-Button-label > div': {
            color: `${theme.colors.text07} !important`,
          },
        },
      },
      icon: {
        width: pxToRem(20),
        margin: '0 auto',
        color: lightMode
          ? active
            ? theme.colors.text01
            : theme.colors.text05
          : theme.colors.text07,
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
        boxShadow: theme.shadows.shadow03,
      },
      tooltipArrow: {
        backgroundColor: theme.colors.interactive01,
        transform: 'scale(2.5) rotate(45deg)',
      },
    };
  }
);
