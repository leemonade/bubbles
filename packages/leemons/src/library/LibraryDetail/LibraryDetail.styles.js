import { createStyles, getFontExpressive } from '@bubbles-ui/components';

export const LibraryDetailStyles = createStyles((theme, { drawer, open }) => {
  let drawerProps = {};
  if (drawer && open) {
    drawerProps = {
      border: `1px solid ${theme.colors.ui01}`,
      borderRight: 0,
      borderBottom: 0,
      borderRadius: '4px 0 0 0',
    };
  }
  return {
    root: {
      ...drawerProps,
    },
    wrapper: {
      opacity: 0,
      transition: 'opacity 0.2s ease-out',
    },
    show: {
      opacity: 1,
    },
  };
});
