import { createStyles } from '@mantine/styles';
import { getInputStyle, getInputSizes } from '../mixins/fieldStyles.mixins';

const NumberInputStyles = createStyles((theme, { size, hasIcon, customDesign }) => {
  const inputTheme = theme.other.input;
  const customDesignProps = {
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'center',
  };
  return {
    root: {
      position: 'relative',
    },
    input: {
      ...getInputSizes(size || 'md', inputTheme.spacing.padding, hasIcon),
      ...getInputStyle(inputTheme, theme.other.global),
      paddingRight: 24,
      minHeight: 40,
      ...(customDesign && customDesignProps),
    },
    icon: {
      width: 32,
      color: inputTheme.content.color.icon,
    },
    controlUp: {
      position: 'relative',
      svg: {
        display: 'none',
      },
      '&:disabled:after': {
        borderColor: 'transparent transparent #adb5bd transparent',
      },
      '&:after': {
        content: '""',
        position: 'absolute',
        top: 'calc(50% - 2.5px)',
        left: 'calc(50% - 4.5px)',
        display: 'block',
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderWidth: '0px 5px 5px 5px',
        borderColor: 'transparent transparent black transparent',
        transform: 'translateX(-1px)',
      },
    },
    controlDown: {
      position: 'relative',
      svg: {
        display: 'none',
      },
      '&:disabled:after': {
        borderColor: '#adb5bd transparent transparent transparent',
      },
      '&:after': {
        content: '""',
        position: 'absolute',
        top: 'calc(50% - 2.5px)',
        left: 'calc(50% - 4.5px)',
        display: 'block',
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderWidth: '5px 5px 0px 5px',
        borderColor: 'black transparent transparent transparent',
        transform: 'translateX(-1px)',
      },
    },
    customDesignRoot: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: 'fit-content',
      position: 'relative',
    },
    customDesignHandlerAdd: {
      position: 'absolute',
      right: 0,
    },
    customDesignHandlerRemove: {
      position: 'absolute',
      left: 0,
      zIndex: 10,
    },
  };
});

export { NumberInputStyles };
