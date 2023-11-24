/* eslint-disable import/prefer-default-export */
import { createStyles, getFontProductive } from '@bubbles-ui/components';

export const eventWrapperStyles = createStyles((theme, { bgColor }) => ({
  date: {
    ...getFontProductive('10px', '500'),
    color: theme.colors.text05,
    marginTop: theme.spacing[1],
  },
  texts: {
    marginTop: 0, // theme.spacing[1]
    lineHeight: '1em',
  },
  icon: {
    borderRadius: '50%',
    color: `${theme.colors.text07}!important`,
    backgroundColor: `${bgColor}!important`,
    minWidth: '20px',
    minHeight: '20px',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',
    img: {
      filter: 'brightness(0) invert(1)',
    },
  },
}));
