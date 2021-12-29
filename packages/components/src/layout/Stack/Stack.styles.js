import { createStyles } from '@mantine/styles';

export const StackStyles = createStyles(
  (theme, { direction, wrap, alignContent, justifyContent, alignItems, fullWidth, spacing }) => {
    const flexProps = {
      display: 'inline-flex',
      flexDirection: direction,
      flexWrap: wrap,
      alignContent: alignContent,
      justifyContent: justifyContent,
      alignItems: alignItems,
    };

    if (fullWidth) {
      flexProps.flex = 1;
      flexProps.display = 'flex';
    }

    if (spacing) {
      flexProps.gap = theme.spacing[String(spacing)];
    }

    return {
      root: {
        ...flexProps,
      },
    };
  }
);
