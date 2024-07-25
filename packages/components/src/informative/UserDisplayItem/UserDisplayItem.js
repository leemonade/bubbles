import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { PluginComunicaIcon, AlertWarningTriangleIcon, BlockIcon } from '@bubbles-ui/icons/solid/';
import { Highlight } from '@mantine/core';
import { Box } from '../../layout/Box';
import { Avatar } from '../Avatar/Avatar';
import { Text, TextClamp, TEXT_ROLES } from '../../typography';
import { COLORS } from '../../theme.tokens';
import { getUserFullName } from '../../helpers/getUserFullName';
import { AVATAR_STATE } from '../Avatar/Avatar.constants';
import { UserDisplayItemStyles } from './UserDisplayItem.styles';

export const USER_DISPLAY_ITEM_VARIANTS = ['inline', 'block', 'rol', 'email'];
export const USER_DISPLAY_ITEM_LAYOUT = ['left', 'right'];
export const USER_DISPLAY_ITEM_SIZES = ['xs', 'sm', 'xmd', 'lg'];

export const USER_DISPLAY_ITEM_DEFAULT_PROPS = {
  variant: 'inline',
  layout: 'left',
  noBreak: false,
  textRole: 'expressive',
};
export const USER_DISPLAY_ITEM_SEVERITIES = ['warning', 'error'];

export const USER_DISPLAY_ITEM_PROP_TYPES = {
  name: PropTypes.string,
  surnames: PropTypes.string,
  avatar: PropTypes.string,
  state: PropTypes.oneOf(AVATAR_STATE),
  rol: PropTypes.string,
  center: PropTypes.string,
  email: PropTypes.string,
  variant: PropTypes.oneOf(USER_DISPLAY_ITEM_VARIANTS),
  layout: PropTypes.oneOf(USER_DISPLAY_ITEM_LAYOUT),
  size: PropTypes.string, // PropTypes.oneOf(USER_DISPLAY_ITEM_SIZES),
  severity: PropTypes.oneOf(USER_DISPLAY_ITEM_SEVERITIES),
  textRole: PropTypes.oneOf(TEXT_ROLES),
  onChat: PropTypes.func,
  noBreak: PropTypes.bool,
};

const UserDisplayItem = (properties) => {
  const {
    name,
    surnames,
    avatar,
    state,
    severity,
    rol,
    center,
    email,
    variant,
    layout,
    onChat,
    size,
    noBreak,
    highlight,
    textRole,
    fullNameClassname,
    ...props
  } = properties;

  const { classes, cx } = UserDisplayItemStyles(
    {
      variant,
      layout,
      size,
      noBreak,
      severity,
    },
    { name: 'UserDisplayItem' },
  );

  let avatarSize = size;
  if (!size) {
    if (variant === 'email') {
      avatarSize = 'sm';
    } else {
      avatarSize = 'md';
    }
  }
  const textColor = variant === 'block' ? 'secondary' : 'primary';

  const role = useMemo(() => (!isEmpty(center) ? `${rol} · ${center}` : rol), [rol, center]);
  const fullName = useMemo(() => {
    if (['rol', 'inline'].includes(variant)) {
      return `${surnames || ''}${surnames ? ', ' : ''}${name}`;
    }
    return name;
  }, [name, surnames, variant]);

  const userFullName = getUserFullName(properties);

  const Icon = (
    <>
      {severity === 'error' ? (
        <BlockIcon className={classes.severityIcon} style={{ color: COLORS.fatic01 }} />
      ) : null}
      {severity === 'warning' ? (
        <AlertWarningTriangleIcon
          className={classes.severityIcon}
          style={{ color: COLORS.fatic03 }}
        />
      ) : null}
    </>
  );

  return (
    <Box {...props} className={classes.root}>
      <Avatar
        image={avatar}
        fullName={userFullName}
        size={avatarSize}
        state={state}
        alt={`Avatar of ${userFullName}`}
      />
      <Box
        className={classes.userInfo}
        // style={{ width: `calc(100% - 0.5rem - ${avatarSize === 'xs' ? 24 : 36}px)` }}
      >
        {variant === 'email' ? (
          <>
            <PluginComunicaIcon
              height={12}
              width={12}
              className={classes.emailIcon}
              onClick={onChat}
            />
            <a className={classes.email} href={`mailto:${email}`}>
              <Highlight highlight={highlight}>{email}</Highlight>
            </a>
          </>
        ) : (
          <>
            <Text className={classes.rol}>
              <Highlight highlight={highlight}>{role}</Highlight>
              {variant === 'rol' ? Icon : null}
            </Text>
            {!isEmpty(surnames) && (
              <Text
                highlight={highlight}
                color={textColor}
                className={classes.surnames}
                role={textRole}
              >
                {surnames}
              </Text>
            )}
            <TextClamp lines={noBreak ? 1 : 1000}>
              <Text
                color={textColor}
                className={cx(classes.name, fullNameClassname)}
                role={textRole}
              >
                <Highlight highlight={highlight}>{fullName}</Highlight>
                {variant !== 'rol' ? Icon : null}
              </Text>
            </TextClamp>
          </>
        )}
      </Box>
    </Box>
  );
};

UserDisplayItem.defaultProps = USER_DISPLAY_ITEM_DEFAULT_PROPS;
UserDisplayItem.propTypes = USER_DISPLAY_ITEM_PROP_TYPES;

export { UserDisplayItem };
