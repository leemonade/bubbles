import { createStyles } from '@mantine/styles';

export const PaperStyles = createStyles(
  (theme, { padding, radius, shadow, color, fullWidth, fullHeight, bordered }) => {
    const getShadows = (shadow) => {
      switch (shadow) {
        case 'level100':
          return theme.shadows.shadow04;
        case 'level01':
          return theme.shadows.shadow01;
        case 'level02':
          return theme.shadows.shadow02;
        case 'level03':
          return theme.shadows.shadow03;
        case 'none':
          return null;
        default:
          return theme.shadows.shadow04;
      }
    };

    const getBgColor = (theme, color) => {
      switch (color) {
        case 'solid':
          return theme.colors.uiBackground02;
        case 'none':
          return 'transparent';
        default:
          return theme.colors.uiBackground01;
      }
    };

    return {
      root: {
        display: fullWidth || fullHeight ? 'flex' : 'inline-flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        backgroundColor: getBgColor(theme, color),
        boxShadow: getShadows(shadow),
        padding: theme.spacing[padding],
        border: bordered && `1px solid ${theme.colors.ui01}`,
        height: fullHeight && '100%',
        flex: (fullWidth || fullHeight) && 1,
      },
    };
  }
);
