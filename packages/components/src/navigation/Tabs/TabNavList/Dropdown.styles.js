import { createStyles } from '@mantine/styles';

const DropdownStyles = createStyles((theme, {}, getRef) => ({
  root: {
    paddingLeft: theme.spacing['3'],
    display: 'flex',
    alignItems: 'center',
    zIndex: 1000,
    // paddingBottom: theme.spacing['2'],
  },
  item: {
    '&:hover': {
      backgroundColor: theme.other.button.content.color.terciary.default,
    },
  },
  buttonIcon: {
    '&:hover': {
      backgroundColor: theme.other.buttonIcon.background.color.ghost.hover,
      '& > svg': {
        color: theme.other.buttonIcon.background.color.secondary.down,
      },
    },
  },
}));

export { DropdownStyles };
