import { createStyles } from '@mantine/styles';
import { getFontExpressive } from '../../theme.mixins';

export const FavButtonStyles = createStyles((theme, { isActive, isParentHovered }) => {
  const leemonsStyles = theme.other;
  return {
    root: {
      padding: 5,
      borderRadius: '50%',
      backgroundColor: isParentHovered ? leemonsStyles.core.color.white : 'transparent',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    loveIcon: {
      paddingTop: 1,
      stroke: theme.colors.fatic01,
      fill: isActive ? theme.colors.fatic01 : 'transparent',
    },
  };
});
