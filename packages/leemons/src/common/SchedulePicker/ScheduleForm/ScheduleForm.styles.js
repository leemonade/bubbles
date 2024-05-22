import { createStyles } from '@mantine/styles';
import { pxToRem } from '@bubbles-ui/components';

const ScheduleFormStyles = createStyles((theme) => ({
  root: {},
  scheduleRow: {
    display: 'flex',
    alignItems: 'center',
  },
  divider: {
    marginInline: pxToRem(8),
  },
  error: {
    marginLeft: pxToRem(8),
    color: theme.colors.fatic01,
  },
}));

export { ScheduleFormStyles };
