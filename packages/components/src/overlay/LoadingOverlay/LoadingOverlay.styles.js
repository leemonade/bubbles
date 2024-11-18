import { createStyles } from '@mantine/styles';

const LoadingOverlayStyles = createStyles((theme) => ({
  root: {
    svg: {
      stroke: theme.other.core?.color?.primary['300'],
    },
  },
}));

export { LoadingOverlayStyles };
