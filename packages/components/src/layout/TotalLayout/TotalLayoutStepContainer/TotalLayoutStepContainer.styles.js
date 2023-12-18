import { createStyles } from '@mantine/styles';

const TotalLayoutStepContainerStyles = createStyles((theme) => ({
  root: {},
  stepContainer: {
    padding: '24px 0 0 0 ',
    width: '928px',
    height: '100vh',
  },
  formContainer: { backgroundColor: 'white', padding: '24px' },
  stepName: {
    fontSize: '23px',
    fontWeight: 500,
    lineHeight: '40px',
  },
}));

export { TotalLayoutStepContainerStyles };
