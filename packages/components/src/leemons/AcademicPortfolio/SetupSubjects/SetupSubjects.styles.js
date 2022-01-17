import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../../theme.mixins';

export const SetupSubjectsStyles = createStyles((theme, {}) => {
  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
    },
    buttonRow: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    inputRow: { display: 'flex', justifyContent: 'space-between' },
    subjectsIDConfig: {
      display: 'flex',
      alignItems: 'center',
      span: {
        marginLeft: pxToRem(10),
        marginRight: pxToRem(10),
        marginTop: pxToRem(15),
      },
    },
  };
});
