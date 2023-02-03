import { createStyles } from '@mantine/styles';

export const HeaderWrapperStyles = createStyles((theme, { stickyAt }) => {
  return {
    root: {
      position: 'sticky',
      top: stickyAt,
      zIndex: 1
    },
  };
});
