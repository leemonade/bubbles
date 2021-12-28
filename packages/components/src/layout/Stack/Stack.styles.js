import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

export const StackStyles = createStyles(
  (theme, { direction, wrap, alignContent, justifyContent, alignItems, fullWidth }) => {
    return {
      root: {
        ...getFontExpressive(theme.fontSizes['2']),
        display: 'inline-flex',
        flexDirection: direction,
        flexWrap: wrap,
        alignContent: alignContent,
        justifyContent: justifyContent,
        alignItems: alignItems,
        width: fullWidth ? '100%' : 'auto',
      },
    };
  }
);
