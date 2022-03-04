import { createStyles } from '@bubbles-ui/components';

export const ToolbarToolStyles = createStyles((theme) => {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'end',
      gap: 8,
      padding: 8,
      flexWrap: 'wrap',
    },
  };
});
