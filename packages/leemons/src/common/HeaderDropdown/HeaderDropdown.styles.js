import { createStyles, getFontExpressive } from '@bubbles-ui/components';

export const HeaderDropdownStyles = createStyles((theme, { isOpened, headerRef }) => {
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
      overflowY: 'auto',
      overflowX: 'hidden',
      maxHeight: isOpened ? `calc(100vh - ${headerHeight + 71 + 24}px)` : 0,
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
      ...globalTheme.content.typo.body['lg--bold'],
      color: globalTheme.content.color.text.emphasis,
    },
    itemComponentDescription: {
      ...globalTheme.content.typo.body.sm,
      color: globalTheme.content.color.text.muted,
    },
    itemIcon: {
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      img: {
        filter: 'brightness(0) invert(1)',
      },
      height: 56,
      width: 56,
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
    },
    valueItemContent: {
      display: 'flex',
      flexDirection: 'column',
    },
    title: {
      ...globalTheme.content.typo.heading.xlg,
      color: globalTheme.content.color.text['default--reverse'],
    },
    description: {
      ...globalTheme.content.typo.heading['lg--bold'],
      color: globalTheme.content.color.text['default--reverse'],
    },
  };
});
