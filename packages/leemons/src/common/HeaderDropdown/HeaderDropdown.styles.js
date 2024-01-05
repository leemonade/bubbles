import { createStyles, getFontExpressive } from '@bubbles-ui/components';

export const HeaderDropdownStyles = createStyles(
  (theme, { isOpened, headerRef, withSearchInput }) => {
    const { height, top } = headerRef?.current?.getBoundingClientRect() || { height: 0, top: 0 };
    const headerHeight = height + top || 0;
    const globalTheme = theme.other.global;
    return {
      root: {
        ...getFontExpressive(theme.fontSizes['2']),
        width: '100%',
        position: 'relative',
      },
      header: {
        display: 'flex',
        alignItems: 'center',
      },
      dropDown: {
        position: 'absolute',
        top: 50,
        right: 0,
        left: 0,
        backgroundColor: theme.colors.mainWhite,
        opacity: isOpened ? 1 : 0,
        transform: isOpened ? 'translateY(0)' : 'translateY(-10px)',
        transition: 'opacity 0.2s ease-in-out, transform 0.2s ease-in-out',
        zIndex: 200,
        pointerEvents: isOpened ? 'all' : 'none',
        paddingBottom: 20,
        width: 'max(400px, 100%)',
        maxHeight: 300,
        maxWidth: 360,
        border: '1px solid #C2CAD6',
        boxShadow:
          '0px 10px 36px 0px rgba(26, 32, 43, 0.12), 0px 2px 0px 0px rgba(217, 225, 237, 0.16)',
        borderRadius: 4,
        overflow: 'hidden',
      },
      itemList: {
        padding: 16,
        paddingBottom: 4,
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto',
        overflowX: 'hidden',
        maxHeight: withSearchInput ? 230 : 290,
      },
      searchInput: {
        padding: 16,
        paddingBottom: 0,
      },
      dropDownIcon: {
        // color: theme.colors.text01,
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
        backgroundColor: '#E7F7B0',
      },
      itemComponentContent: {
        display: 'flex',
        gap: 8,
        alignItems: 'center',
      },
      itemComponentIcon: {
        color: '#5CBC6A',
        fontSize: 14,
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
        fontSize: '18px',
        fontWeight: 600,
        color: '#2F463F',
      },
      description: {
        fontFamily: 'Albert Sans',
        fontSize: '14px',
        fontWeight: 400,
        color: '#4D5358',
      },
    };
  },
);
