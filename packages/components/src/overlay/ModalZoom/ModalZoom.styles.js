import { createStyles } from '@mantine/styles';

export const ModalZoomStyles = createStyles((theme, { open }) => {
  return {
    modalWrapper: {
      backgroundColor: 'rgba(0,0,0,0.7)',
      position: 'fixed',
      left: 0,
      top: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 999,
      opacity: open ? 1 : 0,
      pointerEvents: open ? 'all' : 'none',
      transition: 'opacity 0.3s ease-in-out',
    },
    close: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: '50px',
      height: '50px',
      backgroundColor: 'rgba(0,0,0,0.7)',
      color: theme.colors.text07,
      zIndex: 2,
      borderRadius: '0 0 0 4px',
      fontSize: theme.fontSizes[5],
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      svg: {
        transition: '300ms',
      },
      '&:hover': {
        svg: {
          transform: 'rotate(90deg)',
        },
      },
    },
    content: {
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    tools: {
      position: 'absolute',
      zIndex: 2,
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      height: '50px',
      backgroundColor: 'rgba(0,0,0,0.7)',
      color: theme.colors.text07,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '4px 4px 0 0',
      fontSize: theme.fontSizes[5],
      div: {
        height: '50px',
        width: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: '100ms',
        '&:hover': {
          transform: 'scale(1.1)',
        },
      },
    },
  };
});
