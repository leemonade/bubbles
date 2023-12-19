import { createStyles } from '@mantine/styles';

const TotalLayoutStepContainerStyles = createStyles((theme, { hasFooter }) => ({
  root: {},
  stepContainer: {
    padding: '24px 0 0 0 ',
    width: '928px',
    height: '100%',
  },
  formContainer: {
    backgroundColor: 'white',
    padding: '24px',
    paddingBottom: hasFooter ? '100px' : '24px',
  },
  stepName: {
    fontSize: '23px',
    fontWeight: 500,
    lineHeight: '40px',
  },
}));

export { TotalLayoutStepContainerStyles };
