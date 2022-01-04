import { createStyles } from '@mantine/styles';

export const DrawerStyles = createStyles((theme, { headerAbsolute }) => {
  const header = {
    padding: theme.spacing[4],
  };
  if (headerAbsolute) {
    header.position = 'absolute';
    header.right = 0;
    header.top = 0;
  }
  return {
    header,
  };
});
