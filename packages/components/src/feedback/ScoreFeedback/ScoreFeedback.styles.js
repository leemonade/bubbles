/* eslint-disable import/prefer-default-export */
import { createStyles } from '@mantine/styles';

export const ScoreFeedbackStyles = createStyles((theme, { styles }) => ({
  root: {
    borderRadius: 8,
    display: 'flex',
    border: `1px solid ${theme.colors.ui02}`,
    overflow: 'hidden',
    ...styles,
  },
  children: {
    flex: 1,
    backgroundColor: theme.colors.uiBackground01,
  },
}));
