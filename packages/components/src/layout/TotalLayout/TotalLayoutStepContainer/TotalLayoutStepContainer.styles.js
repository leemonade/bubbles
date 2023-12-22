import { createStyles } from '@mantine/styles';

const TotalLayoutStepContainerStyles = createStyles((theme, { hasFooter, clean }) => ({
  root: {},
  stepContainer: {
    padding: '30px 0 0 0 ',
    width: 928,
    height: '100%',
  },
  formContainer: {
    backgroundColor: !clean && 'white',
    padding: !clean && 24,
    paddingBottom: hasFooter ? 70 : 24,
  },
  stepName: {
    marginBottom: 12,
  },
}));

export { TotalLayoutStepContainerStyles };
