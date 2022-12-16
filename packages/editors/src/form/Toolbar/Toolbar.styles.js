import { createStyles } from '@bubbles-ui/components';

export const ToolbarStyles = createStyles((theme) => {
  return {
    root: {
      width: '100%',
    },
    toolbar: {
      display: 'flex',
      alignItems: 'end',
      justifyContent: 'start',
      gap: 12,
    },
    toolbarTool: {
      flex: 1,
      textAlign: 'right',
    },
  };
});
