import { createStyles, pxToRem } from '@bubbles-ui/components';

export const MathBlockStyles = createStyles((theme) => ({
  root: {
    width: 'fit-content',
    display: 'inline-flex',
    margin: 0,
    padding: 0,
  },
  content: {
    margin: '0 !important',
    padding: '.2rem !important',
    minHeight: '1em',
    backgroundColor: '#666',
    color: 'white',
    borderRadius: 4,
    minWidth: '10px',
  },
}));
