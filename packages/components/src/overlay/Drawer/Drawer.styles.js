import { createStyles } from '@mantine/styles';

const DrawerStyles = createStyles((theme, { shadow }) => ({
  drawer: {
    display: 'flex',
    flexDirection: 'column',
    boxShadow: shadow && theme.shadows.shadow04,
    '&:focus:not(:focus-visible)': {
      boxShadow: shadow && theme.shadows.shadow04,
    },
    backgroundColor: theme.other.global.background.color.surface.default,
  },
}));

export { DrawerStyles };
