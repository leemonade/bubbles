import { createStyles } from '@mantine/styles';

export const ContentWrapperStyles = createStyles((theme, { contentPadding }) => {
  const globalTheme = theme.other.global;
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      gap: 24,
      paddingLeft: 48,
      paddingRight: 36,
      paddingBottom: 52,
      zIndex: 0
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
      padding: contentPadding || 0
    },
  };
});
