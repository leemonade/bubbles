import { createStyles } from '@mantine/styles';
import { getFontExpressive } from '../../theme.mixins';

export const ChatMessageStyles = createStyles((theme, { isOwn, isTeacher, isAdmin, selected }) => {

  let backgroundColor = theme.other.global.background.color.surface.default;
  let borderColor = theme.other.global.border.color.line.muted;
  if (isAdmin) borderColor = theme.other.global.border.color.line.emphasis;
  if (isTeacher) borderColor = theme.other.global.border.color.primary.default;
  if (isOwn) {
    borderColor = theme.other.global.background.color.surface.muted;
    backgroundColor = theme.other.global.background.color.surface.muted;
  }

  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
      padding: theme.spacing[2],
      background: selected ? theme.other.global.background.color.primary.default : 'transparent',
    },
    message: {
      color: theme.other.global.content.color.text.muted,
      ...theme.other.input.content.typo
    },
    messageBox: {
      marginTop: theme.spacing[2],
      borderRadius: 4,
      backgroundColor: `${backgroundColor}`,
      padding: theme.spacing[2],
      paddingBottom: theme.spacing[1],
      border: `2px solid ${borderColor}`
    },
    messageDate: {
      display: 'block',
      textAlign: 'right',
      color: theme.other.global.content.color.text.subtle,
      ...theme.other.input.content.typo
    }
  };
});
