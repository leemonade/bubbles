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
      paddingTop: pxToRem(theme.spacing['3']),
      paddingLeft: pxToRem(theme.spacing['5']),
      paddingRight: pxToRem(theme.spacing['3']),
      marginBottom: pxToRem(theme.spacing['5']),
    },
    navHeaderLabel: {
      ...getFontExpressive(pxToRem(13)),
      textTransform: 'uppercase',
      letterSpacing: '0.09em',
      color: theme.colors.text07,
      width: '100%',
    },
    navHeaderActionIcon: {
      color: theme.colors.text07,
      height: pxToRem(20),
    },
    navDropZone: {
      flexGrow: 1,
      height: 1,
    },
    navBar: {
      height: '100%',
    },
    navList: {
      padding: 0,
      margin: 0,
    },
    navListItem: {
      padding: 0,
      margin: 0,
      listStyle: 'none',
    },
  };
});
