import { createStyles } from '@mantine/styles';

const VerticalContainerStyles = createStyles((theme) => {
  const stepperTheme = theme.other.stepper;

  return {
    root: {
      position: 'relative',
      display: 'flex',
      width: '100%',
      overflow: 'hidden',
      flex: 1,
    },
    stepper: {
      position: 'sticky',
      top: 25,
      height: 'fit-content',
      minWidth: 192,
      marginRight: 16,
      marginTop: 25,
    },
    content: {
      width: 928,
      '@media (min-width: 1920px)': {
        width: 1200,
      },
    },
  };
});

export { VerticalContainerStyles };