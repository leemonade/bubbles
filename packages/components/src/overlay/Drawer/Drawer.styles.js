import { createStyles } from '@mantine/styles';
import { getPaddings } from '../../theme.mixins';

const DrawerStyles = createStyles((theme, { empty, shadow, contentPadding }) => {
  const header = {
    ...getPaddings(theme.spacing[3], theme.spacing[3]),
    zIndex: 9,
  };
  if (empty) {
    header.position = 'absolute';
    header.right = 0;
    header.top = 0;
  }

  return {
    header,
    drawer: {
      display: 'flex',
      flexDirection: 'column',
      boxShadow: shadow && theme.shadows.shadow04,
      '&:focus:not(:focus-visible)': {
        boxShadow: shadow && theme.shadows.shadow04,
      },
      backgroundColor: theme.other.global.background.color.surface.default,
    },
    content: {
      padding: empty ? 0 : !isNaN(contentPadding) ? contentPadding : theme.spacing[7],
      flex: 1,
      overflowY: 'auto',
      // padding: `0px ${theme.spacing[7]}px ${theme.spacing[7]}px ${theme.spacing[7]}px`,
      backgroundColor: theme.other.global.background.color.surface.default,
    },
  };
});

export { DrawerStyles };
