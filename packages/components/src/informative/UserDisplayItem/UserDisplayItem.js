import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mantine/core';
import { UserDisplayItemStyles } from './UserDisplayItem.styles';
import { Avatar } from '../Avatar/';
import { Text } from '../../typography/Text/Text';
import { PluginComunicaIcon } from '@bubbles-ui/icons/solid/';

export const USER_DISPLAY_ITEM_VARIANTS = ['inline', 'block', 'rol', 'email'];
export const USER_DISPLAY_ITEM_LAYOUT = ['left', 'right'];

export const USER_DISPLAY_ITEM_DEFAULT_PROPS = {
  variant: 'inline',
  layout: 'left',
};
export const USER_DISPLAY_ITEM_PROP_TYPES = {
  name: PropTypes.string,
  surname: PropTypes.string,
  avatar: PropTypes.string,
  rol: PropTypes.string,
  email: PropTypes.string,
  variant: PropTypes.oneOf(USER_DISPLAY_ITEM_VARIANTS),
  layout: PropTypes.oneOf(USER_DISPLAY_ITEM_LAYOUT),
};

const UserDisplayItem = ({ name, surname, avatar, rol, email, variant, layout, ...props }) => {
  const { classes, cx } = UserDisplayItemStyles({ variant, layout }, { name: 'UserDisplayItem' });

  const avatarSize = variant === 'email' ? 'xs' : 'sm';
  const textColor = variant === 'block' ? 'secondary' : 'primary';

  return (
    <Box {...props} className={classes.root}>
      <Avatar image={avatar} size={avatarSize} />
      <Box className={classes.userInfo}>
        {variant === 'email' ? (
          <>
            <PluginComunicaIcon height={12} width={12} className={classes.emailIcon} />
            <Text color={'interactive'} className={classes.email}>
              {email}
            </Text>
          </>
        ) : (
          <>
            <Text className={classes.rol}>{rol}</Text>
            <Text color={textColor} className={classes.name}>
              {name}
            </Text>
            <Text color={textColor} className={classes.surname}>
              {surname}
            </Text>
          </>
        )}
      </Box>
    </Box>
  );
};

UserDisplayItem.defaultProps = USER_DISPLAY_ITEM_DEFAULT_PROPS;

UserDisplayItem.propTypes = USER_DISPLAY_ITEM_PROP_TYPES;

export { UserDisplayItem };
