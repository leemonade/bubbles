import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

export const AutocompleteBadgeStyles = createStyles((theme, {}) => {
  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
    },
    item: {
      paddingBlock: 4,
    },
    itemsWrapper: { padding: 50 },
  };
});
