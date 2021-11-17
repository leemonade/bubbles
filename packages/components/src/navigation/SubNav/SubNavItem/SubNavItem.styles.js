import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive } from '../../../theme.mixins';

export const SubNavItemStyles = createStyles((theme, { itemWidth, active }, getRef) => {
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
  };
});
