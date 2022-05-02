import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

export const ScoreInputStyles = createStyles(
  (theme, { error, gradeWidth, selectedGradeIndex, displacedGrades, gradesLength }) => {
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
          border: `1px solid ${!error ? theme.colors.ui01 : theme.colors.fatic01}`,
        },
      },
      select: {
        input: {
          fontSize: 'unset',
          textAlign: 'unset',
          border: `1px solid ${!error ? theme.colors.ui01 : theme.colors.fatic01}`,
        },
      },
      parentInput: {
        overflow: 'hidden',
        borderRadius: 4,
        border: `1px solid ${!error ? theme.colors.ui01 : theme.colors.fatic01}`,
        position: 'relative',
        backgroundColor: theme.colors.interactive03,
      },
      input: {
        display: 'flex',
        width: '100%',
        transform: `translateX(-${displacedGrades * 40}px)`,
        transition: 'transform 0.2s ease-in-out',
        zIndex: 2,
      },
      selectedGradeBox: {
        position: 'absolute',
        // boxShadow: `inset 0 0 0 1px ${theme.colors.interactive01d}`,
        border: `1px solid ${theme.colors.interactive01d}`,
        backgroundColor: theme.colors.mainWhite,
        minHeight: 95,
        height: 95,
        left: 0,
        pointerEvents: 'none',
        zIndex: -1,
        width: gradeWidth || 0,
        transform: `translateX(${
          (selectedGradeIndex + (displacedGrades > 0 ? 1 : 0)) * gradeWidth
        }px)`,
        borderRadius:
          selectedGradeIndex === 0
            ? '4px 0 0 4px'
            : selectedGradeIndex === gradesLength - 1 && '0 4px 4px 0',
        transition: 'all 0.2s ease-in-out',
      },
      scoreBox: {
        minWidth: 40,
        minHeight: 95,
        width: '100%',
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        userSelect: 'none',
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
  }
);
