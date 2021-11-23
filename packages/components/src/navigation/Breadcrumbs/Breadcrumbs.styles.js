import { createStyles } from '@mantine/styles';

import { getFontExpressive } from '../../theme.mixins';

export const BreadcrumbsStyles = createStyles((theme) => {
  return {
    root: {
      alignItems: 'baseline',

    },

    listBreadcrumbs: {
      padding: '0',
    },
    breadcrumb: {
      color: theme.colors.text04,
      ...getFontExpressive('0.79rem'),
      '&:hover': {
        textDecoration: 'none',
        color: theme.colors.text01,
      },

      '&:last-child': { color: theme.colors.text01 },
    },
    back: {marginRight: '8px'}
  };
});
