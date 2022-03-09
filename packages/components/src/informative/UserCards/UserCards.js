import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mantine/core';
import { UserCardsStyles } from './UserCards.styles';
import { UserDisplayItem } from '../UserDisplayItem';
import { PluginComunicaIcon } from '@bubbles-ui/icons/solid/';
import { AlertWarningTriangleIcon } from '@bubbles-ui/icons/solid/';
import { CakeBirthdayIcon } from '@bubbles-ui/icons/solid/';
import { Avatar } from '../Avatar';
import { Text } from '../../typography/Text';

export const USER_CARD_VARIANTS = ['full', 'simple', 'large', 'contact'];
export const USER_CARD_LAYOUT = ['horizontal', 'vertical'];

export const USER_CARDS_DEFAULT_PROPS = {
  variant: 'full',
  layout: 'horizontal',
  selected: false,
};
export const USER_CARDS_PROP_TYPES = {
  user: PropTypes.shape({
    name: PropTypes.string,
    surnames: PropTypes.string,
    avatar: PropTypes.string,
    rol: PropTypes.string,
    email: PropTypes.string,
    number: PropTypes.string,
    birthday: PropTypes.date,
  }),
  variant: PropTypes.oneOf(USER_CARD_VARIANTS),
  layout: PropTypes.oneOf(USER_CARD_LAYOUT),
  error: PropTypes.string,
  selected: PropTypes.bool,
  onChat: PropTypes.func,
};

const UserCards = ({ user, variant, layout, error, selected, onChat, ...props }) => {
  const variantStates = {
    isFull: variant === 'full',
    isSimple: variant === 'simple',
    isLarge: variant === 'large',
    isContact: variant === 'contact',
  };
  const layoutStates = {
    isHorizontal: layout === 'horizontal',
    isVertical: layout === 'vertical',
  };
  const { isFull, isSimple, isLarge, isContact } = variantStates;
  const { isHorizontal, isVertical } = layoutStates;
  const { classes, cx } = UserCardsStyles(
    { variantStates, layoutStates, error, selected },
    { name: 'UserCards' }
  );
  const { name, surnames, avatar, rol, email, number } = user;

  const birthdayLocale = user.birthday.toLocaleDateString('default', {
    month: 'long',
    day: 'numeric',
  });

  if (isContact || isLarge) {
    layout = 'horizontal';
  }

  const avatarSize = isLarge ? 'lg' : isVertical && (isFull || isSimple) ? 'md' : 'sm';

  return (
    <Box {...props} className={classes.root}>
      <Box className={classes.container}>
        <Avatar image={avatar} size={avatarSize} className={classes.avatar} />
        <Box className={classes.userInfo}>
          {isFull && isVertical && (
            <Text color={'primary'} className={classes.rol}>
              {rol}
            </Text>
          )}
          <Text color={'primary'} className={classes.name}>
            {name} {surnames}
          </Text>
          {(isFull & isVertical || isContact) && <Text className={classes.number}>{number}</Text>}
          <a color={'interactive'} className={classes.email} href={`mailto:${email}`}>
            {isVertical && (isFull || isSimple) && <PluginComunicaIcon />}
            {email}
          </a>
          {!(isSimple & isHorizontal || isContact) && (
            <Box className={classes.birthdayContainer}>
              <Text className={classes.birthday}>Cumpleaños</Text>
              <Box>
                <Text color={'primary'} className={classes.date}>
                  {birthdayLocale}
                </Text>
                {(isLarge || (isFull && isHorizontal)) && <CakeBirthdayIcon />}
              </Box>
            </Box>
          )}
          {isContact && error && (
            <Box className={classes.error}>
              <AlertWarningTriangleIcon />
              <Text>{error}</Text>
            </Box>
          )}
        </Box>
        {isFull && isHorizontal && (
          <PluginComunicaIcon height={20} width={20} className={classes.icon} onClick={onChat} />
        )}
      </Box>
    </Box>
  );
};

UserCards.defaultProps = USER_CARDS_DEFAULT_PROPS;

UserCards.propTypes = USER_CARDS_PROP_TYPES;

export { UserCards };
