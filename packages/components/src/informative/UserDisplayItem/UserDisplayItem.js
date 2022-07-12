import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { PluginComunicaIcon } from '@bubbles-ui/icons/solid/';
import { AlertWarningTriangleIcon, BlockIcon } from '@bubbles-ui/icons/solid';
import { Box } from '../../layout';
import { Avatar } from '../Avatar/';
import { Text, TEXT_ROLES } from '../../typography';

import { UserDisplayItemStyles } from './UserDisplayItem.styles';
import { COLORS } from '../../theme.tokens';
import { getUserFullName } from '../../navigation/MainNav/helpers/getUserFullName';

export const USER_DISPLAY_ITEM_VARIANTS = ['inline', 'block', 'rol', 'email'];
export const USER_DISPLAY_ITEM_LAYOUT = ['left', 'right'];
export const USER_DISPLAY_ITEM_SIZES = ['xs', 'sm'];

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
  rol: PropTypes.string,
  center: PropTypes.string,
  email: PropTypes.string,
  variant: PropTypes.oneOf(USER_DISPLAY_ITEM_VARIANTS),
  layout: PropTypes.oneOf(USER_DISPLAY_ITEM_LAYOUT),
  size: PropTypes.oneOf(USER_DISPLAY_ITEM_SIZES),
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
    severity,
    rol,
    center,
    email,
    variant,
    layout,
    onChat,
    size,
    noBreak,
    textRole,
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
    { name: 'UserDisplayItem' }
  );

  const avatarSize = !size ? (variant === 'email' ? 'xs' : 'sm') : size;
  const textColor = variant === 'block' ? 'secondary' : 'primary';

  const role = useMemo(() => (!isEmpty(center) ? `${rol} · ${center}` : rol), [rol, center]);
  const fullName = useMemo(
    () => (['rol', 'inline'].includes(variant) ? `${name}${surnames ? ` ${surnames}` : ''}` : name),
    [name, surnames, variant]
  );

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
        alt={`Avatar of ${userFullName}`}
      />
      <Box
        className={classes.userInfo}
        style={{ width: `calc(100% - 0.5rem - ${avatarSize === 'xs' ? 24 : 36}px)` }}
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
              {email}
            </a>
          </>
        ) : (
          <>
            <Text className={classes.rol}>
              {role}
              {variant === 'rol' ? Icon : null}
            </Text>
            <Text color={textColor} className={classes.name} role={textRole}>
              {fullName}
              {variant !== 'rol' ? Icon : null}
            </Text>
            {!isEmpty(surnames) && (
              <Text color={textColor} className={classes.surnames} role={textRole}>
                {surnames}
              </Text>
            )}
          </>
        )}
      </Box>
    </Box>
  );
};

UserDisplayItem.defaultProps = USER_DISPLAY_ITEM_DEFAULT_PROPS;
UserDisplayItem.propTypes = USER_DISPLAY_ITEM_PROP_TYPES;

export { UserDisplayItem };
