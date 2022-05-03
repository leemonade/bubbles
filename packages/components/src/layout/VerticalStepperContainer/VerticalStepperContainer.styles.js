import { createStyles } from '@mantine/styles';

export const VerticalStepperContainerStyles = createStyles((theme, { disableContentPadding }) => {
  return {
    root: {
      display: 'flex',
      width: '100%',
    },
    stepper: {
      width: '276px',
    },
    content: {
      paddingLeft: disableContentPadding ? 0 : theme.spacing[10],
      width: '100%',
    },
  };
});
