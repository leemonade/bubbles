import { createStyles, getSizeValue } from '@mantine/styles';

export const TabsStyles = createStyles((theme, { orientation, tabPadding }, getRef) => {
  const tabsList = { ref: getRef('tabsList') };

  return {
    tabsListWrapper: {},
    tabsList,

    root: {
      display: orientation === 'vertical' ? 'flex' : 'block',
    },

    body: {
      [orientation === 'horizontal' ? 'paddingTop' : 'paddingLeft']: getSizeValue({
        size: tabPadding,
        sizes: theme.spacing,
      }),
    },

    default: {
      [orientation === 'horizontal'
        ? 'borderBottom'
        : 'borderRight']: `1px solid ${theme.colors.ui01}`,

      [`& .${tabsList.ref}`]: {
        [orientation === 'horizontal' ? 'marginBottom' : 'marginRight']: -1,
      },
    },
  };
});
