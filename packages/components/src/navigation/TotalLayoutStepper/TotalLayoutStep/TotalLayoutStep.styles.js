import { createStyles } from '@mantine/styles';

const TotalLayoutStepStyles = createStyles((theme, { isActive, isCompleted }) => {
  const getLabelStyle = () => {
    if (isActive)
      return {
        ...theme.other.stepper.content.typo,
        color: 'black',
      };
    if (isCompleted && !isActive)
      return {
        ...theme.other.stepper.content.typo,
        color: '#0C1F22',
        fontWeight: 400,
      };
    return {
      ...theme.other.stepper.content['typo-pending'],
      color: theme.other.stepper.content.color.default.value,
    };
  };

  return {
    root: {},
    labelContainer: {
      minHeight: 50,
      maxWidth: 156,
    },
    label: getLabelStyle(),
    badge: {
      marginLeft: '12px',
    },
  };
});

export { TotalLayoutStepStyles };
