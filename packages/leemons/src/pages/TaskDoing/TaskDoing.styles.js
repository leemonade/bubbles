import { createStyles, getFontExpressive } from '@bubbles-ui/components';

export const TaskDoingStyles = createStyles((theme, { isFirstStep }) => {
  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
    },
    header: {
      height: isFirstStep ? 'calc(25vh - 16px)' : 60,
      position: 'relative',
    },
    mainContent: {
      display: 'flex',
      height: isFirstStep ? 'calc(75vh - 16px)' : 'calc(100% - 60px)',
    },
    verticalStepper: { width: 232 },
    pages: {
      flex: 1,
      display: 'flex',
    },
    loremIpsum: {
      padding: '16px 96px',
    },
    resources: {
      padding: 16,
      backgroundColor: theme.colors.ui03,
    },
    subtitle: {
      display: 'block',
      paddingTop: 24,
      paddingBottom: 40,
      fontSize: 18,
    },
    mainText: {
      display: 'block',
      paddingTop: 16,
      paddingBottom: 32,
      fontSize: 16,
    },
    itemDisplayContainer: {
      backgroundColor: theme.colors.mainWhite,
      padding: 12,
    },
    fileItemList: {
      marginTop: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
    },
    continueButton: {
      textAlign: 'right',
    },
  };
});
