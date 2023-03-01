import { createStyles } from '@bubbles-ui/components';

export const TaskHeaderStyles = createStyles((theme, { color, styles }) => {
  const globalTheme = theme.other.global;
  return {
    root: {
      display: 'flex',
      gap: 20,
      ...styles,
    },
    title: {
      ...globalTheme.content.typo.heading.xlg,
      color: globalTheme.content.color.text['default--reverse'],
    },
    // subtitle: {
    //   ...globalTheme.content.typo.heading.xlg,
    //   color: globalTheme.content.color.text['default--reverse'],
    // },
    iconWrapper: {
      height: 56,
      width: 56,
      borderRadius: '50%',
      backgroundColor: color,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      img: {
        filter: 'brightness(0) invert(1)',
      },
    },
    itemIcon: {
      height: 16,
      width: 16,
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      img: {
        filter: 'brightness(0) invert(1)',
      },
    },
    itemRow: {
      display: 'flex',
      gap: 24,
      marginTop: 4,
    },
    item: {
      display: 'flex',
      gap: 8,
      alignItems: 'center',
    },
    itemName: {
      ...globalTheme.content.typo.body.lg,
      color: globalTheme.content.color.text['default--reverse'],
    },
    activityContent: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      marginTop: 12,
    },
    activityTypeIcon: {
      img: {
        filter: 'brightness(0) invert(1)',
      },
    },
    content: {
      ...globalTheme.content.typo.body.md,
      color: globalTheme.content.color.text['default--reverse'],
    },
  };
});
