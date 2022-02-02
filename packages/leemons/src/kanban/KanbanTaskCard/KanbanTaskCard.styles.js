import { createStyles, getFontProductive } from '@bubbles-ui/components';
import { colord } from 'colord';

export const KanbanTaskCardStyles = createStyles((theme, { bgColor, progress }) => {
  return {
    root: {
      ...getFontProductive(theme.fontSizes[1], 400),
      width: '100%',
      backgroundColor: theme.colors.uiBackground04,
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: theme.colors.interactive03h,
      padding: 0,
      overflow: 'hidden',
      whiteSpace: 'normal',
    },
    title: {
      ...getFontProductive(theme.fontSizes[2], 500),
      color: theme.colors.text01,
      marginBottom: theme.spacing[4],
    },
    topSection: {
      padding: theme.spacing[4],
    },
    bottomSection: {
      padding: theme.spacing[4],
      backgroundColor:
        colord(bgColor).desaturate(0.2).alpha(0.7).toRgbString() || theme.colors.uiBackground04,
    },
    avatar: {
      display: 'flex',
      alignItems: 'center',
      color: theme.colors.text03,
    },
    progress: {
      display: 'flex',
      alignItems: 'end',
      flexDirection: 'column',
      color: theme.colors.text02,
      ...getFontProductive(theme.fontSizes[1]),
    },
    progressOut: {
      marginTop: theme.spacing[1],
      width: '100%',
      height: '8px',
      backgroundColor: colord(theme.colors.uiBackground03).alpha(0.3).toRgbString(),
    },
    progressIn: {
      width: `${progress}%`,
      height: '100%',
      backgroundColor: theme.colors.uiBackground03,
    },
    description: {
      display: '-webkit-box',
      '-webkit-line-clamp': '4',
      '-webkit-box-orient': 'vertical',
      overflow: 'hidden',
      marginBottom: theme.spacing[4],
    },
  };
});
