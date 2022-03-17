import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { PluginComunicaIcon } from '@bubbles-ui/icons/solid/';
import { Box } from '../../layout';
import { Avatar } from '../Avatar/';
import { Text } from '../../typography/Text/Text';
import { UserDisplayItemStyles } from './UserDisplayItem.styles';

export const USER_DISPLAY_ITEM_VARIANTS = ['inline', 'block', 'rol', 'email'];
export const USER_DISPLAY_ITEM_LAYOUT = ['left', 'right'];
export const USER_DISPLAY_ITEM_SIZES = ['xs', 'sm'];

export const USER_DISPLAY_ITEM_DEFAULT_PROPS = {
  variant: 'inline',
  layout: 'left',
  noBreak: false,
};
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
  onChat: PropTypes.func,
  noBreak: PropTypes.bool,
};

const UserDisplayItem = ({
  name,
  surnames,
  avatar,
  rol,
  center,
  email,
  variant,
  layout,
  onChat,
  size,
  noBreak,
  ...props
}) => {
  const { classes, cx } = UserDisplayItemStyles(
    {
      variant,
      layout,
      size,
      noBreak,
    },
    { name: 'UserDisplayItem' }
  );

  const avatarSize = !size ? (variant === 'email' ? 'xs' : 'sm') : size;
  const textColor = variant === 'block' ? 'secondary' : 'primary';

  const role = useMemo(() => (!isEmpty(center) ? `${rol} · ${center}` : rol), [rol, center]);
  const fullName = useMemo(
    () => (['rol'].includes(variant) ? `${name}${surnames ? ` ${surnames}` : ''}` : name),
    [name, surnames, variant]
  );

  return (
    <Box {...props} className={classes.root}>
      <Avatar image={avatar} fullName={fullName} size={avatarSize} />
      <Box
        className={classes.userInfo}
        style={{ width: `calc(100% - 0.5rem - ${avatarSize === 'xs' ? 26 : 32}px)` }}
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
            <Text className={classes.rol}>{role}</Text>
            <Text color={textColor} className={classes.name}>
              {fullName}
            </Text>
            {!isEmpty(surnames) && (
              <Text color={textColor} className={classes.surnames}>
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
