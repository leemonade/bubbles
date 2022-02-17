import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

export const TagsInputStyles = createStyles((theme, {}) => {
  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
    },
    autocompleteWrapper: {
      alignItems: 'end',
      position: 'relative',
    },
    tagsContainer: {
      marginTop: pxToRem(30),
    },
    errorWrapper: {
      position: 'absolute',
      marginTop: pxToRem(8),
      flexBasis: '100%',
      height: 0,
      bottom: -4,
      left: 2,
    },
  };
});
