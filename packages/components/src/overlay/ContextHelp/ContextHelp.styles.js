import { createStyles } from '@mantine/styles';
import { getBoxShadowFromToken } from '../../theme.mixins';

export const ContextHelpStyles = createStyles((theme, {}) => {
  const tooltipTheme = theme.other.tooltip;
  const globalTheme = theme.other.global;
  return {
    dropdown: {
      padding: 0,
      border: 'none',
      borderRadius: 2,
      ...getBoxShadowFromToken(globalTheme.shadow['300']),
    },
    contextRoot: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      padding: 12,
      backgroundColor: tooltipTheme.background.color['default--reverse'],
    },
    title: {
      ...tooltipTheme.content.typo,
      lineHeight: tooltipTheme.content.typo.lineHeight + 'px',
      color: tooltipTheme.content.color['default--reverse'],
    },
    content: {
      ...globalTheme.content.typo.body.sm,
      color: tooltipTheme.content.color['default--reverse'],
    },
  };
});
