import {
  createStyles,
  pxToRem,
  getPaddings,
  getFontExpressive,
  getFontProductive,
} from '@bubbles-ui/components';

export const ScoreCellStyles = createStyles((theme, { isEditing }) => {
  return {
    root: {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: '1px solid transparent',
      borderColor: isEditing && theme.colors.interactive01d,
    },
    inputContainer: {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      input: {
        height: 46,
        borderRadius: 0,
      },
    },
  };
});
