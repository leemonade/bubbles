import { createStyles, getFontExpressive } from '@bubbles-ui/components';

export const CalendarSubNavFiltersStyles = createStyles((theme, {}) => {
  const menuTheme = theme.other.menu ?? {};
  console.log('menuTheme:', menuTheme);
  return {
    root: {
      height: '100%',
      backgroundColor: menuTheme.background?.color?.main?.default,
      borderRight: `1px solid ${menuTheme.border?.color?.main?.default}`,
      padding: menuTheme.spacing.gap,
    },
    subtitle: {
      ...(menuTheme.content ?? {})["typo--medium"],
      color: menuTheme.content?.color?.main?.default
    },
    switchWrapper: {
      marginLeft: -8,
      marginBottom: -4
    }
  };
});
