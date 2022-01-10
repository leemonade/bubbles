import { createStyles } from '@mantine/styles';

export const ParagraphStyles = createStyles((theme, { align, clean }) => {
  let spacing = {};

  if (clean) {
    spacing = { margin: 0, padding: 0, marginBottom: theme.spacing[1] };
  } else {
    spacing = { marginTop: theme.spacing[2] };
  }

  return {
    root: {
      textAlign: align,
      ...spacing,
    },
  };
});
