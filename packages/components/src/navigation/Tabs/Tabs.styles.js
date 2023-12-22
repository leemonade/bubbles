import { createStyles } from '@mantine/styles';

const TabsStyles = createStyles(
  (theme, { direction, position, panelColor, fullHeight }, getRef) => {
    const rootProps = {
      display: 'flex',
      flexDirection: 'column',
    };

    if (fullHeight) {
      rootProps.flex = 1;
      rootProps.height = '100%';
      rootProps.width = '100%';
      rootProps.overflow = 'hidden';
    }

    return {
      root: {
        ...rootProps,
      },
      panelList: {
        display: 'flex',
        backgroundColor: panelColor === 'solid' ? theme.colors.uiBackground02 : 'transparent',
        flex: 1,
        height: fullHeight && '100%',
        overflowY: fullHeight && 'auto',
      },
    };
  },
);

export { TabsStyles };
