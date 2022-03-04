import { createStyles } from '@bubbles-ui/components';

export const ButtonStyles = createStyles((theme, { actived, position }) => {
  const getBorder = () => {
    const positions = {
      default: {
        border: '1px solid',
      },
      start: {
        borderWidth: '1px 1px 1px 1px',
        borderTopRightRadius: '0px',
        borderBottomRightRadius: '0px',
      },
      center: {
        borderWidth: '1px 1px 1px 0px',
        borderRadius: '0px',
      },
      end: {
        borderWidth: '1px 1px 1px 0px',
        borderTopLeftRadius: '0px',
        borderBottomLeftRadius: '0px',
      },
    };
    return positions[position];
  };

  return {
    root: {
      backgroundColor: actived ? theme.colors.interactive02h : theme.colors.mainWhite,
      color: actived ? '#EDEFF5' : theme.colors.text01,
      height: 40,
      width: 40,
      ...getBorder(),
      borderColor: actived ? theme.colors.text02 : theme.colors.ui01,
      '&:hover': {
        backgroundColor: actived ? theme.colors.interactive02h : theme.colors.interactive03,
        color: actived ? '#EDEFF5' : theme.colors.text01,
      },
      '&:active': {
        backgroundColor: actived ? theme.colors.interactive02h : theme.colors.interactive03,
        color: actived ? '#EDEFF5' : theme.colors.text01,
      },
    },
    inner: {},
    leftIcon: {},
  };
});
