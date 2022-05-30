import { createStyles, getFontExpressive } from '@bubbles-ui/components';

export const HeaderDropdownStyles = createStyles((theme, { isOpened, headerRef }) => {
  const { height, top } = headerRef?.current?.getBoundingClientRect() || { height: 0, top: 0 };
  const headerHeight = height + top || 0;

  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
      width: '100%',
      position: 'relative',
    },
    header: {
      backgroundColor: theme.colors.mainWhite,
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
      padding: '24px 24px 24px 26px',
      display: 'flex',
      alignItems: 'center',
    },
    dropDown: {
      position: 'absolute',
      top: '100%',
      right: 0,
      left: 0,
      backgroundColor: theme.colors.mainWhite,
      boxShadow: '32px 44px 32px rgba(35, 43, 60, 0.05), 100px 40px 60px rgba(51, 63, 86, 0.03)',
      opacity: isOpened ? 1 : 0,
      transform: isOpened ? 'translateY(0)' : 'translateY(-10px)',
      transition: 'opacity 0.2s ease-in-out, transform 0.2s ease-in-out',
      zIndex: 200,
      pointerEvents: isOpened ? 'all' : 'none',
      paddingBottom: 20,
    },
    itemList: {
      paddingInline: 22,
      paddingBottom: 4,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'scroll',
      maxHeight: `calc(100vh - ${headerHeight + 71 + 24}px)`,
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
      '&:last-child': {
        paddingBottom: 0,
      },
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
      border: '2px solid',
      borderColor: theme.colors.uiBackground01,
      position: 'absolute',
      padding: 4,
      borderRadius: '50%',
      top: 10,
      right: -10,
      img: {
        filter: 'brightness(0) invert(1)',
      },
    },
    itemImage: {
      position: 'relative',
    },
    itemIcon: {
      border: '2px solid',
      borderColor: theme.colors.uiBackground01,
      position: 'absolute',
      padding: 8,
      borderRadius: '50%',
      bottom: 0,
      right: -14,
      img: {
        filter: 'brightness(0) invert(1)',
      },
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
    },
  };
});
