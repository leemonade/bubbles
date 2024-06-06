import { createStyles } from '@bubbles-ui/components';

const CalendarSubNavFiltersStyles = createStyles((theme) => {
  const menuTheme = theme.other.menu ?? {};

  return {
    root: {
      height: '100%',
      backgroundColor: menuTheme.background?.color?.main?.default,
      borderRight: `1px solid ${menuTheme.border?.color?.main?.default}`,
      padding: menuTheme.spacing.gap,
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      gap: theme.spacing[5],
    },
    subtitle: {
      ...(menuTheme.content ?? {})['typo--medium'],
      color: menuTheme.content?.color?.main?.default,
    },
    switchWrapper: {
      marginLeft: -8,
      marginBottom: -4,
    },
  };
});

export { CalendarSubNavFiltersStyles };
