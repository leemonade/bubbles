import { createStyles } from '@mantine/styles';

const AnchorStyles = createStyles((theme) => {
  const buttonTheme = theme.other.button;
  return {
    root: {
      textDecoration: buttonTheme.textDecoration.underLine,
      color: buttonTheme.content.color.secondary.default,
      cursor: 'pointer',
      '&:hover': {
        color: buttonTheme.content.color.primary.default,
      },
      '&:active': {
        color: buttonTheme.content.color.secondary.pressed,
      },
    },
  };
});

export { AnchorStyles };
