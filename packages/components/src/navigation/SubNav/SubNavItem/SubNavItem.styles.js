import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive } from '../../../theme.mixins';

export const SubNavItemStyles = createStyles((theme, { active, disabled, hasError, lightMode }) => {
  return {
    root: {
      ...getFontExpressive(pxToRem(14), 500),
      position: 'relative',
      display: 'block',
      textDecoration: 'none',
      lineHeight: pxToRem(18),
      color: disabled ? theme.colors.text06 : lightMode ? theme.colors.text04 : theme.colors.text07,
      paddingLeft: pxToRem(theme.spacing['5']),
      paddingRight: pxToRem(theme.spacing['5']),
      paddingTop: pxToRem(theme.spacing['3']),
      paddingBottom: pxToRem(theme.spacing['3']),
      cursor: disabled ? 'not-allowed' : 'pointer',
      '&:hover': {
        backgroundColor: !disabled && theme.colors.interactive01,
        color: !disabled && `${theme.colors.text07} !important`,
      },
    },
    editMode: {
      color: theme.colors.text01,
      backgroundColor: theme.colors.ui03,
      '&:hover': {
        backgroundColor: theme.colors.ui02,
      },
    },
    editItemMode: {
      ...getPaddings(theme.spacing['1'], theme.spacing['1']),
      border: `1px solid ${hasError ? theme.colors.fatic01 : theme.colors.interactive01}`,
      backgroundColor: theme.colors.ui03,
    },
    active: {
      backgroundColor: theme.colors.interactive02d,
    },
    dragging: {
      border: `1px dashed ${theme.colors.ui01}`,
    },
    layer: {
      color: theme.colors.text01,
      border: `1px dashed ${theme.colors.interactive01}`,
      backgroundColor: theme.colors.ui03,
    },
    disabled: {},
  };
});
