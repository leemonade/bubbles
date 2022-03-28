import { createStyles } from '@bubbles-ui/components';

export const ToolbarToolStyles = createStyles((theme) => {
  return {
    root: {
      display: 'flex',
      // alignContent: 'flex-end',
      // alignItems: 'center',
      justifyContent: 'flex-end',
      gap: 16,
      padding: 8,
      flexWrap: 'wrap',
    },
  };
});
