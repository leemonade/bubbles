import { createStyles } from '@bubbles-ui/components';

export const ButtonStyles = createStyles((theme, { actived }) => {
  return {
    root: {
      backgroundColor: actived ? theme.colors.interactive02h : theme.colors.mainWhite,
      color: actived ? '#EDEFF5' : theme.colors.text01,
      border: '1px solid',
      borderColor: actived ? theme.colors.text02 : theme.colors.ui01,
      '&:hover': {
        backgroundColor: actived ? theme.colors.interactive02h : theme.colors.interactive03,
        color: actived ? '#EDEFF5' : theme.colors.text01,
      },
    },
  };
});
