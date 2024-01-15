import { createStyles } from '@mantine/styles';

const TotalLayoutStepContainerStyles = createStyles((theme, { hasFooter, clean, fullWidth }) => ({
  root: {},
  stepContainer: {
    padding: '30px 0 0 0 ',
    width: fullWidth ? '100%' : 928,
    marginLeft: fullWidth ? theme.spacing[5] : 0,
    marginRight: fullWidth ? theme.spacing[5] : 0,
    height: '100%',
    '@media (min-width: 1920px)': {
      maxWidth: 1200,
    },
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
