import { createStyles } from '@bubbles-ui/components';

export const EditActivityBarStyles = createStyles((theme, { styles }) => {
  const { global } = theme.other;
  return {
    root: {
      backgroundColor: global.background.color.surface.subtle,
      height: 56,
      ...styles,
      paddingInline: 48,
    },
    deadlineWrapper: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      fontWeight: 500,
      color: theme.colors.text04,
      label: { color: theme.colors.text04 },
      gap: 24,
    },
    label: {
      ...global.content.typo.body['sm--bold'],
      color: global.content.color.text.default,
    },
    deadline: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
    },
    deadlineDate: {
      ...global.content.typo.body.sm,
      color: global.content.color.text.muted,
    },
    deadlineIcon: {
      cursor: 'pointer',
      padding: 2,
      color: theme.other.buttonAction.content.color.primary.default,
      ':active': {
        transform: 'translateY(2px)',
      },
    },
    datePicker: {
      minWidth: 240,
    },
    deadlineExtraTime: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flex: 1,
    },
    deadlineSwitch: {
      display: 'flex',
      flexDirection: 'row',
    },
  };
});
