import React, { useMemo } from 'react';
import { findIndex, forEach, isEmpty, isNumber } from 'lodash';
import { ModuleThreeIcon, TeammateIcon } from '@bubbles-ui/icons/outline';
import { HoverCard } from '@mantine/core';
import { Text } from '../../typography/Text';
import { Box } from '../../layout/Box';
import { Avatar } from '../Avatar/Avatar';
import { AvatarsGroupStyles } from './AvatarsGroup.styles';
import { AVATARS_GROUP_DEFAULT_PROPS, AVATARS_GROUP_PROP_TYPES } from './AvatarsGroup.constants';
import { getUserFullName } from '../../helpers';
import { Stack } from '../../../lib/layout/Stack/Stack';

const AvatarsGroup = ({
  data,
  classesData,
  size,
  customAvatarMargin,
  zIndexInverted,
  limit,
  total,
  moreThanUsersAsMulti,
  numberFromClassesAndData,
  showItemsListOnHover,
  ...props
}) => {
  const { classes, cx, theme } = AvatarsGroupStyles(
    {
      size,
      customAvatarMargin,
    },
    { name: 'AvatarsGroup' },
  );

  const avatars = useMemo(() => {
    const avatarsArray = [];

    if (!isEmpty(data)) {
      const processedData = data.map((item) => {
        if (item.surnames && item.name) {
          return {
            ...item,
            fullName: getUserFullName(item, { singleSurname: true }),
          };
        }
        return item;
      });

      const index = findIndex(processedData, ({ permissions }) => permissions?.includes('owner'));
      processedData.unshift(processedData.splice(index, 1)[0]);

      if (moreThanUsersAsMulti) {
        forEach(processedData, (avatar, i) => {
          if (i + 1 >= moreThanUsersAsMulti && i + 1 < processedData.length) {
            avatarsArray.push({ color: '#696969', icon: <TeammateIcon />, type: 'cus-icon' });
            return false;
          }
          return avatarsArray.push({ ...avatar, type: 'avatar' });
        });
      } else {
        avatarsArray.push(...processedData.map((avatar) => ({ ...avatar, type: 'avatar' })));
      }
    }

    if (!isEmpty(classesData)) {
      if (classesData.length === 1) {
        avatarsArray.push(...classesData.map((avatar) => ({ ...avatar, type: 'icon' })));
      } else {
        avatarsArray.push({ color: '#8E97A3', icon: <ModuleThreeIcon />, type: 'cus-icon' });
      }
    }

    if (!isEmpty(avatarsArray) && isNumber(limit) && avatarsArray.length > limit) {
      return avatarsArray.slice(0, limit);
    }

    return avatarsArray;
  }, [data, classesData, limit, moreThanUsersAsMulti]);

  const overflow = useMemo(() => {
    let dataLength = data.length;
    if (moreThanUsersAsMulti && dataLength >= moreThanUsersAsMulti) {
      dataLength = moreThanUsersAsMulti;
    }
    const limitDiff = dataLength - avatars.length;
    const totalDiff = (total || 0) - avatars.length;
    return Math.max(limitDiff, totalDiff);
  }, [data, avatars, total]);

  const hoverInfo = useMemo(() => {
    // Not intendend to show hover card info when moreThanUsersAsMulti is passed. (For now)
    if (!showItemsListOnHover || moreThanUsersAsMulti || !data?.length) {
      return [];
    }

    // Intended for user avatars only (for now)
    return data
      .filter((user) => user?.name && user?.surnames)
      .map((user) => ({
        ...user,
        fullName: getUserFullName(user, { singleSurname: true }),
      }));
  }, [overflow, data, showItemsListOnHover, moreThanUsersAsMulti]);

  const numberToPrint = useMemo(() => {
    if (numberFromClassesAndData) {
      let n = null;
      if (data.length > 2) {
        n = data.length - 1;
      }
      if (classesData && classesData.length > 1) {
        if (n) {
          n = null;
        } else {
          n = classesData.length;
        }
      }
      if (n) {
        n = (
          <Box>
            <Text className={classes.numberUsers}>{n <= 99 ? `${n}` : '+99'}</Text>
          </Box>
        );
      }
      return n;
    }
    return null;
  }, [numberFromClassesAndData, data, classesData]);

  const avatarsGroupContent = (
    <Box {...props} className={classes.root}>
      {avatars.map((item, index) => {
        if (item.type === 'avatar') {
          return (
            <Avatar
              key={`k-${index}`}
              fullName={item.fullName}
              image={item.avatar}
              size={size}
              styles={{
                root: {
                  zIndex: zIndexInverted ? 50 - index : index,
                },
              }}
              alt={`Avatar of ${item.fullName}`}
            />
          );
        }

        if (item.type === 'cus-icon') {
          return (
            <Avatar
              key={`k-${index}`}
              icon={item.icon}
              color={item.color}
              size={size}
              styles={{
                root: {
                  backgroundColor: item.color,
                  display: 'flex',
                  zIndex: zIndexInverted ? 50 - index : index,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
                image: { width: '70%', height: '70%', filter: 'brightness(0) invert(1)' },
              }}
            />
          );
        }

        if (item.type === 'icon') {
          return (
            <Avatar
              key={`k-${index}`}
              fullName={item.fullName}
              image={item.avatar}
              size={size}
              styles={{
                root: {
                  backgroundColor: item.color,
                  display: 'flex',
                  zIndex: zIndexInverted ? 50 - index : index,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
                image: { width: '70%', height: '70%', filter: 'brightness(0) invert(1)' },
              }}
              alt={`Icon of ${item.fullName}`}
            />
          );
        }
        return null;
      })}
      {overflow > 0 && (
        <Avatar
          size={size}
          color={theme.colors.ui02}
          styles={{
            root: {
              zIndex: zIndexInverted ? 50 - avatars.length : avatars.length,
            },
          }}
          icon={
            <Text
              size={size}
              strong
              className={{ [classes.overflow]: size === 'xs' }}
            >{`+${overflow}`}</Text>
          }
        />
      )}
      {numberToPrint}
    </Box>
  );

  if (showItemsListOnHover && hoverInfo?.length) {
    return (
      <HoverCard withArrow position="top">
        <HoverCard.Target>{avatarsGroupContent}</HoverCard.Target>
        <HoverCard.Dropdown className={classes.dropdown}>
          <Stack direction="column">
            {hoverInfo.map((user) => (
              <Text className={classes.labelTooltip} key={user.id} size="xs">
                {user.fullName}
              </Text>
            ))}
          </Stack>
        </HoverCard.Dropdown>
      </HoverCard>
    );
  }
  return avatarsGroupContent;
};

AvatarsGroup.defaultProps = AVATARS_GROUP_DEFAULT_PROPS;
AvatarsGroup.propTypes = AVATARS_GROUP_PROP_TYPES;

export { AvatarsGroup };
export default AvatarsGroup;
