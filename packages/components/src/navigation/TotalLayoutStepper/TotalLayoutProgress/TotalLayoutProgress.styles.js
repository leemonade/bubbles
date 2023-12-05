import { createStyles } from '@mantine/styles';

const TotalLayoutProgressStyles = createStyles(
  (theme, { position, isCurrent, isCompleted, state }) => {
    const isFirst = position === 'start';
    const isLast = position === 'end';

    return {
      root: { minHeight: 50, minWidth: 24 },
      progressContainer: {
        height: 50,
        width: 24,
        marginRight: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      },
      filledBar: {
        position: 'absolute',
        height: isLast ? 25 : 50,
        width: 1,
        backgroundColor: theme.other.stepper?.background?.color?.completed,
        top: isFirst ? 25 : 0,
      },
      incompleteBar: {
        position: 'absolute',
        top: isFirst ? 25 : 0,
        height: isLast ? 25 : 50,
        width: 1,
        backgroundColor: theme.other.stepper?.background?.color?.default,
      },
      currentBarUp: {
        position: 'absolute',
        top: isFirst ? 25 : 0,
        height: 25,
        width: 1,
        zIndex: 0,
        backgroundColor: theme.other.stepper?.background?.color?.completed,
        transition: 'height 0.2s ease-in-out',
      },
      currentBarDown: {
        display: isLast && 'none',
        position: 'absolute',
        top: 25,
        height: 25,
        width: 1,
        zIndex: 0,
        backgroundColor: isCompleted
          ? theme.other.stepper?.background?.color?.completed
          : theme.other.stepper?.background?.color?.default,
        transition: 'height 0.2s ease-in-out',
      },
      currentIconContainer: {
        width: 16,
        height: 16,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
        borderRadius: '50%',
        border: `2px solid ${theme.other.stepper?.background?.color?.completed}`,
        color: theme.other.stepper?.color?.icon || '#0C1F22',
        backgroundColor: theme.stepper?.background?.color?.['active--reverse'] || '#F1FFBD',
      },
      currentIcon: {
        zIndex: 2,
        color: theme.other.stepper?.color?.icon || '#0C1F22',
      },
      completedIcon: {
        backgroundColor: theme.other.stepper?.background?.color?.completed,
        borderRadius: '50%',
        zIndex: 1,
        color: theme.other.stepper?.color?.icon || '#0C1F22',
        padding: 4,
      },
      incompleteIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
        width: 16,
        height: 16,
        borderRadius: '50%',
        backgroundColor: theme.other.stepper?.background?.color?.default,
      },
      KOIcon: {
        backgroundColor: theme.colors.fatic01,
        borderRadius: '50%',
        zIndex: 1,
        color: theme.colors.mainWhite,
        padding: 4,
      },
    };
  },
);

export { TotalLayoutProgressStyles };
