import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../../theme.mixins';

export const TableCellStyles = createStyles((theme, { active }) => {
  return {
    root: {
      ...getFontProductive(theme.fontSizes['2'], 300),
      ...getPaddings(theme.spacing['2'], theme.spacing['3']),
      backgroundColor: active ? theme.colors.interactive01v0 : 'transparent',
      color: theme.colors.text01,
      display: 'flex',
      alignItems: 'center',
      flex: 1,
      // width: active ? '100%' : `calc(100% - ${theme.spacing['3']}px)`,
      width: '100%',
      minHeight: 48 - theme.spacing['2'] * 2,
    },
  };
});
