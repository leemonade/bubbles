import { createStyles } from '@mantine/styles';

export const InputWrapperStyles = createStyles((theme, { size, orientation }) => {
  return {
    root: {
      display: 'flex',
      flexDirection: orientation === 'vertical' ? 'column' : 'row',
      gap: theme.spacing[2],
      position: 'relative',
    },
    header: {
      width: orientation === 'vertical' ? 'auto' : '35%',
    },
    content: {
      flex: 1,
      width: '100%',
    },
  };
});
