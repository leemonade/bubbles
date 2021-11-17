import { createStyles } from '@mantine/styles';
import { pxToRem, getFontExpressive, getPaddings } from '../../theme.mixins';

export const SubNavStyles = createStyles((theme, { itemWidth = 52 }, getRef) => {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: '100%',
      overflow: 'hidden',
      backgroundColor: theme.colors.uiBackground03,
    },
    navHeader: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      ...getPaddings(theme.spacing['3'], theme.spacing['5']),
      marginBottom: pxToRem(theme.spacing['5']),
    },
    navHeaderLabel: {
      ...getFontExpressive(),
      color: theme.colors.text07,
      width: '100%',
    },
  };
});
