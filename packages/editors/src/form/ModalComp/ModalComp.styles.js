import { createStyles, pxToRem } from '@bubbles-ui/components';

export const ModalCompStyles = createStyles((theme, {}) => {
  return {
    root: {},
    modal: {},
    header: {
      color: theme.colors.text05,
      marginRight: 0,
      // padding: 16,
    },
    close: {
      color: theme.colors.text05,
    },
    title: {
      color: theme.colors.text05,
      fontWeight: 300,
      fontSize: pxToRem(20),
    },
    searchRow: {
      padding: pxToRem(16),
    },
    listWrapper: {
      backgroundColor: theme.colors.interactive03h,
      padding: pxToRem(16),
      width: '100%',
    },
    libraryItemList: {
      marginInline: 16,
      backgroundColor: theme.colors.mainWhite,
      // borderRadius: 4,
    },
    itemRoot: {
      padding: 8,
    },
    imageWrapper: {
      position: 'relative',
    },
    iconWrapper: {
      backgroundColor: theme.colors.interactive03h,
      borderBottomLeftRadius: 4,
      position: 'absolute',
      height: 20,
      width: 20,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    itemName: { marginLeft: 24 },
    extensionDateWrapper: {
      flex: 1,
    },
    itemExtension: {
      // marginLeft: 142,
    },
    itemDate: {
      // marginLeft: 16,
    },
    itemAction: { marginLeft: 104 },
  };
});
