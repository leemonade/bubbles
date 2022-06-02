import React from 'react';
import { Box, ContextContainer, UserCards, Badge, Text, Drawer } from '@bubbles-ui/components';
import { UserDetailModalStyles } from './UserDetailModal.styles';
import {
  USER_DETAIL_MODAL_DEFAULT_PROPS,
  USER_DETAIL_MODAL_PROP_TYPES,
} from './UserDetailModal.constants';
import { isFunction } from 'lodash';

const UserDetailModal = ({ user, labels, badges, opened, onClose, ...props }) => {
  const userKeys = Object.keys(user);
  const filteredLabels = Object.keys(labels).filter((label) => userKeys.includes(label));

  const handleOnClose = () => {
    isFunction(onClose) && onClose();
  };

  const renderBadges = () => {
    return badges.map((badge) => (
      <Box key={badge}>
        <Badge label={badge} color="stroke" radius="default" closable={false} />
      </Box>
    ));
  };

  const renderLabels = () => {
    return filteredLabels.map((label) => (
      <Box key={label}>
        <Text color="primary" role="productive">
          {labels[label]}
        </Text>
      </Box>
    ));
  };

  const renderPersonalInfo = () => {
    const userKeys = Object.keys(user);
    const labelKeys = Object.keys(labels);
    const filteredLabels = labelKeys.filter((label) => userKeys.includes(label));

    return filteredLabels.map((label) => {
      const value = user[label] instanceof Date ? user[label].toLocaleDateString() : user[label];

      return (
        <Box key={`${label}-info`}>
          <Text role="productive">{value}</Text>
        </Box>
      );
    });
  };

  const { classes, cx } = UserDetailModalStyles({}, { name: 'UserDetailModal' });
  return (
    <Drawer opened={opened} onClose={handleOnClose} centered position="right" size={650} {...props}>
      <ContextContainer divided>
        <UserCards layout="horizontal" variant="full" user={{ ...user }} />
        <ContextContainer title={labels.personalInformation}>
          <Box className={classes.personalInformation}>
            <Box className={classes.labelCol}>{renderLabels()}</Box>
            <Box className={classes.infoCol}>{renderPersonalInfo()}</Box>
          </Box>
        </ContextContainer>
        <ContextContainer title={labels.badges} spacing={4}>
          {renderBadges()}
        </ContextContainer>
      </ContextContainer>
    </Drawer>
  );
};

UserDetailModal.defaultProps = USER_DETAIL_MODAL_DEFAULT_PROPS;
UserDetailModal.propTypes = USER_DETAIL_MODAL_PROP_TYPES;

export { UserDetailModal };
