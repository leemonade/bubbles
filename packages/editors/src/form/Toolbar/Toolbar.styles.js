import { createStyles } from '@bubbles-ui/components';

export const ToolbarStyles = createStyles((theme) => {
  return {
    root: {
      width: '100%',
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'start',
      gap: 16,
      borderRight: '1px solid black',
    },
  };
});
