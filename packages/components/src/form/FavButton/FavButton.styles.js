import { createStyles } from '@mantine/styles';
import { getFontExpressive } from '../../theme.mixins';

export const FavButtonStyles = createStyles((theme, { isActive, isParentHovered }) => {
  const leemonsStyles = theme.other;
  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
      minWidth: '24px',
      maxWidth: '24px',
      minHeight: '24px',
      maxHeight: '24px',
      borderRadius: '50%',
      backgroundColor: isParentHovered ? leemonsStyles.core.color.white : 'transparent',
      display: 'grid',
      placeContent: 'center',
    },
    loveIcon: {
      stroke: theme.colors.fatic01,
      fill: isActive ? theme.colors.fatic01 : 'transparent',
    },
  };
});
