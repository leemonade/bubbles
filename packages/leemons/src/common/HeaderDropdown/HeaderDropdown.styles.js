import { createStyles, getFontExpressive } from '@bubbles-ui/components';

const HeaderDropdownStyles = createStyles(
  (theme, { withSearchInput, hasDescription, itemSelectedFontSize, itemSelectedFontWeight }) => ({
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
      width: '100%',
      position: 'relative',
    },
    header: {
      display: 'flex',
      alignItems: hasDescription ? 'flex-start' : 'center',
    },
    dropDown: {
      padding: 20,
      paddingRight: 0,
      zIndex: 999,
      '&.mantine-Popover-dropdown': {
        padding: 8,
      },
    },
    dropDownContent: {
      maxHeight: 300,
      maxWidth: 360,
    },
    itemList: {
      display: 'flex',
      flexDirection: 'column',
      overflowY: 'auto',
      overflowX: 'hidden',
      maxHeight: withSearchInput ? 230 : 290,
    },
    searchInput: {
      paddingRight: 20,
      paddingBottom: 20,
    },
    dropDownIcon: {
      marginLeft: 16,
      alignSelf: 'baseline',
    },
    valueComponent: {
      display: 'flex',
      gap: 16,
      alignItems: 'center',
    },
    itemComponent: {
      justifyContent: 'space-between',
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      cursor: 'pointer',
      padding: 8,
      borderRadius: 4,
    },
    itemComponentSelected: {
      justifyContent: 'space-between',
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      cursor: 'pointer',
      padding: 8,
      borderRadius: 4,
      backgroundColor: theme.other.buttonAction.background.color.primary.down,
    },
    itemComponentContent: {
      display: 'flex',
      gap: 8,
      alignItems: 'center',
    },
    itemComponentIcon: {
      color: theme.other.global.content.color.positive.default,
      fontSize: 14,
      marginLeft: 24,
    },
    itemComponentLabel: {
      fontFamily: 'Albert Sans',
      fontSize: '16px',
      color: '#2F463F',
      fontWeight: 400,
    },
    itemComponentDescription: {
      fontFamily: 'Albert Sans',
      fontSize: '13px',
      fontWeight: 400,
      color: '#4D5358',
    },
    itemIcon: {
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      img: {
        filter: 'brightness(0) invert(1)',
      },
      height: 48,
      width: 48,
    },
    itemIconSmall: {
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      img: {
        filter: 'brightness(0) invert(1)',
      },
      height: 32,
      width: 32,
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
    },
    valueItemContent: {
      display: 'flex',
      flexDirection: 'column',
    },
    title: {
      fontFamily: 'Albert Sans',
      fontSize: itemSelectedFontSize,
      fontWeight: itemSelectedFontWeight,
      color: '#2F463F',
    },
    description: {
      fontFamily: 'Albert Sans',
      fontSize: '14px',
      fontWeight: 400,
      color: '#4D5358',
    },
  }),
);

export { HeaderDropdownStyles };
