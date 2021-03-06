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
    icon: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      left: '0',
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      backgroundColor: color,
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
    input: {
      width: '32px',
      minWidth: '32px',
      height: '20px',
      minHeight: '20px',
      border: '1px solid',
      borderColor: theme.colors.ui01,
      backgroundColor: 'transparent',
      '&:checked': {
        backgroundColor: color,
        borderColor: color,
      },
      '&:before': {
        width: '9px',
        height: '9px',
        border: 'none',
        transform: 'translateX(5.5px)',
        backgroundColor: color,
        display: hasIcon ? 'none' : 'block',
      },
      '&:checked::before': {
        transform: 'translateX(17.5px)',
        backgroundColor: theme.colors.mainWhite,
      },
    },
  };
});
