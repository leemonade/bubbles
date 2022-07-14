import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../../theme.mixins';

export const MessageItemStyles = createStyles((theme, {}) => {
  return {
    messageRoot: {
      display: 'flex',
      position: 'relative',
      '&:hover': { boxShadow: theme.shadows.shadow03 },
    },
    avatarSide: {
      position: 'relative',
    },
    line: {
      borderLeft: `3px dashed ${theme.colors.ui01}`,
      top: 0,
      bottom: 3,
      position: 'absolute',
      left: 24,
    },
    avatarWrapper: {
      paddingTop: 14,
      paddingRight: 14,
      paddingLeft: 6,
    },
    messageInfo: {
      paddingBlock: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
    },
    messageMenu: {
      position: 'absolute',
      top: 16,
      right: 8,
    },
  };
});
