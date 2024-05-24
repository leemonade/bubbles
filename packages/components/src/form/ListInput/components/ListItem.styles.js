import { createStyles } from '@mantine/core';

const ListItemStyles = createStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'column',
  },
  sortableIcon: {
    marginRight: theme.spacing[4],
  },
  inputContainer: { width: '100%', display: 'flex', alignItems: 'center' },
  input: { width: '100%' },
  buttonsContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'flex-end',
    gap: theme.spacing[4],
    marginTop: theme.spacing[4],
  },
}));

export { ListItemStyles };
