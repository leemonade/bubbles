import React, { useState, useEffect, useMemo } from 'react';
import { isEmpty, isNumber } from 'lodash';
import { Text } from '../../typography/Text';
import { Box } from '../../layout';
import { Avatar } from '../Avatar/Avatar';
import { AvatarsGroupStyles } from './AvatarsGroup.styles';
import { AVATARS_GROUP_DEFAULT_PROPS, AVATARS_GROUP_PROP_TYPES } from './AvatarsGroup.constants';
import { ImageLoader } from '../../misc';

const AvatarsGroup = ({ data, classesData, size, limit, total, ...props }) => {
  const { classes, cx, theme } = AvatarsGroupStyles({ size }, { name: 'AvatarsGroup' });

  const avatars = useMemo(() => {
    const avatars = [];

    if (!isEmpty(data)) {
      avatars.push(...data.map(avatar => ({ ...avatar, type: 'avatar' })))
    }

    if (!isEmpty(classesData)) {
      avatars.push(...classesData.map(avatar => ({ ...avatar, type: 'icon' })))
    }

    if (!isEmpty(avatars) && isNumber(limit) && avatars.length > limit) {
      return avatars.slice(0, limit);
    }

    return avatars;
  }, [data, classesData, limit]);

  const overflow = useMemo(() => {
    const limitDiff = data.length - avatars.length;
    const totalDiff = (total || 0) - avatars.length;
    return Math.max(limitDiff, totalDiff);
  }, [data, avatars, total]);

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
                alt={`Avatar of ${item.fullName}`}
              />
            )
          }

          if (item.type === 'icon') {
            return (
              <Avatar
                key={`k-${index}`}
                fullName={item.fullName}
                image={item.avatar}
                size={size}
                styles={{ root: { backgroundColor: item.color, display: 'flex', justifyContent: 'center', alignItems: 'center' }, image: { width: '70%', height: '70%', filter: 'brightness(0) invert(1)' } }}
                alt={`Icon of ${item.fullName}`}
              />

            )
          }
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
      </Box>
    </>
  );
};

AvatarsGroup.defaultProps = AVATARS_GROUP_DEFAULT_PROPS;
AvatarsGroup.propTypes = AVATARS_GROUP_PROP_TYPES;

export { AvatarsGroup };
