import { createStyles } from '@mantine/styles';

export const ChatMessageStyles = createStyles((theme, { isOwn, isTeacher, isAdmin, selected }) => {
  const messageBox = {};
  if (isOwn) {
    messageBox.borderRight = `2px solid #878D96`;
  } else {
    messageBox.borderLeft = `2px solid #878D96`;
  }

  return {
    root: {
      padding: theme.spacing[2],
      background: selected ? theme.other.global.background.color.primary.default : 'transparent',
      display: 'flex',
      justifyContent: 'end',
      alignItems: 'end',
      gap: theme.spacing[1],
    },
    message: {
      color: theme.other.global.content.color.text.default,
      fontFamily: 'Albert Sans',
      fontSize: 14,
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '20px',
    },
    messageBox: {
      marginTop: theme.spacing[4],
      padding: theme.spacing[2],
      paddingLeft: theme.spacing[3],
      borderRadius: '2px 4px 4px 2px',
      ...messageBox,
    },
    messageBoxInner: {
      display: 'flex',
      alignItems: 'end',
    },
    messageDate: {
      display: 'block',
      textAlign: 'right',
      color: theme.other.global.content.color.text.muted,
      fontFamily: 'Albert Sans',
      fontSize: 12,
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '16px',
    },
    name: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      color: theme.other.global.content.color.text.muted,
      fontFamily: 'Albert Sans',
      fontSize: 12,
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '16px',
    },
    avatar: {
      display: 'flex',
    },
  };
});
