import React, { useMemo } from 'react';
import { findIndex, forEach, isEmpty, isNumber } from 'lodash';
import { ModuleThreeIcon, TeammateIcon } from '@bubbles-ui/icons/outline';
import { Text } from '../../typography/Text';
import { Box } from '../../layout/Box';
import { Avatar } from '../Avatar/Avatar';
import { AvatarsGroupStyles } from './AvatarsGroup.styles';
import { AVATARS_GROUP_DEFAULT_PROPS, AVATARS_GROUP_PROP_TYPES } from './AvatarsGroup.constants';

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
  ...props
}) => {
  const { classes, cx, theme } = AvatarsGroupStyles(
    {
      size,
      customAvatarMargin,
    },
    { name: 'AvatarsGroup' }
  );

  const avatars = useMemo(() => {
    const avatarsArray = [];

    if (!isEmpty(data)) {
      const index = findIndex(data, ({ permissions }) => permissions?.includes('owner'));
      data.unshift(data.splice(index, 1)[0]);
      if (moreThanUsersAsMulti) {
        forEach(data, (avatar, i) => {
          if (i + 1 >= moreThanUsersAsMulti && i + 1 < data.length) {
            avatarsArray.push({ color: '#696969', icon: <TeammateIcon />, type: 'cus-icon' });
            return false;
          }
          avatarsArray.push({ ...avatar, type: 'avatar' });
        });
      } else {
        avatarsArray.push(...data.map((avatar) => ({ ...avatar, type: 'avatar' })));
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
    let d = data.length;
    if (moreThanUsersAsMulti && d >= moreThanUsersAsMulti) d = moreThanUsersAsMulti;
    const limitDiff = d - avatars.length;
    const totalDiff = (total || 0) - avatars.length;
    return Math.max(limitDiff, totalDiff);
  }, [data, avatars, total]);

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
            <Text className={classes.numberUsers}>{n <= 99 ? `(${n})` : '+99'}</Text>
          </Box>
        );
      }
      return n;
    }
    return null;
  }, [numberFromClassesAndData, data, classesData]);

  return (
    <>
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
    </>
  );
};

AvatarsGroup.defaultProps = AVATARS_GROUP_DEFAULT_PROPS;
AvatarsGroup.propTypes = AVATARS_GROUP_PROP_TYPES;

export { AvatarsGroup };
export default AvatarsGroup;
