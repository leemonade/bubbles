import { createStyles } from '@mantine/styles';

export const StackStyles = createStyles(
  (
    theme,
    { direction, wrap, alignContent, justifyContent, alignItems, fullWidth, fullHeight, spacing }
  ) => {
    const flexProps = {
      display: 'inline-flex',
      flexDirection: direction,
      flexWrap: wrap,
      alignContent: alignContent,
      justifyContent: justifyContent,
      alignItems: alignItems,
    };

    if (fullWidth || fullHeight) {
      flexProps.flex = 1;
      flexProps.display = 'flex';
    }

    if (fullHeight) {
      flexProps.height = '100%';
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
