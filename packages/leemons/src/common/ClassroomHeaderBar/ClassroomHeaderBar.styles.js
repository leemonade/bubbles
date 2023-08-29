import { createStyles } from '@bubbles-ui/components';

export const ClassroomHeaderBarStyles = createStyles((theme, {}) => {
  const globalTheme = theme.other.global;
  return {
    root: {
      backgroundColor: globalTheme.background.color.surface.subtle,
      paddingInline: 48,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 56,
    },
    root2: {
      gap: 32,
      display: 'flex',
      alignItems: 'center',
      paddingInline: 48,
    },
    pinIcon: {
      minHeight: 14,
      minWidth: 14,
    },
    scheduleContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      padding: 4,
    },
    infoWrapper: {
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      userSelect: 'none',
      svg: {
        color: theme.other.buttonIcon.content.color.terciary['default--reverse'],
      },
      paddingLeft: 12,
    },
    clickable: {
      cursor: 'pointer',
    },
    label: {
      ...globalTheme.content.typo.body['md--bold'],
      color: globalTheme.content.color.text.default,
    },
  };
});
