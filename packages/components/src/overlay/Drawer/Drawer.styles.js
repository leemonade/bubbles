import { createStyles } from '@mantine/styles';
import { getPaddings } from '../../theme.mixins';

export const DrawerStyles = createStyles((theme, { empty }) => {
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
      boxShadow: theme.shadows.shadow100,
      '&:focus:not(:focus-visible)': {
        boxShadow: theme.shadows.shadow100,
      },
    },
    content: {
      padding: empty ? 0 : theme.spacing[7],
      flex: 1,
      overflowY: 'auto',
      // padding: `0px ${theme.spacing[7]}px ${theme.spacing[7]}px ${theme.spacing[7]}px`,
    },
  };
});
