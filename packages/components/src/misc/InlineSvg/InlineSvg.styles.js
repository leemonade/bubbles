import { createStyles } from '@mantine/styles';

export const InlineSvgStyles = createStyles((theme, { style }, getRef) => {
  return {
    root: {
      display: 'flex',
      overflow: 'hidden',
      position: 'absolute',
      margin: 0,
      inset: 0,
      boxSizing: 'border-box',
      justifyContent: 'center',
      alignItems: 'center',
      ...style,
    },
    loading: {},
    loaded: {},
    errored: {},
  };
});
