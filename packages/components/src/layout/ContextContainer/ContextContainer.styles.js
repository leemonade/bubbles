import { createStyles } from '@mantine/styles';

const ContextContainerStyles = createStyles((theme, { padded }) => {
  let padding = 0;

  if (padded === true) {
    padding = theme.spacing[5];
  } else if (padded === 'vertical') {
    padding = `${theme.spacing[5]}px 0`;
  } else if (padded === 'horizontal') {
    padding = `0 ${theme.spacing[5]}px`;
  }

  return {
    root: {
      padding,
      '&.section-wrapper > .section-content-wrapper > .section-wrapper:not(:first-child):has(.section-title)':
        {
          marginTop: '18px',
        },
    },
    description: {
      margin: 0,
    },
    title: {
      display: 'flex',
    },
  };
});

export { ContextContainerStyles };
