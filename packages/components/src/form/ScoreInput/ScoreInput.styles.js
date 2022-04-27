import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

export const ScoreInputStyles = createStyles((theme, {}) => {
  return {
    root: {},
    inputWrapper: {
      display: 'flex',
      width: '100%',
      gap: 8,
    },
    customInput: {
      width: 120,
      minWidth: 120,
      minHeight: 97,
      input: {
        fontSize: 24,
        textAlign: 'center',
        border: `1px solid ${theme.colors.ui01}`,
      },
    },
    input: {
      border: `1px solid ${theme.colors.ui01}`,
      display: 'flex',
      width: '100%',
      overflow: 'hidden',
      borderRadius: 4,
    },
    scoreBox: {
      minWidth: 40,
      minHeight: 95,
      width: '100%',
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.interactive03,
      cursor: 'pointer',
      userSelect: 'none',
    },
    hiddenScoreBox: {
      visibility: 'hidden',
    },
    control: {
      display: 'flex',
      flex: 1,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      minWidth: 40,
      minHeight: 95,
      backgroundColor: theme.colors.mainWhite,
      cursor: 'pointer',
      ':first-of-type': {
        borderRadius: '4px 0 0 4px',
      },
      ':last-of-type': {
        borderRadius: '0 4px 4px 0',
      },
    },
    grade: {
      fontSize: 24,
      lineHeight: '24px',
    },
    heightStyles: {
      '*': {
        minHeight: '97px !important',
      },
    },
  };
});
