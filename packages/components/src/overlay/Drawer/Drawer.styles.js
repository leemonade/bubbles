import { createStyles } from '@mantine/styles';
import { getPaddings } from '../../theme.mixins';

export const DrawerStyles = createStyles((theme, { headerAbsolute }) => {
  const header = {
    ...getPaddings(theme.spacing[3], theme.spacing[3]),
  };
  if (headerAbsolute) {
    header.position = 'absolute';
    header.right = 0;
    header.top = 0;
  }
  return {
    header,
    drawer: {
      display: 'flex',
      flexDirection: 'column',
      boxShadow: theme.shadows.uiLevel100,
      '&:focus:not(:focus-visible)': {
        boxShadow: theme.shadows.uiLevel100,
      },
    },
    content: {
      padding: theme.spacing[7],
      flex: 1,
      overflowY: 'auto',
      // padding: `0px ${theme.spacing[7]}px ${theme.spacing[7]}px ${theme.spacing[7]}px`,
    },
  };
});
