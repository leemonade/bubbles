import { createStyles } from '@mantine/styles';

const TotalLayoutStepContainerStyles = createStyles((theme, { hasFooter, clean }) => ({
  root: {},
  stepContainer: {
    padding: '24px 0 0 0 ',
    width: '928px',
    height: '100%',
  },
  formContainer: {
    backgroundColor: !clean && 'white',
    padding: !clean && '24px',
    paddingBottom: hasFooter ? '70px' : '24px',
  },
  stepName: {
    fontSize: '23px',
    fontWeight: 500,
    lineHeight: '40px',
  },
}));

export { TotalLayoutStepContainerStyles };
