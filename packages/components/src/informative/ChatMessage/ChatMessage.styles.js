import { createStyles } from '@mantine/styles';

export const ChatMessageStyles = createStyles(
  (theme, { isOwn, previoudMessageIsSameUser, isTeacher, isAdmin, selected }) => {
    const messageBox = {};
    if (isOwn) {
      messageBox.borderRight = `2px solid #878D96`;
    } else {
      messageBox.borderLeft = `2px solid #878D96`;
    }

    return {
      root: {
        marginTop: previoudMessageIsSameUser ? theme.spacing[1] : theme.spacing[2],
        padding: theme.spacing[2],
        background: selected ? '#E4F4E6' : 'transparent',
        display: 'flex',
        justifyContent: isOwn ? 'end' : 'start',
        alignItems: 'end',
        gap: theme.spacing[1],
        transition: 'background 0.3s ease',
        borderRadius: '4px 2px 2px 4px',
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
        padding: theme.spacing[2],
        paddingLeft: theme.spacing[3],
        borderRadius: '2px',
        backgroundColor: '#FFFFFF',
        ...messageBox,
      },
      messageBoxNoAvatar: {
        marginLeft: 28,
        padding: theme.spacing[2],
        paddingLeft: theme.spacing[3],
        borderRadius: '2px',
        backgroundColor: '#FFFFFF',
        ...messageBox,
      },
      messageBoxInner: {
        display: 'flex',
        alignItems: 'end',
        gap: theme.spacing[2],
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
  },
);
