import { createStyles } from '@mantine/styles';

const DividerStyles = createStyles((theme, { orientation }) => {
  const globalTheme = theme.other.global;

  return {
    root: {
      height: orientation === 'vertical' && 'auto',
    },
    label: {
      ...globalTheme.content.typo.body.xsm,
      color: globalTheme.border.color.line.default,
      '&:after': {
        borderColor: globalTheme.border.color.line.subtle,
      },
    },
  };
});

export { DividerStyles };
