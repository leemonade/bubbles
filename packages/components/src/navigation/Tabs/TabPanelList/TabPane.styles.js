import { createStyles } from '@mantine/styles';
import { modulevspacing } from './../../../commons.mixins';

export const TabPaneStyles = createStyles((theme, { active }, getRef) => {
  return {
    root: {
      width: '100%',
      flex: 'none', 
      ...modulevspacing(theme),
    },
  };
});
