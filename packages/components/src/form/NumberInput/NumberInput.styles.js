import { createStyles } from '@mantine/styles';
import { getPaddings, getFocusStyles, getSpacing } from '../../theme.mixins';
import { getInputStyle, getRightSection, getInputSizes } from '../mixins/fieldStyles.mixins';

export const NumberInputStyles = createStyles((theme, { size }) => {
  return {
    root: {},
    input: {
      ...getInputSizes(size || 'md', theme.spacing),
      ...getInputStyle(theme),
    },
    controlUp: {
      position: 'relative',
      svg: {
        display: 'none',
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
  };
});
