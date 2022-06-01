import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

export const UserDisplayItemListStyles = createStyles((theme, {}) => {
  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
    },
    hiddenData: {
      marginTop: 4,
      paddingLeft: 4,
      display: 'flex',
      alignItems: 'center',
      gap: 24,
      span: {
        cursor: 'pointer',
      },
    },
  };
});
