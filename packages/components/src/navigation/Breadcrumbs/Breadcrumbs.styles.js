import { createStyles } from '@mantine/styles';

export const BreadcrumbsStyles = createStyles((theme) => {
  return {
    root: {
      alignItems: 'center',
    },
    listBreadcrumbs: {},
    breadcrumb: {
      color: theme.colors.text04,
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
        // color: theme.colors.text01,
      },

      '&:last-child': {
        color: theme.colors.text01,
        '&:hover': {
          textDecoration: 'none',
        },
      },
    },
    backLabel: {
      color: theme.colors.text04,
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
    backIcon: {
      height: 12,
      color: theme.colors.text04,
    },
  };
});
