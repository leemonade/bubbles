import {
  createStyles,
  pxToRem,
  getPaddings,
  getFontExpressive,
  getFontProductive,
} from '@bubbles-ui/components';

export const HeaderDropdownStyles = createStyles((theme, {}) => {
  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
      width: '100%',
      position: 'relative',
    },
    header: {
      backgroundColor: theme.colors.mainWhite,
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
      padding: 24,
      display: 'flex',
      alignItems: 'center',
    },
    dropDown: {
      position: 'absolute',
      top: '100%',
      right: 0,
      left: 0,
      backgroundColor: theme.colors.mainWhite,
    },
    itemList: {
      paddingInline: 20,
      paddingBottom: 4,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'scroll',
    },
    searchInput: {
      padding: 16,
    },
    dropDownIcon: {
      color: theme.colors.text01,
      marginLeft: 16,
    },
    valueComponent: {
      flex: 1,
      display: 'flex',
      gap: 24,
      alignItems: 'center',
    },
    itemComponent: {
      display: 'flex',
      gap: 24,
      alignItems: 'center',
      cursor: 'pointer',
      paddingTop: 4,
      paddingBottom: 16,
    },
    itemComponentLabel: {
      flex: 1,
    },
    itemComponentDescription: {
      width: '35%',
      textAlign: 'right',
      marginRight: 20,
    },
    itemComponentIcon: {
      position: 'absolute',
      padding: 4,
      borderRadius: '50%',
      top: 10,
      right: -10,
      img: {
        filter:
          'invert(92%) sepia(71%) saturate(2%) hue-rotate(314deg) brightness(108%) contrast(101%)',
      },
    },
    itemImage: {
      position: 'relative',
    },
    itemIcon: {
      position: 'absolute',
      padding: 8,
      borderRadius: '50%',
      bottom: 0,
      right: -14,
      img: {
        filter:
          'invert(92%) sepia(71%) saturate(2%) hue-rotate(314deg) brightness(108%) contrast(101%)',
      },
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
    },
  };
});
