import { createStyles } from '@mantine/styles';

export const ParagraphStyles = createStyles((theme, { align }) => {
  return {
    root: {
      textAlign: align,
      marginTop: theme.spacing['2'],
    },
  };
});
