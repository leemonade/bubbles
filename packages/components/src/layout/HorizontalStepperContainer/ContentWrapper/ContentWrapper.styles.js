import { createStyles } from '@mantine/styles';

export const ContentWrapperStyles = createStyles((theme, {}) => {
  const globalTheme = theme.other.global;
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      backgroundColor: globalTheme.background.color.surface.subtle,
      paddingLeft: 48,
      paddingRight: 36,
      paddingBottom: 52,
    },
    header: {
      paddingTop: 24,
      ...globalTheme.content.typo.heading.sm,
      color: globalTheme.content.color.text.muted,
    },
    content: {
      backgroundColor: globalTheme.background.color.surface.default,
      flex: 1,
      borderRadius: 4,
    },
  };
});
