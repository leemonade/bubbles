import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

export const ChatMessageStyles = createStyles((theme, { isOwn }) => {
  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
    },
    messageBox: {
      marginTop: 4,
      borderRadius: 4,
      backgroundColor: `${isOwn ? theme.colors.interactive01v1 : theme.colors.mainWhite}`,
      padding: `10px 12px 16px 12px`,
      border: `1px solid ${isOwn ? theme.colors.interactive01v0 : theme.colors.ui01}`,
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      lineHeight: '23px',
    },
    messageDate: {
      display: 'block',
      textAlign: 'right',
    },
  };
});
