import { createStyles } from '@mantine/styles';

const InputWrapperStyles = createStyles((theme, { size, orientation }) => ({
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
}));

export { InputWrapperStyles };
