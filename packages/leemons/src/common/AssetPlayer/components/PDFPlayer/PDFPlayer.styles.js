import { createStyles, pxToRem } from '@bubbles-ui/components';

export const PDFPlayerStyles = createStyles((theme, { isThumbnailOpen }) => {
  const globalTheme = theme.other.global;
  return {
    document: {
      display: 'flex',
      overflow: 'hidden',
    },
    thumbnailContainer: {
      minWidth: 122,
      position: 'relative',
      maxWidth: 216,
      flex: 1,
      overflow: 'hidden',
      transform: isThumbnailOpen ? 'translateX(0%)' : 'translateX(calc(-100% + 52px))',
      transition: 'transform 0.2s',
    },
    thumbnailTranslate: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
    thumbnailHeader: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding: 16,
    },
    thumbnails: {
      display: 'flex',
      flexDirection: 'row',
      gap: 4,
      rowGap: 16,
      flexWrap: 'wrap',
      alignContent: 'flex-start',
      padding: 16,
      transform: isThumbnailOpen ? 'translateX(0%)' : 'translateX(calc(-52px))',
      transition: 'transform 0.2s',
    },
    thumbnailWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: 90,
      gap: 12,
    },
    thumbnailPage: {
      cursor: 'pointer',
    },
    pageLabel: {
      ...globalTheme.content.typoMobile.caption,
      color: globalTheme.content.color.text.default,
      lineHeight: '16px',
    },
    activeThumbnail: {
      boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.4)',
    },
    activePageContainer: {
      flex: 2,
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
    },
    activePage: {
      '& canvas': {
        borderRadius: 10,
      },
    },
    paginator: {
      position: 'absolute',
      paddingBlock: 8,
      paddingInline: 16,
      left: '50%',
      bottom: 0,
      transform: 'translate(-50%, 0)',
      backgroundColor: globalTheme.background.color.surface.default,
      height: 52,
      display: 'flex',
      gap: 22,
      alignItems: 'center',
      borderRadius: 4,
      boxShadow: '0px 2px 0px rgba(217, 225, 237, 0.16), 0px 10px 36px rgba(26, 32, 43, 0.12)',
      userSelect: 'none',
    },
    paginatorIcon: {
      color: globalTheme.content.color.icon.default,
      cursor: 'pointer',
      '&:active': {
        transform: 'translateY(2px)',
      },
    },
    disabledIcon: {
      cursor: 'not-allowed',
      color: globalTheme.content.color.icon.muted,
    },
    paginatorLabel: {
      ...globalTheme.content.typo.heading.xsm,
      color: globalTheme.content.color.text.default,
    },
    arrowIcon: {
      color: globalTheme.content.color.text.subtle,
      cursor: 'pointer',
      transform: isThumbnailOpen && 'rotate(-180deg)',
      transition: 'transform 300ms',
      minHeight: 20,
      minWidth: 20,
    },
  };
});
