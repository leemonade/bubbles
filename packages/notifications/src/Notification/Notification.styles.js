import {
  createStyles,
  getPaddings,
  getFontProductive,
  getFocusDefaultBorder,
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

const NotificationStyles = createStyles((theme, { hasIcon, severity, type }) => {
  const buttonActionTheme = theme.other.buttonAction;
  const root = {
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

  const message = {
    color: theme.colors.text08,
  };

  const description = {
    ...getFontProductive(theme.fontSizes[1]),
    color: theme.colors.text08,
  };

  const title = {
    ...getFontProductive(theme.fontSizes[2], 500),
    color: theme.colors.text07,
  };

  const closeButton = {
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
    closeButton['&:hover'] = {
      background: buttonActionTheme.background.color.primary.hover,
    };
    closeButton['&:active'] = {
      backgroundColor: buttonActionTheme.background.color.primary.pressed,
    };
    closeButton['&:focus-visible'] = {
      backgroundColor: buttonActionTheme.background.color.primary.hover,
      ...getFocusDefaultBorder(theme),
      outline: 'none',
    };
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

export { NotificationStyles };
