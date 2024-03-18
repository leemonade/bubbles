import { createStyles } from '@mantine/styles';

const AnchorStyles = createStyles((theme) => {
  const buttonTheme = theme.other.button;
  return {
    root: {
      textDecoration: buttonTheme.textDecoration.underLine,
      color: buttonTheme.content.color.secondary.default,
      cursor: 'pointer',
      '&:focus-visible': {
        backgroundColor: buttonTheme.background.color.ghost.hover,
      },
      '&:hover': {
        color: buttonTheme.content.color.primary.default,
        backgroundColor: buttonTheme.background.color.ghost.hover,
      },
      '&:active': {
        backgroundColor: buttonTheme.background.color.ghost.pressed,
        border: 'none',
        color: buttonTheme.content.color.secondary.pressed,
      },
    },
  };
});

export { AnchorStyles };
