import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

export const ContextContainerStyles = createStyles((theme, { padded }) => {
  let padding = 0;

  if (padded === true) {
    padding = theme.spacing[5];
  } else if (padded === 'vertical') {
    padding = `${theme.spacing[5]}px 0`;
  } else if (padded === 'horizontal') {
    padding = `0 ${theme.spacing[5]}px`;
  }

  return {
    root: {
      padding,
    },
    description: {
      margin: 0,
    },
  };
});
