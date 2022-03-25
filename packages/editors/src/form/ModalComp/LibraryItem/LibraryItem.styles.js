import { createStyles, pxToRem } from '@bubbles-ui/components';

export const LibraryItemStyles = createStyles((theme, { selected }) => {
  return {
    root: {
      padding: pxToRem(8),
    },
    extensionDateWrapper: {
      flex: 1,
      marginLeft: 24,
      minWidth: 112,
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
    name: {
      marginLeft: 24,
    },
    action: {
      marginLeft: 24,
      flex: selected && 1,
      textAlign: 'right',
    },
  };
});
