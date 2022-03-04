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
    },
    dropdown: {},
    hiddenChilds: {
      position: 'absolute',
      top: -9999,
    },
  };
});
