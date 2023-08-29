import {
  createStyles,
  pxToRem,
  getPaddings,
  getFontExpressive,
  getFontProductive,
} from '@bubbles-ui/components';

import { CONTEXT_TYPES } from '../NotificationProvider/context';

function getColor(theme, severity) {
  return {
    none: {
      background: 'none !important',
    },
    success: {
      background: `${theme.colors.fatic02} !important`,
    },
    warning: {
      background: `${theme.colors.fatic03} !important`,
    },
    info: {
      background: `${theme.colors.interactive01} !important`,
    },
    error: {
      background: `${theme.colors.fatic01} !important`,
    },
  }[severity];
}

export const NotificationStyles = createStyles((theme, { hasIcon, severity, type }) => {
  let root = {
    boxShadow: theme.shadows.shadow04,
    backgroundColor: theme.colors.uiBackground05,
    ...getPaddings(theme.spacing[4], theme.spacing[3]),
    paddingLeft: `${theme.spacing[4]}px !important`,

    '.mantine-ref_icon_1': {
      ...getColor(theme, severity),
    },

    '&::before': {
      display: 'none',
    },
  };

  let message = {
    color: theme.colors.text08,
  };

  let description = {
    ...getFontProductive(theme.fontSizes[1]),
    color: theme.colors.text08,
  };

  let title = {
    ...getFontProductive(theme.fontSizes[2], 500),
    color: theme.colors.text07,
  };

  let closeButton = {
    color: theme.colors.text05,
    '&:hover': {
      background: theme.colors.uiBackground03,
    },
  };

  if (type === CONTEXT_TYPES.CHAT) {
    root.backgroundColor = 'white';
    message.color = 'black';
    description.color = 'black';
    title.color = 'black';
    closeButton.color = 'black';
  }

  return {
    root,
    icon: {
      ...getColor(theme, severity),
    },
    message,
    description,
    title,
    closeButton,
  };
});
