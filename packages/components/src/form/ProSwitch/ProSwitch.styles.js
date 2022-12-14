import { createStyles } from '@mantine/styles';
import { getFontExpressive } from '../../theme.mixins';

export const ProSwitchStyles = createStyles((theme, { color, hasIcon }) => {
  return {
    label: {
      ...getFontExpressive(theme.fontSizes[1]),
    },
    container: {
      position: 'relative',
    },
    body: {
      alignItems: 'center',
    },
    icon: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      left: '0',
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      backgroundColor: color || '#3C72C2',
      zIndex: 1,
      pointerEvents: 'none',
      fontSize: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.colors.mainWhite,
      transitionTimingFunction: 'cubic-bezier(.51,.3,0,1.21)',
      transitionDuration: '150ms',
    },
    iconActive: {
      transform: 'translate(12px, -50%)!important',
    },
    track: {
      minHeight: 20,
      minWidth: 32,
      height: 20,
      width: 32,
      cursor: 'pointer',
      border: '1px solid',
      borderColor: `${theme.colors.ui01}`,
      boxSizing: 'border-box',
      backgroundColor: 'transparent',
      transition: `all 150ms ${theme.transitionTimingFunction}`,
      '&:hover': {
        backgroundColor: 'white',
      },
      'input:checked + &': {
        backgroundColor: color,
        borderColor: color,
        '.mantine-Switch-thumb': {
          left: 'calc(100% - 11px - 2px)',
          backgroundColor: hasIcon ? 'transparent' : '#FFF',
        },
        '&:hover': {
          backgroundColor: color,
          borderColor: color,
        },
      },
    },
    thumb: {
      height: 9,
      width: 9,
      left: 5,
      backgroundColor: hasIcon ? 'transparent' : color || '#3C72C2',
    },
  };
});
