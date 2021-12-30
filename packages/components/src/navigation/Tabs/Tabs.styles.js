import { createStyles } from '@mantine/styles';

export const TabsStyles = createStyles((theme, { direction, position, panelColor }, getRef) => {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      // overflow: 'hidden',
    },
    panelList: {
      backgroundColor: panelColor === 'solid' ? theme.colors.uiBackground02 : 'transparent',
    },
  };
});
