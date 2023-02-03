import { createStyles } from '@bubbles-ui/components';

export const ToolbarStyles = createStyles((theme, { toolbarPosition }) => {
  const getToolbarPosition = () => {
    let position = '';
    if (toolbarPosition === 'right') position = 'flex-end';
    if (toolbarPosition === 'center') position = 'center';
    if (toolbarPosition === 'left') position = 'flex-start';
    const justifyContent = { justifyContent: position };
    return justifyContent;
  };

  return {
    toolbar: {
      display: 'flex',
      alignItems: 'end',
      gap: 12,
      ...getToolbarPosition(),
    },
    toolbarTool: {
      flex: 1,
      textAlign: 'right',
    },
  };
});
