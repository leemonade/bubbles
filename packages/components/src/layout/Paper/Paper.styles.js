import { createStyles } from '@mantine/styles';

export const PaperStyles = createStyles((theme, { padding, radius, shadow, color }) => {
  const getShadows = (shadow) => {
    switch (shadow) {
      case 'level100':
        return theme.shadows.shadow100;
      case 'level01':
        return theme.shadows.shadow01;
      case 'level02':
        return theme.shadows.shadow02;
      case 'level03':
        return theme.shadows.shadow03;
      case 'none':
        return null;
      default:
        return theme.shadows.shadow100;
    }
  };

  return {
    root: {
      display: 'inline-flex',
      backgroundColor:
        color === 'solid' ? theme.colors.uiBackground02 : theme.colors.uiBackground01,
      boxShadow: getShadows(shadow),
    },
  };
});
