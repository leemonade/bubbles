import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

export const ActivityCountdownStyles = createStyles((theme, { rootStyles }) => {
  return {
    root: {
      display: 'inline-flex',
      gap: 46,
      paddingBlock: 18,
      paddingInline: 26,
      ...rootStyles,
    },
    countdown: {
      fontSize: 24,
      lineHeight: '24px',
      fontWeight: 500,
      color: theme.colors.text01,
      maxWidth: 90,
    },
  };
});
